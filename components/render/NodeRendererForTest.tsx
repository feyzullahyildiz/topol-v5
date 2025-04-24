import React, { useCallback, useState } from 'react';

import { IRootNode } from '@/types/RootNode';

import { NodeRendererDefault } from './NodeRendererDefault';
import { EditorNodeRenderer } from './NodeRendererDnD';
interface Props {
  initialNodes?: IRootNode[];
  children?: (nodes: IRootNode[]) => React.ReactNode;
}
export const NodeRendererForTest = ({ initialNodes }: Props) => {
  const [result, setResult] = useState<string>('');
  const makeRequest = useCallback(async (nodes: IRootNode[]) => {
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
        {(nextNodes) => (
          <>
            <hr />
            <h2 className="text-2xl font-bold">View Area (Result)</h2>
            <NodeRendererDefault nodes={nextNodes} />
          </>
        )}
      </EditorNodeRenderer>
      <hr />
      <h2 className="text-2xl font-bold">SONUÇ</h2>
      <pre className="break-all whitespace-pre-wrap">{result}</pre>
    </div>
  );
};
