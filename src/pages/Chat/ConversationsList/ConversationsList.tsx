import { useLocation } from 'react-router-dom';

import { useThreads } from 'hooks';

import { ThreadLink } from './components/ThreadLink';

export function ConversationsList() {
  const location = useLocation();

  const { threads } = useThreads();

  return (
    <>
      {threads?.map((item) => {
        const to = `/chat/${item.id}`;
        const isSelected = location.pathname === to;
        const timeLabel = new Date(item.createdAt * 1000).toLocaleString();
        const { title } = item;

        return (
          <ThreadLink
            key={item.id}
            isSelected={isSelected}
            timeLabel={timeLabel}
            title={title}
            to={to}
          />
        );
      })}
    </>
  );
}
