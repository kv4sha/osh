import type { ReactNode } from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning' | 'neutral';

export type NotificationPosition =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end';

export type Notification = {
  id: number;
  type: NotificationType;
  title?: ReactNode;
  description?: ReactNode;
  visible: boolean;
  closeButton?: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
};
