import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import { Routes } from 'constants/routes';
import { Settings } from 'constants/settings';
import { AppWrapper, FullScreen } from 'features/layout';

import AccessDenied from './pages/AccessDenied';
import { Dashboard } from './pages/Dashboard';
import { Chat } from './pages/Chat';
// import Chat from './pages/Chat';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import { ConversationChat } from 'pages/ConversationChat';

const isLocal = Settings.ENVIRONMENT === 'local';

const router = createBrowserRouter([
  {
    element: (
      <AppWrapper>
        <Chat />
      </AppWrapper>
    ),
    errorElement: !isLocal ? (
      <ErrorBoundary sentryEnabled={false} errorPageUrl={Routes.ERROR} />
    ) : null,
    children: [
      {
        element: <Dashboard />,
        path: '/chat',
      },
      {
        path: '/chat/:threadId',
        element: <ConversationChat />,
      },
    ],
  },
  {
    path: Routes.ERROR,
    element: <Error />,
  },
  {
    path: Routes.ACCESS_DENIED,
    element: <AccessDenied />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
