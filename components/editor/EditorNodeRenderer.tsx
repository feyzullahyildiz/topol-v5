import { RootNode } from '@/lib/RootNode';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SingleEditorRenderer } from './SingleEditorRenderer';

interface Props {
  initialNodes?: RootNode[];
}
export const EditorNodeRenderer = ({ initialNodes }: Props) => {
  const [nodes] = useState<RootNode[]>(initialNodes || []);
  const rootNodes = nodes.filter(node => node.atRoot);
  const childNodes = nodes.filter(node => !node.atRoot);
  const comps = rootNodes
    .map(node => <SingleEditorRenderer key={node.id} node={node} childNodeList={childNodes} />)
    .filter(Boolean);
  return <DndContext>{comps}</DndContext>;
};
