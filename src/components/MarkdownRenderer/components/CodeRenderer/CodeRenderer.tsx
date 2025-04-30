import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useCopyToClipboard } from 'react-use';

type Props = {
  children?: ReactNode;
};

function CodeBlock({ children }: Props) {
  const codeRef = useRef<HTMLPreElement>(null);

  const [, copyToClipboard] = useCopyToClipboard();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (codeRef.current) {
      copyToClipboard(codeRef.current.innerText);

      setCopied(true);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="relative text-sm">
      <button
        type="button"
        className="absolute right-2 top-2 rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-black-200 dark:text-gray-200"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <pre
        ref={codeRef}
        className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-800 contain-inline-size dark:border-gray-700 dark:bg-black-300 dark:text-gray-200"
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
