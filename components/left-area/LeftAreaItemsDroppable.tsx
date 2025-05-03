import { Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const LeftAreaItemsDroppable = ({ children, className }: Props) => {
  return (
    <Droppable isDropDisabled droppableId="items" type="item">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className={cn(className)}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
