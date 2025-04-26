import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItemRecord } from '@/types/IRoot';
import { IBaseColumn } from '@/types/node/IBaseColumn';

interface ColumnComponentProps extends IBaseColumn {
  itemRecord: IRootItemRecord;
  itemRenderer: IItemRenderer;
  children?: React.ReactNode;
}

export const ColumnComponent = ({
  itemRecord,
  itemIDs,
  itemRenderer,
  children,
}: ColumnComponentProps) => {
  return (
    <div className="flex flex-col gap-4">
      {itemIDs.map((id, index) => {
        const item = itemRecord[id];
        return itemRenderer(id, index, item);
      })}
      {children}
    </div>
  );
};
