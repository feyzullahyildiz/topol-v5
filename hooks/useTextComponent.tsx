import { useCallback } from 'react';

import { IItemText } from '@/types/node/IItemText';

import { useRootStore } from './global-state/useRootStore';

export const useTextComponent = (id: string) => {
  const [, setRoot] = useRootStore();

  const onChange = useCallback(
    (text: string) => {
      setRoot((draft) => {
        const item = draft.items[id] as IItemText;
        item.props.text = text;
      });
    },
    [id, setRoot]
  );
  return { onChange };
};
