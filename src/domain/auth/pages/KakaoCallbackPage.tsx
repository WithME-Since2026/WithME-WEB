import { useEffect, useRef } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import { getApiErrorMessage } from '@/common/api/apiError';
import { ErrorView } from '@/common/components/ErrorView';
import { LoadingView } from '@/common/components/LoadingView';

import { useKakaoLoginMutation } from '@/domain/auth/hooks/useKakaoLoginMutation';
import { clearLoginReturnPath, peekLoginReturnPath } from '@/domain/auth/utils/loginReturnPath';

// 카카오 로그인 후 돌아오는 화면. 인가 코드를 서버에 보내 토큰을 받고, 로그인을 시작한 화면으로 되돌려 보냄
export function KakaoCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { mutate: login, error } = useKakaoLoginMutation();
  // state는 한 번 쓰면 서버에서 삭제되므로, 개발 모드(StrictMode)의 effect 중복 실행에도 한 번만 요청
  const hasRequestedRef = useRef(false);

  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const returnPath = peekLoginReturnPath() ?? '/';

  useEffect(() => {
    if (hasRequestedRef.current) {
      return;
    }
    hasRequestedRef.current = true;

    // 사용자가 카카오 동의 화면에서 취소하면 code 없이 돌아옴 → 원래 화면으로 복귀
    if (!code || !state) {
      clearLoginReturnPath();
      navigate(returnPath, { replace: true });
      return;
    }

    login(
      { code, state },
      {
        onSuccess: () => {
          clearLoginReturnPath();
          navigate(returnPath, { replace: true });
        },
      },
    );
  }, [code, state, login, navigate, returnPath]);

  if (error) {
    return (
      <ErrorView
        message={getApiErrorMessage(error, '카카오 로그인에 실패했어요. 다시 시도해주세요.')}
        actionLabel="다시 로그인하기"
        onAction={() => {
          clearLoginReturnPath();
          navigate(returnPath, { replace: true });
        }}
      />
    );
  }

  return <LoadingView />;
}
