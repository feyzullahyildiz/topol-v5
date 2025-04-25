import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { IColumnRenderer } from '@/types/IColumnRenderer';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IBaseRow } from '@/types/node/IBaseRow';
import { IRootItems } from '@/types/RootNode';

import { RowComponent } from './RowComponent';

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
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <RowComponent
            id={id}
            type={type}
            columnIds={columnIds}
            columnList={columnList}
            itemList={itemList}
            columnRenderer={columnRenderer}
            itemRenderer={itemRenderer}
          />
        </div>
      )}
    </Draggable>
  );
};
