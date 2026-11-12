import { useMutation } from '@tanstack/react-query';

import { setAuthTokens } from '@/common/storage/authTokenStorage';

import { loginWithKakao } from '@/domain/auth/api/authApi';

export function useKakaoLoginMutation() {
  return useMutation({
    mutationFn: loginWithKakao,
    onSuccess: ({ accessToken, refreshToken }) => {
      setAuthTokens({ accessToken, refreshToken });
    },
  });
}
