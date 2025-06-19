import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { EnumRowIDs } from '@/types/node/EnumDraggableIDs';

export const creatBaseRow = (id: EnumRowIDs, index: number, children: React.ReactNode) => {
  const Component = () => (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            className="border-1 border-gray-500 p-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
  Component.displayName = `Row_${id}`;
  return Component;
};
