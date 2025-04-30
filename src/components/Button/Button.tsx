import clsx from 'clsx';
import { memo, forwardRef } from 'react';
import type { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';

import LoadingSpinner from '../LoadingSpinner';

const SIZE_CLASSES = {
  xs: 'px-2 py-1 text-sm leading-5',
  sm: 'px-3 py-2 text-sm leading-5',
  md: 'px-4 py-2 font-semibold leading-6',
  lg: 'px-6 py-3 font-semibold leading-6',
  xl: 'px-8 py-4 font-semibold leading-6',
};

const SPINNER_SIZES = {
  xs: 'size-2',
  sm: 'size-3',
  md: 'size-4',
  lg: 'size-5',
  xl: 'size-6',
};

const SPINNER_COLORS = {
  primary: 'text-blue-400 dark:text-blue-500 fill-blue-600 dark:fill-blue-700',
  secondary: 'text-blue-800 dark:text-blue-200 fill-blue-900 dark:fill-blue-300',
  simple: 'text-gray-800 dark:text-gray-300 fill-gray-900 dark:fill-gray-400',
};

const DISABLED_CLASSES = 'cursor-not-allowed opacity-75 dark:opacity-40';

const VARIAN_CLASSES = {
  primary: 'border-blue-700 bg-blue-700 text-white',
  secondary:
    'border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-200 dark:bg-blue-200',
  simple:
    'border-gray-200 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

const INTERACTION_CLASSES = {
  primary:
    'hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90',
  secondary:
    'hover:border-blue-300 hover:text-blue-900 hover:shadow-sm focus:ring focus:ring-blue-300/25 active:border-blue-200 active:shadow-none dark:hover:border-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-500/50 dark:active:border-blue-200 dark:active:bg-blue-200',
  simple:
    'hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700',
};

export type ButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'simple';
  disabled?: boolean;
  children: ReactNode;
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef(
  (
    {
      size = 'md',
      variant = 'primary',
      disabled = false,
      children,
      className,
      loading,
      ...restProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      type="button"
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg border',
        SIZE_CLASSES[size],
        VARIAN_CLASSES[variant],
        {
          [DISABLED_CLASSES]: disabled,
        },
        {
          [INTERACTION_CLASSES[variant]]: !disabled,
        },
        className,
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
      {loading && (
        <LoadingSpinner size={SPINNER_SIZES[size]} color={SPINNER_COLORS[variant]} />
      )}
    </button>
  ),
);

Button.displayName = 'Button';

export default memo(Button);
