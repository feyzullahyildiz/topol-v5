import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

import { IRootNode } from '@/types/RootNode';

const nodesAtom = atomWithImmer<IRootNode[]>([]);

export const useNodes = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
  return { nodes, setNodes };
};
