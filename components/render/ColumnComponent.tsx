import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IRootItems } from '@/types/RootNode';

interface ColumnComponentProps extends IBaseColumn {
  items: IRootItems[];
  itemRenderer: IItemRenderer;
}

export const ColumnComponent = ({ items, itemIDs, itemRenderer }: ColumnComponentProps) => {
  return (
    <div className="flex flex-col gap-2">
      {itemIDs.map((id, index) => {
        const item = items.find((item) => item.id === id)!;
        return itemRenderer(id, index, item);
      })}
    </div>
  );
};
