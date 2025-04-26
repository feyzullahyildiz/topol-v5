import { createContext } from 'react';

import { IRoot } from '@/types/IRoot';

import { ISetRootFunction } from './useNodes';

type EditorExtraContextType = {
  root: IRoot;
  setRoot: ISetRootFunction;
};

export const EditorExtraContext = createContext<EditorExtraContextType>(null!);
