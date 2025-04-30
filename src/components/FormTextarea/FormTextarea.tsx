import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import type { TextareaHTMLAttributes, ForwardedRef } from 'react';

type Props = {
  className?: string;
  classes?: {
    root?: string;
    label?: string;
    textarea?: string;
  };
  disabled?: boolean;
  error?: string;
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormTextarea = forwardRef(
  (
    { className, classes, error, id, label, disabled = false, rows = 4, ...rest }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => (
    <div className={clsx('w-full', className, classes?.root)}>
      {label && (
        <label htmlFor={id} className={clsx('text-sm font-semibold', classes?.label)}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={clsx(
          'block w-full rounded-lg border px-5 py-3 leading-6 placeholder:text-gray-500 dark:bg-gray-800 dark:placeholder:text-gray-400',
          {
            'border-gray-200 focus:border-blue-500 focus:ring-blue-500/50 dark:border-gray-600':
              !error,
            'border-red-400 text-red-700 focus:border-red-500 focus:ring focus:ring-red-500/50 dark:text-red-400':
              error,
            'cursor-not-allowed opacity-75 dark:opacity-50': disabled,
          },
          classes?.textarea,
        )}
        {...rest}
      />
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  ),
);

FormTextarea.displayName = 'FormTextarea';

export default memo(FormTextarea);
