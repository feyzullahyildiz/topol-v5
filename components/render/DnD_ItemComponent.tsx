import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { useItemSelection } from '@/hooks/useItemSelection';
import { cn } from '@/lib/utils';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItems } from '@/types/IRoot';

import { CustomBorderAndDragHandle } from './util/CustomBorderAndDragHandle';

interface Props {
  id: string;
  index: number;
  item: IRootItems;
  itemRenderer: IItemRenderer;
}
export const DnD_ItemComponent = ({ id, index, item, itemRenderer }: Props) => {
  const { isSelected, onClick } = useItemSelection(id);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="group/item relative"
          onClick={onClick}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          {itemRenderer(id, index, item)}
          <CustomBorderAndDragHandle
            squareSize={28}
            borderSize={0}
            className={cn('z-10 group-hover/item:flex', isSelected && 'flex')}
            color="#25c589"
            dragHandleProps={provided.dragHandleProps}
            // debug
          />
        </div>
      )}
    </Draggable>
  );
};
