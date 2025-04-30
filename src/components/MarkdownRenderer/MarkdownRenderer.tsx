import { memo, useMemo } from 'react';
import Markdown from 'react-markdown';

import { LinkRenderer, CodeRenderer } from './components';

type Props = {
  content: string;
};

function MarkdownRenderer({ content }: Props) {
  const components = useMemo(
    () => ({
      a: LinkRenderer,
      pre: CodeRenderer,
    }),
    [],
  );

  return <Markdown components={components}>{content}</Markdown>;
}

export default memo(MarkdownRenderer);
