import { Column } from '@react-email/components';
import React, { forwardRef } from 'react';

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

export const ColumnComponent = forwardRef<HTMLTableCellElement, ColumnComponentProps>(
  ({ itemRecord, itemIDs, itemRenderer, children, className }, ref) => {
    return (
      <Column ref={ref} className={cn('', className)}>
        {itemIDs.map((id, index) => {
          const item = itemRecord[id];
          return itemRenderer(id, index, item);
        })}
        {children}
      </Column>
    );
  }
);

ColumnComponent.displayName = 'ColumnComponent';
