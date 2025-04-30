import { useLocation } from 'react-router-dom';

import { ThreadLink } from './components/ThreadLink';

export function ConversationsList() {
  const location = useLocation();

  const list = [
    {
      id: 1,
      title: 'Developer Assistance',
      subTitle: 'Using GPT-4',
      timeLabel: 'Yesterday',
      to: '/chat/1',
    },
    {
      id: 2,
      title: 'ChatGPT vs. Bard',
      subTitle: 'Using GPT-4',
      timeLabel: 'Today',
      to: '/chat/2',
    },
    {
      id: 3,
      title: 'ChatGPT vs. Bing Chat',
      subTitle: 'Using GPT-4',
      timeLabel: 'Today',
      to: '/chat/3',
    },
    {
      id: 4,
      title: 'ChatGPT vs. Claude AI',
      subTitle: 'Using GPT-4',
      timeLabel: 'Today',
      to: '/chat/4',
    },
    {
      id: 5,
      title: 'AI in Healthcare',
      subTitle: 'Using GPT-4',
      timeLabel: 'Today',
      to: '/chat/5',
    },
    {
      id: 6,
      title: 'AI in Education',
      subTitle: 'Using GPT-4',
      timeLabel: 'Today',
      to: '/chat/6',
    },
  ];

  return (
    <>
      {list.map((item) => (
        <ThreadLink
          key={item.id}
          isSelected={location.pathname === item.to}
          timeLabel={item.timeLabel}
          title={item.title}
          subTitle={item.subTitle}
          to={item.to}
        />
      ))}
    </>
  );
}
