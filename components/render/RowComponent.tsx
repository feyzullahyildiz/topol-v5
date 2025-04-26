import React from 'react';

import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootColumnRecord, IRootItemRecord } from '@/types/IRoot';
import { IBaseRow } from '@/types/node/IBaseRow';

interface Props extends IBaseRow {
  columnRenderer: IColumnRenderer;
  itemRenderer: IItemRenderer;
  itemRecord: IRootItemRecord;
  columnRecord: IRootColumnRecord;
}

export const RowComponent = ({
  columnIds,
  itemRecord,
  columnRecord,
  columnRenderer,
  itemRenderer,
}: Props) => {
  return (
    <div className="flex items-center gap-4 p-2">
      {columnIds.map((cid, index) => {
        const column = columnRecord[cid];
        return (
          <div className="flex-1" key={column.id}>
            {columnRenderer(column.id, index, column, itemRecord, itemRenderer)}
          </div>
        );
      })}
    </div>
  );
};
