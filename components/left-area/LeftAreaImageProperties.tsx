import React, { useCallback } from 'react';

import { useImageComponent } from '@/hooks/useImageComponent';
import { IItemImage } from '@/types/node/IItemImage';

import { openImagePickerModal } from '../modal/ImagePickerModal';
import { Button } from '../ui/button';
interface Props {
  id: string;
  payload: IItemImage;
}
export const LeftAreaImageProperties = ({ id, payload }: Props) => {
  const { onChange } = useImageComponent(id);
  const onClick = useCallback(async () => {
    const res = await openImagePickerModal();
    if (res) {
      onChange(res as string);
    }
  }, [onChange]);
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-lg font-bold">Image</h2>
      <div>{payload.props.src}</div>
      <Button onClick={onClick}>Resim Seç</Button>
    </div>
  );
};
