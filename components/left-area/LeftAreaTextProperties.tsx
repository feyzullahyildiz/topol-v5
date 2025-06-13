import React from 'react';

import { useTextComponent } from '@/hooks/useTextComponent';
import { IItemText } from '@/types/node/IItemText';

import { Textarea } from '../ui/textarea';

interface Props {
  id: string;
  payload: IItemText;
}
export const LeftAreaTextProperties = ({ id, payload }: Props) => {
  const { onChange } = useTextComponent(id);
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-lg font-bold">Text</h2>
      <Textarea value={payload.props.text} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
