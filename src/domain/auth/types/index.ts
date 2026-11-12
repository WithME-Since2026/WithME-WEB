// 백엔드는 platform 값에 따라 카카오 redirect_uri를 고름 (WEB이면 웹 콜백 주소)
export type KakaoLoginPlatform = 'WEB';

export type KakaoStateResponse = {
  state: string;
  kakaoLoginUrl: string;
};

export type KakaoLoginRequest = {
  code: string;
  state: string;
};

export type KakaoLoginResponse = {
  userId: number;
  nickname: string;
  accessToken: string;
  refreshToken: string;
  newUser: boolean;
};
