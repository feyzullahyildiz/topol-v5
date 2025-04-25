import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IBaseRow } from '@/types/node/IBaseRow';
import { IRootItems } from '@/types/RootNode';

import { RowComponent } from './RowComponent';
import { CustomBorderAndDragHandle } from './util/CustomBorderAndDragHandle';

interface Props extends IBaseRow {
  columnRenderer: IColumnRenderer;
  itemRenderer: IItemRenderer;
  columnList: IBaseColumn[];
  itemList: IRootItems[];
  index: number;
}
export const DnD_RowComponent = ({
  id,
  index,
  type,
  columnIds,
  columnList,
  itemList,
  columnRenderer,
  itemRenderer,
}: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div className="group/row relative" ref={provided.innerRef} {...provided.draggableProps}>
          <RowComponent
            id={id}
            type={type}
            columnIds={columnIds}
            columnList={columnList}
            itemList={itemList}
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
      )}
    </Draggable>
  );
};
