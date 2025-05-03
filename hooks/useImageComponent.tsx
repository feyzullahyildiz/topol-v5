import { useCallback } from 'react';

import { IItemImage } from '@/types/node/IItemImage';

import { useRootStore } from './global-state/useRootStore';

export const useImageComponent = (id: string) => {
  const [, setRoot] = useRootStore();

  const onChange = useCallback(
    (url: string) => {
      setRoot((draft) => {
        const item = draft.items[id] as IItemImage;
        item.props.src = url;
      });
    },
    [id, setRoot]
  );
  return { onChange };
};
