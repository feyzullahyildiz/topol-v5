import { Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { ColumnComponent } from '@/components/render/ColumnComponent';
import { IItemRenderer } from '@/types/IItemRenderer';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IRootItems } from '@/types/RootNode';

interface Props extends IBaseColumn {
  items: IRootItems[];
  itemRenderer: IItemRenderer;
  index: number;
}
export const DnD_ColumnComponent = ({ id, items, itemIDs, itemRenderer, ...props }: Props) => {
  return (
    <Droppable droppableId={id} type="column">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ColumnComponent
            id={id}
            items={items}
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
