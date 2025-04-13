import { RootNode } from '@/lib/RootNode';
import React, { useEffect } from 'react';
import { DndContext, pointerWithin } from '@dnd-kit/core';
import { SingleEditorRenderer } from './SingleEditorRenderer';
import { useNodes } from './useNodes';
import { EditorExtraContext } from './extra/EditorExtraContext';

interface Props {
  initialNodes?: RootNode[];
  children?: (nodes: RootNode[]) => React.ReactNode;
}
export const EditorNodeRenderer = ({ initialNodes, children }: Props) => {
  const { nodes, setNodes, onDragEnd, onMouseEnter, onMouseLeave, selectedNode, onDelete } =
    useNodes();
  useEffect(() => {
    setNodes(initialNodes || []);
  }, [initialNodes, setNodes]);

  const rootNodes = nodes.filter(node => node.atRoot);
  const childNodes = nodes.filter(node => !node.atRoot);
  const comps = rootNodes
    .map(node => <SingleEditorRenderer key={node.id} node={node} childNodeList={childNodes} />)
    .filter(Boolean);

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
            {comps}
          </DndContext>
        </EditorExtraContext>
      </div>
      {children?.(nodes)}
    </>
  );
};
