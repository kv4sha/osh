/* eslint-disable no-await-in-loop */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  addMessageToThread,
  runThread,
  getRunStatus,
  getThreadMessages,
} from '../fetchers';

type SendMessageArgs = {
  threadId: string;
  assistantId: string;
  content: string;
};

export function useSendMessageToThread() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ threadId, assistantId, content }: SendMessageArgs) => {
      // 1. Add message
      await addMessageToThread(threadId, content);

      // 2. Run assistant
      const run = await runThread(threadId, assistantId);

      // 3. Poll for run completion
      let runStatus = run.status;

      while (
        runStatus !== 'completed' &&
        runStatus !== 'failed' &&
        runStatus !== 'cancelled'
      ) {
        await new Promise((res) => {
          setTimeout(res, 2000); // wait 2s
        });

        const statusResponse = await getRunStatus(threadId, run.id);

        runStatus = statusResponse.status;
      }

      // 4. Fetch updated messages
      const updatedMessages = await getThreadMessages(threadId);

      return updatedMessages;
    },
    onSuccess: (messages, variables) => {
      // Update messages query cache
      queryClient.setQueryData(['threadMessages', variables.threadId], messages);
    },
  });
}
