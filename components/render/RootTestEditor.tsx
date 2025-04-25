import React, { useCallback, useState } from 'react';

import { IRootNode } from '@/types/RootNode';

import { RootEditor } from './RootEditor';
import { RootPreview } from './RootPreview';
interface Props {
  initialNodes?: IRootNode[];
  children?: (nodes: IRootNode[]) => React.ReactNode;
}
export const RootTestEditor = ({ initialNodes }: Props) => {
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
      <RootEditor initialNodes={initialNodes} onNodesChange={makeRequest}>
        {(nextNodes) => (
          <>
            <hr />
            <h2 className="text-2xl font-bold">View Area (Result)</h2>
            <RootPreview nodes={nextNodes} />
          </>
        )}
      </RootEditor>
      <hr />
      <h2 className="text-2xl font-bold">SONUÇ</h2>
      <pre className="break-all whitespace-pre-wrap">{result}</pre>
    </div>
  );
};
