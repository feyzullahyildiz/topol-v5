import { createContext } from 'react';

type EditorExtraContextType = {
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  selectedNode: string | undefined;
};

export const EditorExtraContext = createContext<EditorExtraContextType>({
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  selectedNode: undefined,
});
