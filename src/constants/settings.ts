import { Environment } from './environment';
import type { EnvironmentType } from './environment';

const isValidEnvironment = (env: string): env is EnvironmentType =>
  Object.values(Environment).includes(env as EnvironmentType);

const parseEnvironment = (value: string | undefined): EnvironmentType => {
  if (!value) {
    return Environment.LOCAL;
  }

  const env = value.toLowerCase();

  if (!isValidEnvironment(env)) {
    throw new Error(`Invalid ENVIRONMENT: ${value}`);
  }

  return env;
};

export const Settings = {
  ENVIRONMENT: parseEnvironment(import.meta.env.VITE_ENVIRONMENT),
  COMMIT_ID: import.meta.env.VITE_COMMIT_ID,
  SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
  BOOK_DEMO_URL: import.meta.env.VITE_BOOK_DEMO_URL,
  ASSISTANT_RESPONSE_TIMEOUT_SEC: Number(
    import.meta.env.VITE_ASSISTANT_RESPONSE_TIMEOUT_SEC,
  ),
};
