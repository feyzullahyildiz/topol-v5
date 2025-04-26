import React, { forwardRef } from 'react';

import { cn } from '@/util/cn';

export const EmptyArea = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative',
          'group/empty-area',
          'box-border',
          'flex min-h-[70px] min-w-[60px] items-center justify-center',
          'border-2 border-sky-500 bg-sky-300',
          'hover:border-sky-500 hover:bg-sky-300',
          'transition-all duration-300',
          'cursor-pointer',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'absolute m-auto',
            'flex size-6 items-center justify-center rounded-full text-2xl',
            'border-2 border-sky-600 text-sky-600',
            'group-hover/empty-area:border-white group-hover/empty-area:bg-sky-500 group-hover/empty-area:text-white',
            'transition-all duration-300'
          )}
        >
          +
        </div>
        {children}
      </div>
    );
  }
);
EmptyArea.displayName = 'EmptyArea';
