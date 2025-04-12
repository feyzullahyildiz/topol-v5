import { cn } from '@/util/cn';
import React from 'react';

export const EmptyArea = () => {
  return (
    <div
      className={cn(
        'group',
        'box-border',
        'flex min-h-[70px] min-w-[60px] items-center justify-center',
        'border-2 border-sky-500 bg-sky-300',
        'hover:border-sky-500 hover:bg-sky-300',
        'transition-all duration-300',
        'cursor-pointer'
      )}
    >
      <div
        className={cn(
          'flex size-6 items-center justify-center rounded-full text-2xl',
          'border-2 border-sky-600 text-sky-600',
          'group-hover:border-white group-hover:bg-sky-500 group-hover:text-white',
          'transition-all duration-300'
        )}
      >
        +
      </div>
    </div>
  );
};
