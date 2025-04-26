import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItemRecord } from '@/types/IRoot';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { cn } from '@/util/cn';

interface ColumnComponentProps extends IBaseColumn {
  className?: string;
  itemRecord: IRootItemRecord;
  itemRenderer: IItemRenderer;
  children?: React.ReactNode;
}

export const ColumnComponent = ({
  itemRecord,
  itemIDs,
  itemRenderer,
  children,
  className,
}: ColumnComponentProps) => {
  return (
    <div className={cn('flex shrink-0 flex-col gap-4', className)}>
      {itemIDs.map((id, index) => {
        const item = itemRecord[id];
        return itemRenderer(id, index, item);
      })}
      {children}
    </div>
  );
};
