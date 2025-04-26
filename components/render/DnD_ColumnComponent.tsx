import { Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { ColumnComponent } from '@/components/render/ColumnComponent';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IRootItemRecord } from '@/types/RootNode';

interface Props extends IBaseColumn {
  itemRecord: IRootItemRecord;
  itemRenderer: IItemRenderer;
  index: number;
}
export const DnD_ColumnComponent = ({ id, itemRecord, itemIDs, itemRenderer, ...props }: Props) => {
  return (
    <Droppable droppableId={id} type="column">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ColumnComponent
            id={id}
            itemRecord={itemRecord}
            itemIDs={itemIDs}
            itemRenderer={itemRenderer}
            {...props}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
