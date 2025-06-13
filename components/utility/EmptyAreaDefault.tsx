import { Column } from '@react-email/components';
import React, { forwardRef, useCallback } from 'react';

import { cn } from '@/util/cn';

import { openItemSelectModal } from '../modal/ItemSelectModal';

interface Props extends React.HTMLAttributes<HTMLTableCellElement> {
  onAddItem?: (type: string) => void;
}
export const EmptyArea = forwardRef<HTMLTableCellElement, Props>(
  ({ className, children, onAddItem, ...props }, ref) => {
    const handleClick = useCallback(async () => {
      const res = (await openItemSelectModal()) as string | null;
      if (res) {
        onAddItem?.(res);
      }
    }, [onAddItem]);
    return (
      <Column ref={ref} {...props} onClick={handleClick}>
        <div
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
        >
          <button
            className={cn(
              'absolute m-auto aspect-square size-8',
              'flex items-center justify-center rounded-full text-lg',
              'group-hover/empty-area:border-white group-hover/empty-area:text-white',
              'transition-all duration-300',
              'cursor-pointer'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              fill="#e3e3e3"
              viewBox="0 -960 960 960"
            >
              <path
                className={cn(
                  'fill-white group-hover/empty-area:fill-sky-600',
                  'transition-all duration-300'
                )}
                d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
              />
            </svg>
          </button>
        </div>
        {children}
      </Column>
    );
  }
);
EmptyArea.displayName = 'EmptyArea';
