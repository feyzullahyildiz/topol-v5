import { useAtom } from 'jotai';

import { AtomRoot } from './AtomRoot';

export const useRootStore = () => useAtom(AtomRoot);

export type ISetRootStoreFunction = ReturnType<typeof useRootStore>['1'];
