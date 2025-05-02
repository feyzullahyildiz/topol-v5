import { Img } from '@react-email/components';
import React from 'react';

import { IItemImageComponentProps } from '@/types/props/image';

export const ItemImageComponent = ({ src }: IItemImageComponentProps) => {
  return <Img src={src} alt="image" />;
};
