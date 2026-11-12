import { apiClient } from '@/common/api/apiClient';
import type { ApiResponse } from '@/common/types/api';

import type {
  KakaoLoginPlatform,
  KakaoLoginRequest,
  KakaoLoginResponse,
  KakaoStateResponse,
} from '@/domain/auth/types';

export async function getKakaoState(platform: KakaoLoginPlatform): Promise<KakaoStateResponse> {
  const { data } = await apiClient.get<ApiResponse<KakaoStateResponse>>(
    '/api/v1/auth/kakao/state',
    { params: { platform } },
  );
  return data.data;
}

export async function loginWithKakao(request: KakaoLoginRequest): Promise<KakaoLoginResponse> {
  const { data } = await apiClient.post<ApiResponse<KakaoLoginResponse>>(
    '/api/v1/auth/kakao/callback',
    request,
  );
  return data.data;
}
