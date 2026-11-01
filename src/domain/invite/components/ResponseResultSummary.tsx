import styles from './ResponseResultSummary.module.css';

import type { InviteAttendanceStatus } from '@/domain/invite/types';

import resultAbsentIcon from '@/assets/icons/result-absent.svg';
import resultAttendIcon from '@/assets/icons/result-attend.svg';
import resultPendingIcon from '@/assets/icons/result-pending.svg';



const RESULT_BY_STATUS: Record<
  InviteAttendanceStatus,
  { icon: string; title: string; className: string }
> = {
  ATTEND: { icon: resultAttendIcon, title: '참석으로 응답했어요', className: styles.attend },
  ABSENT: { icon: resultAbsentIcon, title: '불참으로 응답했어요', className: styles.absent },
  PENDING: { icon: resultPendingIcon, title: '나중에 결정하기로 했어요', className: styles.pending },
};

type ResponseResultSummaryProps = {
  attendanceStatus: InviteAttendanceStatus;
  inviterName: string;
};

export function ResponseResultSummary({
  attendanceStatus,
  inviterName,
}: ResponseResultSummaryProps) {
  const result = RESULT_BY_STATUS[attendanceStatus];

  return (
    <section className={`${styles.container} ${result.className}`}>
      <div className={styles.iconCircle}>
        <img src={result.icon} alt="" width={32} height={32} />
      </div>
      <p className={styles.title}>{result.title}</p>
      <p className={styles.description}>{inviterName}님께 전달됐어요</p>
      {attendanceStatus === 'PENDING' && (
        <p className={styles.description}>같은 링크로 언제든 다시 응답할 수 있어요</p>
      )}
    </section>
  );
}
