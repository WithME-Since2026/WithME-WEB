// 웹 참여자는 응답 한 번으로 끝나는 경우가 많아 탭을 닫으면 사라지는 sessionStorage에 보관
// (저장소 접근이 막힌 환경에서도 앱이 멈추지 않도록 모든 접근을 try/catch로 감쌈)
const ACCESS_TOKEN_KEY = 'withme.accessToken';
const REFRESH_TOKEN_KEY = 'withme.refreshToken';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export function getAccessToken(): string | null {
  try {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function getRefreshToken(): string | null {
  try {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setAuthTokens({ accessToken, refreshToken }: AuthTokens) {
  try {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  } catch {
    // 저장에 실패해도 이번 화면에서는 로그인 상태 없이 진행됨
  }
}

export function clearAuthTokens() {
  try {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
  } catch {
    // 지울 수 없는 환경이면 남은 토큰은 탭을 닫을 때 함께 사라짐
  }
}

export function hasAccessToken() {
  return Boolean(getAccessToken());
}
