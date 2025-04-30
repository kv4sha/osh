import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { memo } from 'react';
import { NavLink, generatePath } from 'react-router-dom';

import { Routes } from 'constants/routes';

function Navigation() {
  // const { agentId } = useChatConfig();

  // const menuItems = [
  //   {
  //     icon: HomeIcon,
  //     label: 'Home',
  //     to: generatePath(Routes.HOME, { agentId }),
  //   },
  //   {
  //     icon: ChatBubbleLeftEllipsisIcon,
  //     label: 'Chat',
  //     to: generatePath(Routes.CHAT, { agentId }),
  //   },
  //   {
  //     icon: StarIcon,
  //     label: 'Rate',
  //     to: generatePath(Routes.RATING, { agentId }),
  //   },
  // ];

  return (
    <div className="sticky bottom-0 h-[73px] border-t border-slate-200/75 bg-white/90 backdrop-blur-sm lg:h-[85px] dark:border-slate-700/75  dark:bg-slate-900/90">
      <div className="mx-auto grid h-full max-w-lg grid-cols-3 font-medium">
        {/* {menuItems.map(({ icon: Icon, label, to }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              clsx(
                'group inline-flex flex-col items-center justify-center px-5 py-2 transition-all duration-200',
                isActive
                  ? 'bg-blue-100 font-semibold text-blue-700 dark:bg-white/10 dark:text-white'
                  : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={clsx('mb-2 size-6 transition-colors', {
                    'text-blue-700 dark:text-white': isActive,
                    'text-gray-500 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-white':
                      !isActive,
                  })}
                />
                <span
                  className={clsx('text-base transition-colors', {
                    'text-blue-700 dark:text-white font-semibold': isActive,
                    'text-gray-500 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-white':
                      !isActive,
                  })}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))} */}
      </div>
    </div>
  );
}

export default memo(Navigation);
