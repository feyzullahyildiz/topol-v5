import { DropResult } from '@hello-pangea/dnd';
import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { useCallback } from 'react';

import { IRoot } from '@/types/RootNode';

const nodesAtom = atomWithImmer<IRoot>({
  rows: {},
  columns: {},
  items: {},
  rowOrder: [],
});

export const useNodes = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);

  const onDragStart = useCallback(() => {
    document.body.style.cursor = 'grabbing';
  }, []);
  const onDragEnd = useCallback((result: DropResult) => {
    document.body.style.cursor = 'inherit';

    if (result.type === 'row') {
      return;
    }
    // console.log('result', result);
    // const { destination, source, draggableId } = result;
  }, []);

  return { nodes, setNodes, onDragEnd, onDragStart };
};
