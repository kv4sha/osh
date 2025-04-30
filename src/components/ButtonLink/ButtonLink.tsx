import clsx from 'clsx';
import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import LoadingSpinner from 'components/LoadingSpinner';

type Props = LinkProps & {
  disabled?: boolean;
  loading?: boolean;
};

function ButtonLink({ className, children, disabled, loading, ...rest }: Props) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
      }

      if (rest.onClick) {
        rest.onClick(e);
      }
    },
    [disabled, rest],
  );

  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-14 py-2 font-semibold leading-6 text-white ',
        className,
        {
          '!cursor-not-allowed opacity-75 dark:opacity-40': disabled,
          'hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90':
            !disabled,
        },
      )}
      {...rest}
      onClick={handleClick}
    >
      <span>{children}</span>
      {loading && (
        <LoadingSpinner
          size="size-4"
          color="text-blue-400 dark:text-blue-500 fill-blue-600 dark:fill-blue-700"
        />
      )}
    </Link>
  );
}

export default memo(ButtonLink);
