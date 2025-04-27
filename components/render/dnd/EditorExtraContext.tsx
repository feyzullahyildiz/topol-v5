import { createContext } from 'react';

import { ISetRootStoreFunction } from '@/hooks/useRootStore';
import { IRoot } from '@/types/IRoot';

type EditorExtraContextType = {
  root: IRoot;
  setRoot: ISetRootStoreFunction;
};

export const EditorExtraContext = createContext<EditorExtraContextType>(null!);
