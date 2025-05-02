import { ItemImageComponent } from '@/components/default/ItemImageComponent';
import { ItemTextComponent } from '@/components/default/ItemTextComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

export const getItemRendererDefault: IItemRenderer = (id, index, item) => {
  if (item.component === 'text') {
    return <ItemTextComponent key={id} text={item.props.text} />;
  }
  if (item.component === 'image') {
    return <ItemImageComponent key={id} src={item.props.src} />;
  }
  return null;
};
