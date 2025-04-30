import clsx from 'clsx';
import { memo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const COLOR_CLASSES = {
  gray: 'fill-gray-200 dark:fill-gray-600',
  blue: 'fill-blue-500 dark:fill-blue-500',
  red: 'fill-red-300 dark:fill-red-600',
  green: 'fill-green-300 dark:fill-green-600',
  black: 'fill-black',
  white: 'fill-white',
};

const SIZE_CLASSES = {
  xs: { height: '30', width: '30' },
  sm: { height: '45', width: '45' },
  md: { height: '60', width: '60' },
  lg: { height: '80', width: '80' },
  xl: { height: '100', width: '100' },
};

type Props = {
  className?: string;
  color?: 'gray' | 'blue' | 'red' | 'green' | 'black' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

function Loader({ className, color = 'gray', size = 'md' }: Props) {
  return (
    <div className={clsx('flex w-full items-center justify-center', className)}>
      <ThreeDots
        height={SIZE_CLASSES[size].height}
        width={SIZE_CLASSES[size].width}
        color=""
        ariaLabel="loader"
        wrapperClass={COLOR_CLASSES[color]}
      />
    </div>
  );
}

export default memo(Loader);
