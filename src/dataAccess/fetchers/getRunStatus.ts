import { openai } from 'features/reactQuery';

export async function getRunStatus(threadId: string, runId: string) {
  const response = await openai.get<{ status: string }>(
    `/threads/${threadId}/runs/${runId}`,
  );

  return response.data;
}
