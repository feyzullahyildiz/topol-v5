import { atomWithImmer } from 'jotai-immer';

import { IRoot } from '@/types/IRoot';

export const RootAtom = atomWithImmer<IRoot>({
  rows: {},
  columns: {},
  items: {},
  rowOrder: [],
});
