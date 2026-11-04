import { Navigate, useLocation, useParams } from 'react-router-dom';

import { ErrorView } from '@/common/components/ErrorView';
import { LoadingView } from '@/common/components/LoadingView';

import type { InviteResultLocationState } from './InviteResponsePage';
import styles from './InviteResultPage.module.css';

import { AppDownloadCard } from '@/domain/invite/components/AppDownloadCard';
import { InviteLayout } from '@/domain/invite/components/InviteLayout';
import { MeetingInfoCard } from '@/domain/invite/components/MeetingInfoCard';
import { ResponseResultSummary } from '@/domain/invite/components/ResponseResultSummary';
import { useInviteMeetingQuery } from '@/domain/invite/hooks/useInviteMeetingQuery';


export function InviteResultPage() {
  const { inviteCode = '' } = useParams();
  const location = useLocation();
  const resultState = location.state as InviteResultLocationState | null;
  const { data: meeting, isLoading, isError } = useInviteMeetingQuery(inviteCode);

  // 응답 제출 없이 결과 주소로 바로 들어오면 응답 화면으로 돌려보냄
  if (!resultState?.attendanceStatus) {
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
      <div className={styles.container}>
        <ResponseResultSummary
          attendanceStatus={resultState.attendanceStatus}
          inviterName={meeting.inviterName}
        />
        <div className={styles.infoCard}>
          <MeetingInfoCard
            dateText={meeting.dateText}
            timeText={meeting.timeText}
            locationText={meeting.locationText}
          />
        </div>
        <div className={styles.downloadCard}>
          <AppDownloadCard />
        </div>
      </div>
    </InviteLayout>
  );
}
