import { Img } from '@react-email/components';
import React, { memo, useEffect, useState } from 'react';

import { IItemImageComponentProps } from '@/types/props/image';

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to convert blob to base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

interface Props extends IItemImageComponentProps {
  id: string;
}
const cacheMap = new Map<string, string>();
const DnD_ItemImageComponentNormal = ({ src }: Props) => {
  const [srcInBase64, setSrcInBase64] = useState<string | null>(null);
  useEffect(() => {
    const fetchImage = async () => {
      if (cacheMap.has(src)) {
        setSrcInBase64(cacheMap.get(src) as string);
        return;
      }
      console.log('FECHING');
      const response = await fetch(src);
      const blob = await response.blob();
      const base64 = await blobToBase64(blob);
      setSrcInBase64(base64);
      cacheMap.set(src, base64);
    };
    fetchImage();
  }, [src]);

  if (!srcInBase64) return null;
  return <Img src={srcInBase64} className="box-content min-h-24" />;
};
export const DnD_ItemImageComponent = memo(DnD_ItemImageComponentNormal);
