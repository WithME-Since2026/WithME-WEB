import { useMutation } from '@tanstack/react-query';

import { getKakaoState } from '@/domain/auth/api/authApi';
import { saveLoginReturnPath } from '@/domain/auth/utils/loginReturnPath';

// state를 발급받은 뒤 현재 화면 경로를 저장하고 카카오 로그인 페이지로 이동
export function useKakaoLoginStartMutation() {
  return useMutation({
    mutationFn: () => getKakaoState('WEB'),
    onSuccess: ({ kakaoLoginUrl }) => {
      saveLoginReturnPath(window.location.pathname);
      window.location.assign(kakaoLoginUrl);
    },
  });
}
