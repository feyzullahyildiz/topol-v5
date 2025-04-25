import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItems } from '@/types/RootNode';

import { CustomBorderAndDragHandle } from './util/CustomBorderAndDragHandle';

interface Props {
  id: string;
  index: number;
  item: IRootItems;
  itemRenderer: IItemRenderer;
}
export const DnD_ItemComponent = ({ id, index, item, itemRenderer }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div className="group/item relative" ref={provided.innerRef} {...provided.draggableProps}>
          {itemRenderer(id, index, item)}
          <CustomBorderAndDragHandle
            squareSize={28}
            borderSize={12}
            className="z-10 group-hover/item:flex"
            color="#25c589"
            dragHandleProps={provided.dragHandleProps}
            // debug
          />
        </div>
      )}
    </Draggable>
  );
};
