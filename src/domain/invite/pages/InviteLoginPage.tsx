import { Navigate, useParams } from 'react-router-dom';

import { getApiErrorMessage } from '@/common/api/apiError';
import { ErrorView } from '@/common/components/ErrorView';
import { LoadingView } from '@/common/components/LoadingView';
import { hasAccessToken } from '@/common/storage/authTokenStorage';

import styles from './InvitePage.module.css';

import { useKakaoLoginStartMutation } from '@/domain/auth/hooks/useKakaoLoginStartMutation';
import { InviteLayout } from '@/domain/invite/components/InviteLayout';
import { InviteQuestion } from '@/domain/invite/components/InviteQuestion';
import { KakaoLoginSection } from '@/domain/invite/components/KakaoLoginSection';
import { MeetingInfoCard } from '@/domain/invite/components/MeetingInfoCard';
import { useInviteMeetingQuery } from '@/domain/invite/hooks/useInviteMeetingQuery';

export function InviteLoginPage() {
  const { inviteCode = '' } = useParams();
  const { data: meeting, isLoading, isError } = useInviteMeetingQuery(inviteCode);
  const {
    mutate: startKakaoLogin,
    isPending: isKakaoLoginPending,
    error: kakaoLoginError,
  } = useKakaoLoginStartMutation();

  // 이미 로그인한 참여자(카카오 로그인 후 돌아온 경우 포함)는 바로 응답 화면으로
  if (hasAccessToken()) {
    return <Navigate to={`/invite/${inviteCode}/respond`} replace />;
  }

  if (isLoading) {
    return <LoadingView />;
  }

  if (isError || !meeting) {
    return <ErrorView message="모임 정보를 불러오지 못했습니다." />;
  }

  return (
    <InviteLayout meeting={meeting}>
      <InviteQuestion
        title={meeting.title}
        inviterName={meeting.inviterName}
        inviterAvatarUrl={meeting.inviterAvatarUrl}
      />
      <div className={styles.horizontalPadding}>
        <MeetingInfoCard
          dateText={meeting.dateText}
          timeText={meeting.timeText}
          locationText={meeting.locationText}
        />
      </div>
      <KakaoLoginSection
        onKakaoLogin={() => startKakaoLogin()}
        isPending={isKakaoLoginPending}
        errorMessage={
          kakaoLoginError
            ? getApiErrorMessage(kakaoLoginError, '카카오 로그인을 시작하지 못했어요.')
            : undefined
        }
      />
    </InviteLayout>
  );
}
