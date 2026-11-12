import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

import {
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
  setAuthTokens,
  type AuthTokens,
} from '@/common/storage/authTokenStorage';
import type { ApiResponse } from '@/common/types/api';

// 로컬 개발에서는 비워두고 vite proxy(VITE_API_PROXY_TARGET)로 /api 요청을 전달
const BASE_URL = import.meta.env.VITE_API_URL ?? '';

const REISSUE_PATH = '/api/v1/auth/reissue';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

type RetriableRequestConfig = InternalAxiosRequestConfig & { _retry?: boolean };

// 동시에 여러 요청이 401을 받아도 재발급은 한 번만 하도록 진행 중인 요청을 공유
let reissuePromise: Promise<string | null> | null = null;

// TODO: 재발급 응답 형식은 Swagger 확인 후 맞출 것 (현재는 로그인 응답과 같은 토큰 필드로 가정)
async function reissueAccessToken(): Promise<string | null> {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    return null;
  }

  try {
    const { data } = await axios.post<ApiResponse<AuthTokens>>(`${BASE_URL}${REISSUE_PATH}`, {
      refreshToken,
    });
    setAuthTokens(data.data);
    return data.data.accessToken;
  } catch {
    return null;
  }
}

// 액세스 토큰(30분)이 만료되면 리프레시 토큰으로 한 번 재발급 후 원래 요청을 다시 보냄
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableRequestConfig | undefined;

    // 로그인 API의 401(카카오 인가 코드 오류)은 토큰 만료가 아니므로 재발급하지 않음
    const isAuthRequest = originalRequest?.url?.startsWith('/api/v1/auth/');

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      isAuthRequest
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;
    reissuePromise ??= reissueAccessToken().finally(() => {
      reissuePromise = null;
    });
    const newAccessToken = await reissuePromise;

    if (!newAccessToken) {
      clearAuthTokens();
      return Promise.reject(error);
    }

    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    return apiClient(originalRequest);
  },
);
