import { Link } from 'react-router-dom';

type ThreadLinkProps = {
  isSelected: boolean;
  to: string;
  title: string;
  subTitle?: string;
  timeLabel?: string;
};

export function ThreadLink({
  isSelected,
  to,
  title,
  subTitle,
  timeLabel,
}: ThreadLinkProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-l border-l-4 px-2 py-3 ${
        isSelected
          ? 'border-indigo-500 bg-white shadow-sm dark:bg-slate-900'
          : 'border-transparent hover:border-indigo-300 hover:bg-white/50 dark:hover:border-indigo-700 dark:hover:bg-slate-900/50'
      }`}
    >
      <div className="relative flex size-11 flex-none items-center justify-center rounded-full border-2 border-white/50 bg-amber-500 text-white">
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
      <div className="grow overflow-hidden">
        <p className="mb-0.5 truncate text-sm font-bold">{title}</p>
        <p className="text-xs font-medium text-slate-400">{timeLabel}</p>
      </div>
    </Link>
  );
}
