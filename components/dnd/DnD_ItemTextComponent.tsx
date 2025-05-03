import React from 'react';

import { useTextComponent } from '@/hooks/useTextComponent';
import { IItemTextComponentProps } from '@/types/props/item';

interface Props extends IItemTextComponentProps {
  id: string;
}
export const DnD_ItemTextComponent = ({ id, text }: Props) => {
  const { onChange } = useTextComponent(id);
  return (
    <input
      type="text"
      className="box-content min-h-6 w-fit p-4 text-sm break-all"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
