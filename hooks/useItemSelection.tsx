import { useCallback, useMemo } from 'react';

import { useLayoutMenu } from './global-state/useLayoutState';

export const useItemSelection = (id: string) => {
  const [state, setState] = useLayoutMenu();

  const onClick = useCallback(() => {
    setState({
      menu: null,
      selectedId: id,
    });
  }, [id, setState]);
  const isSelected = useMemo(() => state.selectedId === id, [state.selectedId, id]);
  return { onClick, isSelected };
};
