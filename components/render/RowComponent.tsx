import { DraggableProvided } from '@hello-pangea/dnd';
import { Row } from '@react-email/components';
import React from 'react';

import { cn } from '@/lib/utils';
import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootColumnRecord, IRootItemRecord } from '@/types/IRoot';
import { IBaseRow } from '@/types/node/IBaseRow';
interface Props extends IBaseRow {
  columnRenderer: IColumnRenderer;
  itemRenderer: IItemRenderer;
  itemRecord: IRootItemRecord;
  columnRecord: IRootColumnRecord;
  className?: string;
  children?: React.ReactNode;
  draggableProps?: DraggableProvided['draggableProps'];
}

export const RowComponent = React.forwardRef<HTMLTableElement, Props>(
  (
    {
      columnIds,
      itemRecord,
      columnRecord,
      columnRenderer,
      itemRenderer,
      className,
      children,
      draggableProps,
    },
    ref
  ) => {
    return (
      <Row className={cn('', className)} ref={ref} {...draggableProps}>
        {columnIds.map((cid, index) => {
          const column = columnRecord[cid];
          return columnRenderer(column.id, index, column, itemRecord, itemRenderer);
        })}
        {children}
      </Row>
    );
  }
);

RowComponent.displayName = 'RowComponent';
