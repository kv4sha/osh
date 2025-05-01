import { openai } from 'features/reactQuery';

export async function runThread(threadId: string, assistantId: string) {
  const response = await openai.post<{ status: string; id: string }>(
    `/threads/${threadId}/runs`,
    {
      assistant_id: assistantId,
    },
  );

  return response.data;
}
