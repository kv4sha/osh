import { QueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

const MAX_RETRY_COUNT = 3;

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error): boolean => {
        const statusCode = (error as AxiosError)?.response?.status ?? 0;

        return statusCode >= 500 && failureCount < MAX_RETRY_COUNT;
      },
    },
  },
});
