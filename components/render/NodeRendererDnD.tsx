import { IRootNode } from '@/types/RootNode';
import React, { useEffect } from 'react';
import { DndContext, pointerWithin } from '@dnd-kit/core';
import { SingleNodeRendererDnd } from './SingleNodeRendererDnd';
import { useNodes } from './dnd/useNodes';
import { SortableContext } from '@dnd-kit/sortable';
import { EditorExtraContext } from './dnd/EditorExtraContext';

interface Props {
  initialNodes?: IRootNode[];
  children?: (nodes: IRootNode[]) => React.ReactNode;
  onNodesChange?: (nodes: IRootNode[]) => void;
}
export const EditorNodeRenderer = ({ initialNodes, children, onNodesChange }: Props) => {
  const { nodes, setNodes, onDragEnd, onMouseEnter, onMouseLeave, selectedNode, onDelete } =
    useNodes();
  useEffect(() => {
    setNodes(initialNodes || []);
  }, [initialNodes, setNodes]);

  const rootNodes = nodes.filter(node => node.atRoot);
  const childNodes = nodes.filter(node => !node.atRoot);
  const comps = rootNodes
    .map(node => <SingleNodeRendererDnd key={node.id} node={node} childNodeList={childNodes} />)
    .filter(Boolean);

  const rootNodeIds = rootNodes.map(node => node.id);
  useEffect(() => {
    onNodesChange?.(nodes);
  }, [nodes, onNodesChange]);
  return (
    <>
      <div className="flex max-w-[800px] flex-col">
        <EditorExtraContext
          value={{
            onMouseEnter,
            onMouseLeave,
            selectedNode,
            onDelete,
          }}
        >
          <DndContext onDragEnd={onDragEnd} collisionDetection={pointerWithin}>
            <SortableContext items={rootNodeIds}>{comps}</SortableContext>
          </DndContext>
        </EditorExtraContext>
      </div>
      {children?.(nodes)}
    </>
  );
};
