import { useMutation } from '@tanstack/react-query';

import { createThread } from 'dataAccess/fetchers';

export function useCreateThread() {
  return useMutation({
    mutationFn: () => createThread(),
  });
}
