import { openai } from 'features/reactQuery';

export async function createThread() {
  try {
    const response = await openai.post<{ id: string; created_at: number }>('/threads');

    return response.data;
  } catch (error) {
    console.error('Error creating thread', error);
    throw error;
  }
}
