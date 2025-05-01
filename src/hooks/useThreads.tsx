import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from 'react-use';

export type Thread = {
  id: string;
  title: string;
  createdAt: number;
};

type ThreadContextType = {
  threads: Thread[];
  addThread: (thread: Thread) => void;
  removeThread: (threadId: string) => void;
};

const ThreadContext = createContext<ThreadContextType | undefined>(undefined);

export function ThreadProvider({ children }: { children: ReactNode }) {
  const [threads = [], setThreads] = useLocalStorage<Thread[]>('threads', []);

  const addThread = React.useCallback(
    (thread: Thread) => {
      setThreads([...threads, thread]);
    },
    [setThreads, threads],
  );

  const removeThread = React.useCallback(
    (threadId: string) => {
      setThreads(threads.filter((t) => t.id !== threadId));
    },
    [setThreads, threads],
  );

  const contextValue = React.useMemo(
    () => ({ threads, addThread, removeThread }),
    [threads, addThread, removeThread],
  );

  return <ThreadContext.Provider value={contextValue}>{children}</ThreadContext.Provider>;
}

export function useThreads() {
  const context = useContext(ThreadContext);

  if (!context) {
    throw new Error('useThreads must be used within a ThreadProvider');
  }

  return context;
}
