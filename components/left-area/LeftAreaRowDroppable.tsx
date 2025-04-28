'use client';
import { Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { cn } from '@/util/cn';

interface Props {
  children?: React.ReactNode;
  className?: string;
}
export const LeftAreaRowDroppable = ({ children, className }: Props) => {
  return (
    <Droppable isDropDisabled droppableId="layout" type="row">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className={cn(className)}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
