import axios from 'axios';

// 로컬 개발에서는 비워두고 vite proxy(VITE_API_PROXY_TARGET)로 /api 요청을 전달
const BASE_URL = import.meta.env.VITE_API_URL ?? '';

// TODO: 웹 참여자 인증 방식(초대 코드/비회원 등) 확정 후 토큰 인터셉터 추가
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
