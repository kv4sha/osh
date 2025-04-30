export function Dashboard() {
  return (
    <div className="bg-[url('/media/app-02/bg-dashboard.jpg')] bg-cover bg-right">
      <div className="bg-white/80 backdrop-blur-sm dark:bg-indigo-950/90">
        <div className="container mx-auto min-h-dvh space-y-6 px-4 py-24 lg:px-8 xl:max-w-7xl">
          {/* Heading */}
          <svg
            className="relative left-5 inline-block w-24 rotate-[60deg] text-indigo-600 lg:rotate-0 lg:-scale-y-100 dark:text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            clipRule="evenodd"
            viewBox="0 0 684 826"
            fill="currentColor"
          >
            <path
              fillRule="nonzero"
              d="M2.594 544.527c19.546 44.891 43.111 88.335 64.815 132.224 21.103 42.677 40.488 85.593 68.671 124.135 9.854 13.476 27.041 24.011 43.912 24.909 11.503.613 26.85-7.18 22.25-21.385-14.7-45.395-36.953-86.035-59.046-128.091 62.974 21.715 135.678 23.264 199.244 13.476 94.394-14.534 184.406-59.969 247.744-132.206 132.983-151.67 119.972-391.757-12.669-539.096-8.663-9.622-22.751-19.77-36.528-18.361-13.846 1.416-7.545 15.562-2.257 22.369 105.581 135.947 92.202 351.789-23.68 477.589-55.476 60.222-133.509 98.085-213.926 110.816-37.778 5.981-77.669 6.309-114.879-.531-31.769-5.839-59.65-14.43-89.111-22.479-2.342-4.445-4.714-8.874-7.075-13.309 36.386-6.483 78.064-19.971 99.567-48.137 11.53-15.1-28.439-36.767-39.866-35.057-22.727 3.401-44.036 12.483-66.604 16.65-19.735 3.646-39.14 5.3-59.206 4.805-19.111-.47-29.001 14.121-21.356 31.679Z"
            />
          </svg>
          <div className="mb-8 border-slate-100 pb-6 pt-8 text-center lg:pt-0 lg:text-left dark:border-slate-700/75">
            <h1 className="mb-1 text-3xl font-bold">Welcome to ChatAI</h1>
            <h2 className="text-lg">Open an existing chat or start a new one</h2>
          </div>
          {/* END Heading */}
        </div>
      </div>
    </div>
  );
}
