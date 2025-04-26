import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseRow } from '@/types/node/IBaseRow';
import { IRootColumnRecord, IRootItemRecord } from '@/types/RootNode';

import { EmptyArea } from '../utility/EmptyAreaDefault';
import { RowComponent } from './RowComponent';
import { CustomBorderAndDragHandle } from './util/CustomBorderAndDragHandle';

interface Props extends IBaseRow {
  columnRenderer: IColumnRenderer;
  itemRenderer: IItemRenderer;
  row: IBaseRow;
  columnRecord: IRootColumnRecord;
  itemRecord: IRootItemRecord;
  index: number;
}
export const DnD_RowComponent = ({
  id,
  index,
  type,
  columnIds,
  row,
  columnRecord,
  itemRecord,
  columnRenderer,
  itemRenderer,
}: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        if (row.columnIds.length === 0) {
          return <EmptyArea ref={provided.innerRef} {...provided.draggableProps} />;
        }
        return (
          <div className="group/row relative" ref={provided.innerRef} {...provided.draggableProps}>
            <RowComponent
              id={id}
              type={type}
              columnIds={columnIds}
              columnRecord={columnRecord}
              itemRecord={itemRecord}
              columnRenderer={columnRenderer}
              itemRenderer={itemRenderer}
            />
            <CustomBorderAndDragHandle
              squareSize={32}
              borderSize={48}
              className="z-0 group-hover/row:flex"
              color="#a259ff"
              dragHandleProps={provided.dragHandleProps}
            />
          </div>
        );
      }}
    </Draggable>
  );
};
