// 백엔드 GroupResponse의 attendanceStatus enum 값과 맞춤 (ATTEND / ABSENT)
// TODO: PENDING("나중에 결정할게요")은 백엔드 enum 추가 합의 필요
export type InviteAttendanceStatus = 'ATTEND' | 'ABSENT' | 'PENDING';

export type InviteMeetingResponse = {
  inviteCode: string;
  roundLabel: string;
  title: string;
  coverImageUrl: string;
  memberCount: number;
  memberAvatarUrls: string[];
  inviterName: string;
  inviterAvatarUrl: string;
  dateText: string;
  timeText: string;
  locationText: string;
};

export type SubmitInviteResponseRequest = {
  inviteCode: string;
  attendanceStatus: InviteAttendanceStatus;
  name: string;
  message?: string;
};

export type SubmitInviteResponseResponse = {
  attendanceStatus: InviteAttendanceStatus;
};
