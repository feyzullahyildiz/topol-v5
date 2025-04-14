import { createContext } from 'react';

type EditorExtraContextType = {
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
  selectedNode: string | undefined;
  onDelete: (id: string) => void;
};

export const EditorExtraContext = createContext<EditorExtraContextType>({
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  selectedNode: undefined,
  onDelete: () => {},
});
