import React, { useCallback, useState } from 'react';

import { IRoot } from '@/types/IRoot';

import { RootEditor } from './RootEditor';
import { RootPreview } from './RootPreview';
interface Props {
  initialRoot: IRoot;
  children?: (nodes: IRoot) => React.ReactNode;
}
export const RootTestEditor = ({ initialRoot }: Props) => {
  const [result, setResult] = useState<string>('');
  const makeRequest = useCallback(async (nodes: IRoot) => {
    const res = await fetch('http://localhost:3000/api/test', {
      method: 'POST',
      body: JSON.stringify(nodes),
    });
    const data = await res.text();
    setResult(data);
  }, []);
  return (
    <div className="flex w-full flex-col gap-4 p-16">
      <h2 className="text-2xl font-bold">Edit Area</h2>
      <RootEditor initialRoot={initialRoot} onNodesChange={makeRequest}>
        {(nextRoot) => (
          <>
            <hr />
            <h2 className="text-2xl font-bold">View Area (Result)</h2>
            <RootPreview root={nextRoot} />
          </>
        )}
      </RootEditor>
      <hr />
      <h2 className="text-2xl font-bold">SONUÇ</h2>
      <pre className="break-all whitespace-pre-wrap">{result}</pre>
    </div>
  );
};
