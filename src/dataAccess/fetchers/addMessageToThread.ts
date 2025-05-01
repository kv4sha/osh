import { openai } from 'features/reactQuery';

export async function addMessageToThread(threadId: string, content: string) {
  const response = await openai.post<object>(`/threads/${threadId}/messages`, {
    role: 'user',
    content,
  });

  return response.data;
}
