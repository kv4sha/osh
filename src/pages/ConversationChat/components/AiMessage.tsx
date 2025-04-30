type AiMessageProps = {
  message: string;
};

export function AiMessage({ message }: AiMessageProps) {
  return (
    <div className="flex w-full items-start gap-3 lg:w-2/3">
      <div className="relative flex-none pt-0.5">
        <div className="relative flex size-8 items-center justify-center rounded-full bg-amber-500 text-white">
          <svg
            className="hi-mini hi-cpu-chip inline-block size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14 6H6v8h8V6z" />
            <path
              fillRule="evenodd"
              d="M9.25 3V1.75a.75.75 0 011.5 0V3h1.5V1.75a.75.75 0 011.5 0V3h.5A2.75 2.75 0 0117 5.75v.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v.5A2.75 2.75 0 0114.25 17h-.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-.5A2.75 2.75 0 013 14.25v-.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-.5A2.75 2.75 0 015.75 3h.5V1.75a.75.75 0 011.5 0V3h1.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <div className="prose prose-indigo relative w-full break-words rounded-xl bg-indigo-50 px-4 py-2 text-indigo-950 dark:prose-invert prose-a:no-underline hover:prose-a:opacity-75 prose-img:rounded-lg dark:bg-slate-700/50 dark:text-indigo-50">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
