import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import React, { useEffect } from 'react';

import { IRoot } from '@/types/RootNode';
import { getColumnRendererDnD } from '@/util/column-renderer/getColumnRendererDnD';
import { getItemRendererDnD } from '@/util/column-renderer/getItemRendererDnD';

import { useNodes } from './dnd/useNodes';
import { DnD_RowComponent } from './DnD_RowComponent';

interface Props {
  initialRoot: IRoot;
  children?: (nodes: IRoot) => React.ReactNode;
  onNodesChange?: (nodes: IRoot) => void;
}
export const RootEditor = ({ initialRoot, children, onNodesChange }: Props) => {
  const { nodes, setNodes, onDragEnd, onDragStart } = useNodes();
  useEffect(() => {
    setNodes(initialRoot);
  }, [initialRoot, setNodes]);

  const comps = nodes.rowOrder
    .map((rowId, index) => {
      const row = initialRoot.rows[rowId];
      return (
        <DnD_RowComponent
          key={row.id}
          id={row.id}
          index={index}
          type={row.type}
          columnIds={row.columnIds}
          columnRecord={initialRoot.columns}
          itemRecord={initialRoot.items}
          columnRenderer={getColumnRendererDnD}
          itemRenderer={getItemRendererDnD}
        />
      );
    })
    .filter(Boolean);

  useEffect(() => {
    onNodesChange?.(nodes);
  }, [nodes, onNodesChange]);
  return (
    <>
      <div className="flex w-full max-w-[800px] flex-col">
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <Droppable droppableId="root" type="row">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {comps}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {children?.(nodes)}
    </>
  );
};
