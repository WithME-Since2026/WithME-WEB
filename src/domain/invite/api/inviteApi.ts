import type {
  InviteMeetingResponse,
  SubmitInviteResponseRequest,
  SubmitInviteResponseResponse,
} from '@/domain/invite/types';

import mockAvatar1 from '@/assets/images/mock-avatar-1.jpg';
import mockAvatar2 from '@/assets/images/mock-avatar-2.jpg';
import mockAvatar3 from '@/assets/images/mock-avatar-3.jpg';
import mockAvatar4 from '@/assets/images/mock-avatar-4.jpg';
import mockMeetingCover from '@/assets/images/mock-meeting-cover.jpg';


// TODO: 초대 코드로 모임 정보를 조회하는 백엔드 API 확정 후 apiClient.get으로 교체
export async function getInviteMeeting(inviteCode: string): Promise<InviteMeetingResponse> {
  return {
    inviteCode,
    roundLabel: '3회차',
    title: '화요일 독서모임',
    coverImageUrl: mockMeetingCover,
    memberCount: 12,
    memberAvatarUrls: [mockAvatar1, mockAvatar2, mockAvatar3, mockAvatar4],
    inviterName: '홍길동',
    inviterAvatarUrl: mockAvatar1,
    dateText: '2025년 7월 15일 (화)',
    timeText: '오후 7:00 – 9:00',
    locationText: '서울 강남구 대학로 1',
  };
}

// TODO: 웹 참석 응답 제출 API 확정 후 apiClient.patch로 교체
// TODO: PENDING 응답자가 같은 링크로 재방문 시 응답을 수정할 수 있도록 응답자 식별 방식 백엔드와 합의 필요
export async function submitInviteResponse(
  request: SubmitInviteResponseRequest,
): Promise<SubmitInviteResponseResponse> {
  return { attendanceStatus: request.attendanceStatus };
}
