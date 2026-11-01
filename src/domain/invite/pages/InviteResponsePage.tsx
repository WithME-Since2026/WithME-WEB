import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { getApiErrorMessage } from '@/common/api/apiError';
import { ErrorView } from '@/common/components/ErrorView';
import { LoadingView } from '@/common/components/LoadingView';

import pageStyles from './InvitePage.module.css';
import styles from './InviteResponsePage.module.css';

import { AttendanceChoiceButtons } from '@/domain/invite/components/AttendanceChoiceButtons';
import { InviteLayout } from '@/domain/invite/components/InviteLayout';
import { InviteQuestion } from '@/domain/invite/components/InviteQuestion';
import { MeetingInfoCard } from '@/domain/invite/components/MeetingInfoCard';
import { useInviteMeetingQuery } from '@/domain/invite/hooks/useInviteMeetingQuery';
import { useSubmitInviteResponseMutation } from '@/domain/invite/hooks/useSubmitInviteResponseMutation';
import type { InviteAttendanceStatus } from '@/domain/invite/types';


export type InviteResultLocationState = {
  attendanceStatus: InviteAttendanceStatus;
};

export function InviteResponsePage() {
  const { inviteCode = '' } = useParams();
  const navigate = useNavigate();
  const { data: meeting, isLoading, isError } = useInviteMeetingQuery(inviteCode);
  const {
    mutate: submitResponse,
    isPending,
    error: submitError,
  } = useSubmitInviteResponseMutation();

  const [attendanceStatus, setAttendanceStatus] = useState<InviteAttendanceStatus | null>(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isNameRequiredVisible, setIsNameRequiredVisible] = useState(false);

  const isSubmitDisabled = !attendanceStatus || !name.trim() || isPending;

  const submitAttendance = (status: InviteAttendanceStatus) => {
    submitResponse(
      {
        inviteCode,
        attendanceStatus: status,
        name: name.trim(),
        message: message.trim() || undefined,
      },
      {
        onSuccess: (result) => {
          const state: InviteResultLocationState = { attendanceStatus: result.attendanceStatus };
          navigate(`/invite/${inviteCode}/result`, { replace: true, state });
        },
      },
    );
  };

  // 운영자가 "미정" 응답자를 구분할 수 있도록 PENDING으로 제출 (응답자 식별을 위해 이름 필수)
  const handleDecideLater = () => {
    if (isPending) {
      return;
    }

    if (!name.trim()) {
      setIsNameRequiredVisible(true);
      return;
    }

    setAttendanceStatus(null);
    submitAttendance('PENDING');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setIsNameRequiredVisible(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!attendanceStatus || !name.trim()) {
      return;
    }

    submitAttendance(attendanceStatus);
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
      <div className={pageStyles.horizontalPadding}>
        <MeetingInfoCard
          dateText={meeting.dateText}
          timeText={meeting.timeText}
          locationText={meeting.locationText}
        />
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.sectionLabel}>참석 여부를 선택해주세요</p>
        <div className={styles.choiceButtons}>
          <AttendanceChoiceButtons value={attendanceStatus} onChange={setAttendanceStatus} />
        </div>
        <button type="button" className={styles.decideLaterButton} onClick={handleDecideLater}>
          나중에 결정할게요
        </button>

        <p className={styles.messageLabel}>
          내용 작성 <span className={styles.optionalLabel}>선택</span>
        </p>
        <textarea
          className={styles.messageInput}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="전달할 내용을 입력해주세요"
          aria-label="전달할 내용"
        />
        <input
          className={styles.nameInput}
          value={name}
          onChange={handleNameChange}
          placeholder="이름을 입력해주세요"
          aria-label="이름"
          aria-invalid={isNameRequiredVisible}
        />

        {isNameRequiredVisible && (
          <p className={styles.errorMessage}>나중에 결정하려면 이름을 입력해주세요.</p>
        )}

        {submitError && (
          <p className={styles.errorMessage}>
            {getApiErrorMessage(submitError, '응답을 제출하지 못했습니다.')}
          </p>
        )}

        <button type="submit" className={styles.submitButton} disabled={isSubmitDisabled}>
          응답 제출하기
        </button>
      </form>
    </InviteLayout>
  );
}
