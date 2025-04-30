type MessageInputProps = {
  onSubmit: (message: string) => void;
};

export function MessageInput({ onSubmit }: MessageInputProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 flex h-20 items-center border-t border-slate-200/75 bg-white/90 backdrop-blur-sm lg:left-80 lg:h-24 dark:border-slate-700/75 dark:bg-slate-900/90">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const input = e.currentTarget.elements[0] as HTMLInputElement;

          onSubmit(input.value);
        }}
        className="container mx-auto flex h-20 grow flex-col items-center justify-center gap-2 px-4 lg:px-8 xl:max-w-7xl"
      >
        <div className="relative flex w-full">
          <input
            type="text"
            className="block min-w-[100px] grow rounded-xl border-0 bg-slate-100/75 py-3.5 pl-3 pr-28 text-sm leading-6 focus:ring focus:ring-indigo-500/75 sm:py-5 sm:text-base lg:pl-5 dark:bg-slate-800/75 dark:placeholder:text-slate-400"
            placeholder="Type a new prompt.."
          />
          <div className="absolute inset-y-0 right-0 flex items-center justify-center gap-2 pr-2.5">
            <button
              aria-label="Add a new prompt"
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white p-2 text-sm font-semibold leading-5 text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm focus:ring focus:ring-slate-300/25 active:border-slate-200 active:shadow-none sm:px-3 sm:py-2.5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
            >
              <svg
                className="hi-mini hi-plus inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </button>
            <button
              aria-label="Send a new prompt"
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white p-2 text-sm font-semibold leading-5 text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm focus:ring focus:ring-slate-300/25 active:border-slate-200 active:shadow-none sm:px-3 sm:py-2.5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
            >
              <svg
                className="hi-mini hi-paper-airplane inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
