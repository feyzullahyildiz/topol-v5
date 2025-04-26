import { Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { ColumnComponent } from '@/components/render/ColumnComponent';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IRootItemRecord } from '@/types/IRoot';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { cn } from '@/util/cn';

import { EmptyArea } from '../utility/EmptyAreaDefault';

interface Props extends IBaseColumn {
  itemRecord: IRootItemRecord;
  itemRenderer: IItemRenderer;
  index: number;
}
export const DnD_ColumnComponent = ({ id, itemRecord, itemIDs, itemRenderer, ...props }: Props) => {
  return (
    <Droppable droppableId={id} type="column">
      {(provided, snapshot) => {
        if (itemIDs.length === 0) {
          return (
            <EmptyArea ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
            </EmptyArea>
          );
        }
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ColumnComponent
              id={id}
              itemRecord={itemRecord}
              itemIDs={itemIDs}
              itemRenderer={itemRenderer}
              className={cn(snapshot.isDraggingOver && 'bg-blue-300/20')}
              {...props}
            >
              {provided.placeholder}
            </ColumnComponent>
          </div>
        );
      }}
    </Droppable>
  );
};
