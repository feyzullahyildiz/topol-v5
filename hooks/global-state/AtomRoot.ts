import { atomWithImmer } from 'jotai-immer';

import { IRoot } from '@/types/IRoot';

export const AtomRoot = atomWithImmer<IRoot>({
  rows: {},
  columns: {},
  items: {},
  rowOrder: [],
});
