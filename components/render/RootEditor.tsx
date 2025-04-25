import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import React, { useCallback, useEffect } from 'react';

import { IRootNode } from '@/types/RootNode';
import { getColumnRendererDnD } from '@/util/column-renderer/getColumnRendererDnD';
import { getItemRendererDnD } from '@/util/column-renderer/getItemRendererDnD';

import { useNodes } from './dnd/useNodes';
import { DnD_RowComponent } from './DnD_RowComponent';

interface Props {
  initialNodes?: IRootNode[];
  children?: (nodes: IRootNode[]) => React.ReactNode;
  onNodesChange?: (nodes: IRootNode[]) => void;
}
export const RootEditor = ({ initialNodes, children, onNodesChange }: Props) => {
  const { nodes, setNodes } = useNodes();
  const onDragStart = useCallback(() => {
    document.body.style.cursor = 'grabbing';
  }, []);
  const onDragEnd = useCallback(() => {
    document.body.style.cursor = 'inherit';
  }, []);
  useEffect(() => {
    setNodes(initialNodes || []);
  }, [initialNodes, setNodes]);

  const rowList = nodes.filter((node) => node.type === 'row');
  const columnList = nodes.filter((node) => node.type === 'column');
  const itemList = nodes.filter((node) => node.type === 'item');
  const comps = rowList
    .map((node, index) => (
      <DnD_RowComponent
        key={node.id}
        id={node.id}
        index={index}
        type={node.type}
        columnIds={node.columnIds}
        columnList={columnList}
        itemList={itemList}
        columnRenderer={getColumnRendererDnD}
        itemRenderer={getItemRendererDnD}
      />
    ))
    .filter(Boolean);

  useEffect(() => {
    onNodesChange?.(nodes);
  }, [nodes, onNodesChange]);
  return (
    <>
      <div className="flex max-w-[800px] flex-col">
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
