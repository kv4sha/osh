import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import { useRouteError, Navigate, useMatch } from 'react-router-dom';

const logError = (error: unknown, sentryEnabled: boolean) => {
  // eslint-disable-next-line no-console
  console.log('ErrorBoundary: ', error);

  if (sentryEnabled) {
    Sentry.captureException(error, {
      tags: {
        ErrorBoundary: true,
      },
    });
  }
};

type Props = {
  sentryEnabled: boolean;
  errorPageUrl: string;
};

function ErrorBoundary({ sentryEnabled, errorPageUrl }: Props) {
  const routeError = useRouteError();
  const isErrorPage = !!useMatch(errorPageUrl);

  useEffect(() => {
    logError(routeError, sentryEnabled);
  }, [routeError, sentryEnabled]);

  if (!isErrorPage) {
    return <Navigate to={errorPageUrl} />;
  }

  return <h1>Something went wrong.</h1>;
}

export default ErrorBoundary;
