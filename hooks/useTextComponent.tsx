import { useCallback } from 'react';

import { useExtra } from '@/components/render/dnd/useExtra';

export const useTextComponent = (id: string) => {
  const { setRoot } = useExtra();

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
