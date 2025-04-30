import type { NotificationType, NotificationPosition } from '../types';

export const getNotificationTypeClasses = (type: NotificationType) => {
  switch (type) {
    case 'success':
      return 'bg-green-100 text-green-700 dark:bg-green-600/25 dark:text-green-100';
    case 'error':
      return 'bg-rose-100 text-rose-700 dark:bg-rose-600/25 dark:text-rose-100';
    case 'info':
      return 'bg-sky-100 text-sky-700 dark:bg-sky-600/25 dark:text-sky-100';
    case 'warning':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-600/25 dark:text-orange-100';
    default:
      return '';
  }
};

export const getNotificationContainerClasses = (position: NotificationPosition) => {
  let classes = 'fixed z-60 flex w-72 gap-2 sm:w-96 ';

  classes +=
    position === 'top-start' || position === 'top-end'
      ? 'flex-col-reverse '
      : 'flex-col ';
  classes += position === 'top-end' || position === 'top-start' ? 'top-4 ' : 'bottom-4 ';
  classes += position === 'top-end' || position === 'bottom-end' ? 'right-4 ' : 'left-4';

  return classes;
};
