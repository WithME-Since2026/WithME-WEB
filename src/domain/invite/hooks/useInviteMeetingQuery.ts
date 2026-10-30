import { useQuery } from '@tanstack/react-query';

import { getInviteMeeting } from '@/domain/invite/api/inviteApi';

export const inviteQueryKeys = {
  all: ['invite'] as const,
  meeting: (inviteCode: string) => [...inviteQueryKeys.all, 'meeting', inviteCode] as const,
};

export function useInviteMeetingQuery(inviteCode: string) {
  return useQuery({
    queryKey: inviteQueryKeys.meeting(inviteCode),
    queryFn: () => getInviteMeeting(inviteCode),
  });
}
