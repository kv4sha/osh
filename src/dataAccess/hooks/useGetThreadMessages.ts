import { useQuery } from '@tanstack/react-query';

import { getThreadMessages } from 'dataAccess/fetchers';

export const useGetThreadMessages = (threadId?: string) =>
  useQuery({
    queryKey: ['threadMessages', threadId],
    queryFn: () => getThreadMessages(threadId),
    enabled: !!threadId, // only run the query if threadId is defined
  });
