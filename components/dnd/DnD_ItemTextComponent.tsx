import React from 'react';

import { useTextComponent } from '@/hooks/useTextComponent';
import { IItemTextComponentProps } from '@/types/props/item';

import { Textarea } from '../ui/textarea';

interface Props extends IItemTextComponentProps {
  id: string;
}
export const DnD_ItemTextComponent = ({ id, text }: Props) => {
  const { onChange } = useTextComponent(id);
  return (
    <Textarea
      className="overflow-auto border-none p-4 text-sm break-all"
      value={text}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
