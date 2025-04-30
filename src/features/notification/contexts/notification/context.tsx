import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { createContext, useState, useContext, useRef, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';

import { NotificationIcon } from './components';
import type { NotificationPosition, Notification } from './types';
import { getNotificationTypeClasses, getNotificationContainerClasses } from './utils';

type NotificationContextProps = {
  showNotification: (data: Omit<Notification, 'id' | 'visible'>) => number;
  dismissNotification: (id: number) => void;
  setPosition: (position: NotificationPosition) => void;
};

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined,
);

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }

  return context;
};

type NotificationProviderProps = {
  children: ReactNode;
};

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [position, setPosition] = useState<NotificationPosition>('top-end');

  const nextIdRef = useRef(0);

  const dismissNotification = useCallback((id: number, remove = false) => {
    setNotifications((prevNotifications) =>
      remove
        ? prevNotifications.filter((n) => n.id !== id)
        : prevNotifications.map((notification) =>
            notification.id === id ? { ...notification, visible: false } : notification,
          ),
    );
  }, []);

  const showNotification = useCallback(
    (data: Omit<Notification, 'id' | 'visible'>) => {
      const id = nextIdRef.current;

      nextIdRef.current += 1;

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        {
          id,
          visible: true,
          ...data,
          closeButton: data.closeButton ?? true,
        },
      ]);

      if (data.autoClose) {
        setTimeout(() => dismissNotification(id), data.autoCloseDelay || 5000);
      }

      return id;
    },
    [dismissNotification],
  );

  const context = useMemo(
    () => ({
      showNotification,
      dismissNotification,
      setPosition,
    }),
    [showNotification, dismissNotification, setPosition],
  );

  return (
    <NotificationContext.Provider value={context}>
      {children}
      <div
        role="region"
        aria-label="Notifications"
        className={getNotificationContainerClasses(position)}
      >
        {notifications.map((notification) => (
          <Transition
            as="div"
            appear
            key={notification.id}
            show={notification.visible}
            enter="transition linear duration-200"
            enterFrom={
              position === 'top-start' || position === 'top-end'
                ? 'opacity-0 -translate-y-20'
                : 'opacity-0 -translate-y-20'
            }
            enterTo="opacity-100 translate-y-0"
            leave="transition linear duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo={
              position === 'top-start' || position === 'top-end'
                ? 'opacity-0 translate-y-20'
                : 'opacity-0 -translate-y-20'
            }
            afterLeave={() => dismissNotification(notification.id, true)}
            className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 text-sm shadow-md shadow-gray-200/50 dark:border-gray-700/75 dark:bg-black-300 dark:shadow-gray-950/50"
            role="alert"
            aria-live={notification.type === 'error' ? 'assertive' : 'polite'}
          >
            {notification.type !== 'neutral' && (
              <div
                className={clsx(
                  'flex size-11 flex-none items-center justify-center rounded-xl',
                  getNotificationTypeClasses(notification.type),
                )}
              >
                <NotificationIcon type={notification.type} />
              </div>
            )}

            <div className="flex grow flex-col gap-0.5">
              {notification.title && (
                <h5 className="font-semibold dark:text-white">{notification.title}</h5>
              )}
              {notification.description && (
                <p className="dark:text-gray-400">{notification.description}</p>
              )}
            </div>
            {notification.closeButton && (
              <button
                onClick={() => dismissNotification(notification.id)}
                type="button"
                className="flex-none text-gray-500 hover:text-gray-700 active:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 dark:active:text-gray-400"
              >
                <XMarkIcon className="inline-block size-5" />
                <span className="sr-only">Close Notification</span>
              </button>
            )}
          </Transition>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}
