import React from 'react';

import { useLayoutMenu } from '@/hooks/global-state/useLayoutState';
import { useRootStore } from '@/hooks/global-state/useRootStore';

import { LeftAreaImageProperties } from './LeftAreaImageProperties';
import { LeftAreaTextProperties } from './LeftAreaTextProperties';

export const LeftAreaItemProperties = () => {
  const [root] = useRootStore();
  const [layoutMenu] = useLayoutMenu();
  const selectedId = layoutMenu.selectedId!;
  const selectedItem = root.items[selectedId]!;
  if (!selectedItem) {
    return null;
  }
  if (selectedItem.component === 'image') {
    return <LeftAreaImageProperties id={selectedId} payload={selectedItem} />;
  }
  return <LeftAreaTextProperties id={selectedId} payload={selectedItem} />;
};
