import {
  CheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/16/solid';
import { memo } from 'react';

import type { NotificationType } from '../../types';

type Props = {
  type: NotificationType;
};
function NotificationIcon({ type }: Props) {
  switch (type) {
    case 'success':
      return <CheckIcon className="inline-block size-4" />;
    case 'error':
      return <XMarkIcon className="inline-block size-4" />;
    case 'info':
      return <InformationCircleIcon className="inline-block size-4" />;
    case 'warning':
      return <ShieldExclamationIcon className="inline-block size-4" />;

    default:
      return null;
  }
}

export default memo(NotificationIcon);
