import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { memo } from 'react';
import type { ReactNode } from 'react';

import Button from 'components/Button';

type Props = {
  className?: string;
  title?: ReactNode;
  message?: ReactNode;
  btnText?: ReactNode;
  onClick: () => void;
};

function ApiErrorAlert({
  className,
  title = 'Something Went Wrong',
  message = 'An error occurred while processing your request. Click below to reload and try again.',
  btnText = 'Reload',
  onClick,
}: Props) {
  return (
    <div
      className={clsx(
        'rounded border border-gray-200 bg-white p-4 md:p-5 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300',
        className,
      )}
    >
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="mb-5 text-gray-600 dark:text-gray-400">{message}</p>
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={onClick}>
          <ArrowPathIcon className="inline-block size-4 opacity-50" />
          <span>{btnText}</span>
        </Button>
      </div>
    </div>
  );
}

export default memo(ApiErrorAlert);
