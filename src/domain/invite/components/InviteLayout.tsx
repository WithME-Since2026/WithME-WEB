import { AppBanner } from './AppBanner';
import { InviteHeader } from './InviteHeader';
import styles from './InviteLayout.module.css';
import { MeetingCover } from './MeetingCover';

import type { InviteMeetingResponse } from '@/domain/invite/types';

type InviteLayoutProps = {
  meeting: InviteMeetingResponse;
  children: React.ReactNode;
};

// 로그인 / 응답 / 결과 화면이 공통으로 쓰는 카드 틀 (헤더, 모임 커버, 하단 앱 설치 배너)
export function InviteLayout({ meeting, children }: InviteLayoutProps) {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <InviteHeader roundLabel={meeting.roundLabel} />
        <MeetingCover
          title={meeting.title}
          coverImageUrl={meeting.coverImageUrl}
          memberCount={meeting.memberCount}
          memberAvatarUrls={meeting.memberAvatarUrls}
        />
        <div className={styles.content}>{children}</div>
        <AppBanner />
      </main>
    </div>
  );
}
