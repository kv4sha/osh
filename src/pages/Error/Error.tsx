import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error() {
  return (
    <div className="relative flex min-h-dvh items-center overflow-hidden bg-white dark:bg-gray-800">
      <div
        className="absolute inset-y-0 left-0 -ml-44 w-48 bg-rose-50 md:-ml-28 md:skew-x-6 dark:bg-rose-500/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 -mr-44 w-48 bg-rose-50 md:-mr-28 md:skew-x-6 dark:bg-rose-500/10"
        aria-hidden="true"
      />

      <div className="container relative mx-auto space-y-16 px-8 py-16 text-center lg:py-32 xl:max-w-7xl">
        <div>
          <div className="mb-5 text-rose-300 dark:text-rose-300/50">
            <ExclamationTriangleIcon className="inline-block size-20" />
          </div>
          <div className="text-6xl font-extrabold text-rose-600 md:text-7xl dark:text-rose-500">
            ERROR
          </div>
          <div
            className="mx-auto my-6 h-1.5 w-12 rounded-lg bg-gray-200 md:my-10 dark:bg-gray-700"
            aria-hidden="true"
          />
          <h1 className="mb-3 text-2xl font-extrabold md:text-3xl">
            Oops! Something went wrong...
          </h1>
          <h2 className="mx-auto mb-5 font-medium text-gray-500 md:leading-relaxed lg:w-3/5 dark:text-gray-400">
            Apologies for the inconvenience, it seems like there&apos;s been an error. Our
            team has been notified and is working diligently to fix the issue.
          </h2>
        </div>
      </div>
    </div>
  );
}
