import { RootNode } from '@/lib/RootNode';
import React, { useCallback, useState } from 'react';
import { EditorNodeRenderer } from '../editor/EditorNodeRenderer';
import { NodeRenderer } from '../render/NodeRenderer';

interface Props {
  initialNodes?: RootNode[];
  children?: (nodes: RootNode[]) => React.ReactNode;
}
export const TestRenderer = ({ initialNodes }: Props) => {
  const [result, setResult] = useState<string>('');
  const makeRequest = useCallback(async (nodes: RootNode[]) => {
    const res = await fetch('http://localhost:3000/api/test', {
      method: 'POST',
      body: JSON.stringify(nodes),
    });
    const data = await res.text();
    setResult(data);
  }, []);
  return (
    <div className="flex flex-col gap-4 p-16">
      <h2 className="text-2xl font-bold">Edit Area</h2>
      <EditorNodeRenderer initialNodes={initialNodes} onNodesChange={makeRequest}>
        {nextNodes => (
          <>
            <hr />
            <h2 className="text-2xl font-bold">View Area (Result)</h2>
            <NodeRenderer nodes={nextNodes} />
          </>
        )}
      </EditorNodeRenderer>
      <hr />
      <h2 className="text-2xl font-bold">SONUÇ</h2>
      <pre className="break-all whitespace-pre-wrap">{result}</pre>
    </div>
  );
};
