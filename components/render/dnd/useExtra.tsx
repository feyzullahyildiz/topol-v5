import { useContext } from 'react';

import { EditorExtraContext } from './EditorExtraContext';

export const useExtra = () => useContext(EditorExtraContext);
