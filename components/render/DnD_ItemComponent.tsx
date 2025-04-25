import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItems } from '@/types/RootNode';

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
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {itemRenderer(id, index, item)}
        </div>
      )}
    </Draggable>
  );
};
