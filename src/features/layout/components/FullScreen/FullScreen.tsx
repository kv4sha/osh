import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

export default function FullScreen() {
  return (
    <div
      className={clsx(
        'mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100',
      )}
    >
      <Outlet />
    </div>
  );
}
