import { RootNode } from '@/lib/RootNode';
import React, { useEffect } from 'react';
import { DndContext, pointerWithin } from '@dnd-kit/core';
import { SingleEditorRenderer } from './SingleEditorRenderer';
import { useNodes } from './useNodes';

interface Props {
  initialNodes?: RootNode[];
  children?: (nodes: RootNode[]) => React.ReactNode;
}
export const EditorNodeRenderer = ({ initialNodes, children }: Props) => {
  const { nodes, setNodes, onDragEnd } = useNodes();
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
        <DndContext onDragEnd={onDragEnd} collisionDetection={pointerWithin}>
          {comps}
        </DndContext>
      </div>
      {children?.(nodes)}
    </>
  );
};
