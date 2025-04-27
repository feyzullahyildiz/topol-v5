import { useAtom } from 'jotai';

import { RootAtom } from './RootAtom';

export const useRootStore = () => useAtom(RootAtom);

export type ISetRootStoreFunction = ReturnType<typeof useRootStore>['1'];
