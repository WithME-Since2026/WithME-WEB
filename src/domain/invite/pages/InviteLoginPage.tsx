import { useNavigate, useParams } from 'react-router-dom';

import { ErrorView } from '@/common/components/ErrorView';
import { LoadingView } from '@/common/components/LoadingView';

import styles from './InvitePage.module.css';

import { InviteLayout } from '@/domain/invite/components/InviteLayout';
import { InviteQuestion } from '@/domain/invite/components/InviteQuestion';
import { KakaoLoginSection } from '@/domain/invite/components/KakaoLoginSection';
import { MeetingInfoCard } from '@/domain/invite/components/MeetingInfoCard';
import { useInviteMeetingQuery } from '@/domain/invite/hooks/useInviteMeetingQuery';


export function InviteLoginPage() {
  const { inviteCode = '' } = useParams();
  const navigate = useNavigate();
  const { data: meeting, isLoading, isError } = useInviteMeetingQuery(inviteCode);

  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 연동 후 로그인 성공 시에만 응답 화면으로 이동
    navigate(`/invite/${inviteCode}/respond`);
  };

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
      <KakaoLoginSection onKakaoLogin={handleKakaoLogin} />
    </InviteLayout>
  );
}
