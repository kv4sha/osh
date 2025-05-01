import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { reactQueryClient } from 'features/reactQuery';
import { ThemeProvider } from 'features/theme';
import { ThreadProvider } from 'hooks';

import router from './router';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <ThemeProvider>
        <ThreadProvider>
          <RouterProvider router={router} />
        </ThreadProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
