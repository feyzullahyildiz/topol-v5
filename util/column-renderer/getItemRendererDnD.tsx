import { DnD_ItemComponent } from '@/components/render/DnD_ItemComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

import { getItemRendererDefault } from './getItemRendererDefault';

export const getItemRendererDnD: IItemRenderer = (id, index, item) => {
  return (
    <DnD_ItemComponent id={id} index={index} item={item} itemRenderer={getItemRendererDefault} />
  );
};
