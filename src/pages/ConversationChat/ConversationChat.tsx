import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AiMessage } from './components/AiMessage';
import { MessageInput } from './components/MessageInput';
import { UserMessage } from './components/UserMessage';

const messages = {
  '1': {
    messages: [
      {
        id: 1,
        role: 'user',
        content:
          'What is the difference between ChatGPT and Google Bard? Which one is better?',
      },
      {
        id: 2,
        role: 'assistant',
        content:
          'ChatGPT and Google Bard are both AI language models, but they have different focuses and capabilities. ChatGPT is designed for conversational interactions, while Google Bard is focused on generating creative writing and poetry. The choice between them depends on your specific needs.',
      },
      {
        id: 3,
        role: 'user',
        content: 'Can you provide examples of how each model can be used effectively?',
      },
      {
        id: 4,
        role: 'assistant',
        content:
          'ChatGPT is great for customer support and interactive chatbots, while Google Bard excels in generating stories and poems. For example, you can use ChatGPT to answer FAQs, while Bard can help you write a poem for a special occasion.',
      },
      {
        id: 5,
        role: 'user',
        content: 'Which model is more accurate in providing factual information?',
      },
      {
        id: 6,
        role: 'assistant',
        content:
          'ChatGPT is generally more accurate in providing factual information, as it is trained on a wide range of data sources. Google Bard may generate creative content but may not always be factually accurate.',
      },
      {
        id: 7,
        role: 'user',
        content: 'What are the limitations of each model?',
      },
      {
        id: 8,
        role: 'assistant',
        content:
          'ChatGPT may struggle with context retention in long conversations, while Google Bard may not always produce coherent or relevant content. Both models can also be sensitive to input phrasing.',
      },
    ],
  },
  '2': {
    messages: [
      {
        id: 3,
        role: 'user',
        content: 'Can you help me with some coding problems?',
      },
      {
        id: 4,
        role: 'assistant',
        content:
          'Sure! I can help you with coding problems. Please describe the issue you are facing.',
      },
    ],
  },
  '3': {
    messages: [
      {
        id: 5,
        role: 'user',
        content: 'What are the best practices for using AI in healthcare?',
      },
      {
        id: 6,
        role: 'assistant',
        content:
          'Some best practices for using AI in healthcare include ensuring data privacy, validating algorithms with clinical data, and involving healthcare professionals in the development process.',
      },
    ],
  },
  '4': {
    messages: [
      {
        id: 7,
        role: 'user',
        content: 'How can AI improve patient outcomes in hospitals?',
      },
      {
        id: 8,
        role: 'assistant',
        content:
          'AI can improve patient outcomes in hospitals by providing predictive analytics, personalized treatment plans, and enhancing diagnostic accuracy.',
      },
    ],
  },
  '5': {
    messages: [
      {
        id: 9,
        role: 'user',
        content: 'What are the ethical considerations of using AI in healthcare?',
      },
      {
        id: 10,
        role: 'assistant',
        content:
          'Ethical considerations of using AI in healthcare include data privacy, algorithmic bias, and the need for transparency in AI decision-making.',
      },
    ],
  },
  '6': {
    messages: [
      {
        id: 11,
        role: 'user',
        content: 'What are the limitations of AI in healthcare?',
      },
      {
        id: 12,
        role: 'assistant',
        content:
          'Limitations of AI in healthcare include the need for large amounts of high-quality data, potential biases in algorithms, and the challenge of integrating AI into existing healthcare systems.',
      },
    ],
  },
};

export function ConversationChat() {
  const { threadId } = useParams<{ threadId: keyof typeof messages }>();

  // Scroll to bottom
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  }, []);

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

        {threadId &&
          messages[threadId]?.messages?.map((message) => {
            if (message.role === 'user') {
              return <UserMessage key={message.id} message={message.content} />;
            }

            return <AiMessage key={message.id} message={message.content} />;
          })}
      </div>
      {/* END Chat */}

      {/* Message Input */}
      <MessageInput onSubmit={(message) => console.log(message)} />
      {/* END Message Input */}
    </>
  );
}
