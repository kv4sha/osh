import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      sentryVitePlugin({
        disable: env.VITE_ENVIRONMENT === 'local',
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: 'dist/**/*.js.map',
        },
        release: {
          name: `${env.VITE_ENVIRONMENT}: ${env.VITE_COMMIT_ID}`,
        },
      }),
    ],
    server: {
      port: 3001,
      open: true,
    },
    build: {
      sourcemap: true,
      emptyOutDir: false,
    },
  };
});
