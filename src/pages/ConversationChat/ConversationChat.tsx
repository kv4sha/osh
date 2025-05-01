import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGetThreadMessages, useSendMessageToThread } from 'dataAccess/hooks';

import { AiMessage } from './components/AiMessage';
import { MessageInput } from './components/MessageInput';
import { UserMessage } from './components/UserMessage';

export function ConversationChat() {
  const { threadId } = useParams<{ threadId: string }>();

  const { data: messages, isLoading } = useGetThreadMessages(threadId);

  const { mutate: sendMessage, isPending } = useSendMessageToThread();

  // Scroll to bottom
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  }, [messages]);

  const handleMessageSubmit = (message: string) => {
    if (threadId) {
      sendMessage({
        threadId,
        assistantId: 'asst_ZeuRqWYvasX3PUDASZNX89H9',
        content: message,
      });
    }
  };

  return (
    <>
      {/* Chat */}
      <div className="container mx-auto space-y-6 px-4 py-24 lg:p-8 lg:pb-28 xl:max-w-7xl">
        {/* Time Heading */}
        {/* <div className="my-3 flex items-center">
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-slate-50 dark:bg-slate-800"
          />
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            Today 12:16
          </span>
          <span
            aria-hidden="true"
            className="h-0.5 grow rounded bg-slate-50 dark:bg-slate-800"
          />
        </div> */}
        {/* END Time Heading */}

        {/* {threadId &&
          messages[threadId]?.messages?.map((message) => {
            if (message.role === 'user') {
              return <UserMessage key={message.id} message={message.content} />;
            }

            return <AiMessage key={message.id} message={message.content} />;
          })} */}

        {!isLoading &&
          !!messages?.length &&
          messages.map((message) => {
            if (message.role === 'user') {
              return (
                <UserMessage key={message.id} message={message.content[0].text.value} />
              );
            }

            return <AiMessage key={message.id} message={message.content[0].text.value} />;
          })}
      </div>
      {/* END Chat */}

      {/* Message Input */}
      <MessageInput onSubmit={handleMessageSubmit} disabled={isPending} />
      {/* END Message Input */}
    </>
  );
}
