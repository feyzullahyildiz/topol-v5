import React from 'react';

import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IBaseRow } from '@/types/node/IBaseRow';
import { IRootItems } from '@/types/RootNode';

interface Props extends IBaseRow {
  columnRenderer: IColumnRenderer;
  itemRenderer: IItemRenderer;
  columnList: IBaseColumn[];
  itemList: IRootItems[];
}

export const RowComponent = ({
  columnIds,
  columnList,
  itemList,
  columnRenderer,
  itemRenderer,
}: Props) => {
  return (
    <div className="flex items-center gap-4 p-2">
      {columnIds.map((cid, index) => {
        const column = columnList.find((c) => c.id === cid)!;
        return (
          <div className="flex-1" key={column.id}>
            {columnRenderer(column.id, index, column, itemList, itemRenderer)}
          </div>
        );
      })}
    </div>
  );
};
