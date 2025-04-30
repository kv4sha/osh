import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { NotificationProvider } from 'features/notification';
import { useTheme } from 'features/theme';

type Props = {
  children: ReactNode;
};

function AppWrapper({ children }: Props) {
  const { isDarkModeOn } = useTheme();

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkModeOn]);

  return <NotificationProvider>{children}</NotificationProvider>;
}

export default AppWrapper;
