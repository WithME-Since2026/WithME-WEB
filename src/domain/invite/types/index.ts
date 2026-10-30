// 백엔드 GroupResponse의 attendanceStatus enum 값과 맞춤 (ATTEND / ABSENT)
export type InviteAttendanceStatus = 'ATTEND' | 'ABSENT';

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
