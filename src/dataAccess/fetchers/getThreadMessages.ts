import { openai } from 'features/reactQuery';

type ThreadMessage = {
  id: string;
  role: string;
  content: {
    type: string;
    text: {
      value: string;
    };
  }[];
};

export async function getThreadMessages(threadId?: string) {
  try {
    const response = await openai.get<{ data: ThreadMessage[] }>(
      `/threads/${threadId}/messages`,
      {
        params: {
          limit: 100, // Adjust the limit as needed
        },
      },
    );
    const messages = response.data.data;

    return messages.reverse(); // Reverse to oldest first (optional)
  } catch (error) {
    console.error('Error fetching thread messages', error);
    throw error; // Let React Query handle errors
  }
}
