// 카카오 로그인은 다른 사이트를 거쳐 콜백 주소로 돌아오기 때문에, 로그인을 시작한 화면 경로를 저장해 두고 돌아올 때 꺼내 씀
const RETURN_PATH_KEY = 'withme.loginReturnPath';

export function saveLoginReturnPath(path: string) {
  try {
    sessionStorage.setItem(RETURN_PATH_KEY, path);
  } catch {
    // 저장에 실패하면 로그인 후 홈으로 이동
  }
}

// 다른 사이트의 주소로 이동하지 않도록 이 사이트 안의 경로만 허용
export function peekLoginReturnPath(): string | null {
  try {
    const path = sessionStorage.getItem(RETURN_PATH_KEY);
    return path?.startsWith('/') && !path.startsWith('//') ? path : null;
  } catch {
    return null;
  }
}

export function clearLoginReturnPath() {
  try {
    sessionStorage.removeItem(RETURN_PATH_KEY);
  } catch {
    // 남은 경로는 다음 로그인 시작 때 덮어써짐
  }
}
