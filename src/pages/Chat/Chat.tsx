import { Transition } from '@headlessui/react';
import { useState, useEffect, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { useCreateThread } from 'dataAccess/hooks';
import { useThreads } from 'hooks';

import { ConversationsList } from './ConversationsList';

import './Chat.styles.css';

export function Chat() {
  const location = useLocation();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const { addThread } = useThreads();
  const { mutateAsync, isPending } = useCreateThread();

  // Close sidebar on mobile when the route location changes
  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [location]);

  const handleCreateThread = useCallback(async () => {
    // Create a new thread

    try {
      const res = await mutateAsync();

      addThread({
        id: res.id,
        title: `${res.id}`,
        createdAt: res.created_at,
      });
    } catch (error) {
      console.error('Error creating thread:', error);
    }
  }, [addThread, mutateAsync]);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="relative mx-auto min-h-dvh min-w-[320px] bg-white lg:pl-80 dark:bg-slate-900 dark:text-slate-100"
      >
        {/* Mobile Navigation Backdrop */}
        <Transition
          show={mobileSidebarOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="Close sidebar"
            onClick={() => {
              setMobileSidebarOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Esc') {
                setMobileSidebarOpen(false);
              }
            }}
            className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-sm will-change-auto lg:hidden dark:bg-gray-900/80"
          />
        </Transition>
        {/* END Mobile Navigation Backdrop */}

        {/* Page Sidebar */}
        <nav
          id="page-sidebar"
          className={`fixed inset-y-0 left-0 z-50 flex h-full w-80 flex-col overflow-auto bg-slate-200/95 backdrop-blur-sm transition-transform duration-500 ease-out lg:translate-x-0 dark:bg-slate-800/90 ${
            mobileSidebarOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'
          }`}
          aria-label="Main Sidebar Navigation"
        >
          {/* Sidebar Header */}
          <div className="flex h-20 w-full flex-none items-center justify-between pl-8 pr-2">
            {/* Brand */}
            <Link
              to="/app/02-chatai/"
              className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-wide transition hover:opacity-75 active:opacity-100 lg:justify-center"
            >
              <svg
                className="hi-mini hi-chat-bubble-left-right inline-block size-5 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
              </svg>
              <span>ChatAI</span>
            </Link>
            {/* END Brand */}

            {/* Close Sidebar on Mobile */}
            <div className="lg:hidden">
              <button
                aria-label="Close sidebar"
                onClick={() => setMobileSidebarOpen(false)}
                type="button"
                className="flex size-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
              >
                <svg
                  className="hi-solid hi-x -mx-1 inline-block size-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* END Close Sidebar on Mobile */}
          </div>
          {/* END Sidebar Header */}

          {/* Main Navigation */}
          <div id="simplebar" className="sidebar-scroll-section-chatai">
            <nav className="flex h-full flex-col gap-8 py-1 pl-4">
              {/* AI Bots */}
              <div className="flex h-full flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2 pl-4 pr-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400/90">
                    Conversations
                  </h3>
                  <button
                    disabled={isPending}
                    aria-label="Add a new conversation"
                    type="button"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg border px-1.5 py-1 text-sm font-semibold leading-5 ${
                      isPending
                        ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-500'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm focus:ring focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700'
                    }`}
                    onClick={handleCreateThread}
                  >
                    <svg
                      className="hi-mini hi-plus -mx-0.5 inline-block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  </button>
                </div>
                <div className="grow overflow-y-scroll">
                  <ConversationsList />
                </div>
              </div>
              {/* END AI Bots */}
            </nav>
          </div>
          {/* END Main Navigation */}

          {/* Sub Navigation */}
          <div className="flex h-24 flex-none items-center gap-2 px-4">
            <Link
              to="/chat"
              className={`flex h-16 grow items-center gap-3 rounded border-l-4 px-2 ${
                location.pathname === '/app/02-chatai/settings'
                  ? 'border-indigo-500 bg-white shadow-sm dark:bg-slate-900'
                  : 'border-transparent hover:border-indigo-300 hover:bg-white/50 dark:hover:border-indigo-700 dark:hover:bg-slate-900/50'
              }`}
            >
              <div className="relative flex-none">
                <img
                  src="/media/app-02/people4.jpg"
                  alt="User Avatar"
                  className="size-11 rounded-full border-2 border-white/50"
                />
              </div>
              <div className="grow">
                <p className="mb-0.5 line-clamp-1 text-sm font-bold">My Account</p>
                <p className="line-clamp-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  @john.doe
                </p>
              </div>
            </Link>
            <Link
              to="/app/02-chatai/auth/signin"
              className="flex h-16 flex-none items-center gap-3 rounded px-4 py-3 hover:bg-white/50 dark:hover:bg-slate-900/50"
            >
              <svg
                className="hi-mini hi-arrow-right-on-rectangle -mx-0.5 inline-block size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          {/* END Sub Navigation */}
        </nav>
        {/* Page Sidebar */}

        {/* Page Header */}
        <header
          id="page-header"
          className="fixed inset-x-0 top-0 z-30 flex h-20 flex-none items-center border-b border-slate-200/75 bg-white/80 backdrop-blur-sm lg:left-80 lg:hidden dark:border-slate-700/75 dark:bg-slate-800/80"
        >
          <div className="container mx-auto grid grid-cols-3 gap-2 px-4 lg:px-8 xl:max-w-7xl">
            {/* Left Section */}
            <div className="flex items-center gap-2">
              {/* Toggle Sidebar on Mobile */}
              <button
                aria-label="Open sidebar"
                onClick={() => setMobileSidebarOpen(true)}
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm focus:ring focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
              >
                <svg
                  className="hi-solid hi-menu-alt-1 -mx-0.5 inline-block size-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* END Toggle Sidebar on Mobile */}
            </div>
            {/* END Left Section */}

            {/* Middle Section */}
            <div className="flex items-center justify-center gap-2 text-center">
              {/* Brand */}
              <Link
                to="/app/02-chatai/"
                className="group inline-flex items-center gap-1.5 text-lg font-bold tracking-wide transition hover:opacity-75 active:opacity-100"
              >
                <svg
                  className="hi-mini hi-chat-bubble-left-right inline-block size-5 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                  <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                </svg>
                <span>Chat</span>
              </Link>
              {/* END Brand */}
            </div>
            {/* END Middle Section */}

            {/* Right Section */}
            <div className="flex items-center justify-end gap-2">
              {/* Sign Out */}
              <Link
                to="/app/02-chatai/auth/signin"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-slate-800 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm focus:ring focus:ring-slate-300/25 active:border-slate-200 active:shadow-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-slate-200 dark:focus:ring-slate-600/40 dark:active:border-slate-700"
              >
                <svg
                  className="hi-mini hi-arrow-right-on-rectangle -mx-0.5 inline-block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              {/* END Sign Out */}
            </div>
            {/* END Right Section */}
          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content">
          <Outlet />
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}
    </>
  );
}
