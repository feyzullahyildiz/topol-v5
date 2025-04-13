import { RootNode } from '@/lib/RootNode';
import React from 'react';
import { EditorNodeRenderer } from '../editor/EditorNodeRenderer';
import { NodeRenderer } from '../render/NodeRenderer';

interface Props {
  initialNodes?: RootNode[];
  children?: (nodes: RootNode[]) => React.ReactNode;
}
export const TestRenderer = ({ initialNodes }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Drag and Drop Enabled</h2>
      <EditorNodeRenderer initialNodes={initialNodes}>
        {nextNodes => (
          <>
            <hr />
            <h2>Drag and Drop Disabled</h2>
            <NodeRenderer nodes={nextNodes} />
          </>
        )}
      </EditorNodeRenderer>
    </div>
  );
};
