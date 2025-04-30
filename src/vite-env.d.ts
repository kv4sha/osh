/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string;
  readonly VITE_COMMIT_ID: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_BASE_API_URL: string;
  readonly VITE_BOOK_DEMO_URL: string;
  readonly VITE_CHAT_SITE_URL: string;
  readonly VITE_ASSISTANT_RESPONSE_TIMEOUT_SEC: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
