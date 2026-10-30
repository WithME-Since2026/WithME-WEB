import { useMutation } from '@tanstack/react-query';

import { submitInviteResponse } from '@/domain/invite/api/inviteApi';

export function useSubmitInviteResponseMutation() {
  return useMutation({
    mutationFn: submitInviteResponse,
  });
}
