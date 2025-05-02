import { Droppable } from '@hello-pangea/dnd';
import React, { useCallback } from 'react';

import { ColumnComponent } from '@/components/default/ColumnComponent';
import { useNodes } from '@/hooks/useNodes';
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
  const { addNode } = useNodes();
  const onAddItem = useCallback(
    (type: string) => {
      addNode(id, 0, type);
    },
    [addNode, id]
  );
  return (
    <Droppable droppableId={id} type="column">
      {(provided, snapshot) => {
        if (itemIDs.length === 0) {
          return (
            <EmptyArea ref={provided.innerRef} {...provided.droppableProps} onAddItem={onAddItem}>
              {provided.placeholder}
            </EmptyArea>
          );
        }
        return (
          <ColumnComponent
            ref={provided.innerRef}
            {...provided.droppableProps}
            id={id}
            itemRecord={itemRecord}
            itemIDs={itemIDs}
            itemRenderer={itemRenderer}
            className={cn(snapshot.isDraggingOver && 'bg-blue-300/20')}
            {...props}
          >
            {provided.placeholder}
          </ColumnComponent>
        );
      }}
    </Droppable>
  );
};
