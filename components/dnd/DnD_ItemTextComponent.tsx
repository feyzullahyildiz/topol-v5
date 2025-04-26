import React from 'react';

import { useTextComponent } from '@/hooks/useTextComponent';
import { IItemTextComponentProps } from '@/types/props/item';

export const DnD_ItemTextComponent = ({ id, text }: IItemTextComponentProps) => {
  const { onChange } = useTextComponent(id);
  return (
    <input type="text" className="w-full flex-1 p-4 break-all" value={text} onChange={onChange} />
  );
};
