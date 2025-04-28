import { useCallback } from 'react';

import { useRootStore } from './useRootStore';

export const useTextComponent = (id: string) => {
  const [, setRoot] = useRootStore();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRoot((draft) => {
        draft.items[id].props.text = e.target.value;
      });
    },
    [id, setRoot]
  );
  return { onChange };
};
