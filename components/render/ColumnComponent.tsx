import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IRootItemRecord } from '@/types/RootNode';

interface ColumnComponentProps extends IBaseColumn {
  itemRecord: IRootItemRecord;
  itemRenderer: IItemRenderer;
}

export const ColumnComponent = ({ itemRecord, itemIDs, itemRenderer }: ColumnComponentProps) => {
  return (
    <div className="flex flex-col">
      {itemIDs.map((id, index) => {
        const item = itemRecord[id];
        return itemRenderer(id, index, item);
      })}
    </div>
  );
};
