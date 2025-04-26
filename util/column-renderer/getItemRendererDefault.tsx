import { ItemTextComponent } from '@/components/default/ItemTextComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

export const getItemRendererDefault: IItemRenderer = (id, index, item) => {
  if (item.component === 'text') {
    return <ItemTextComponent id={id} key={id} text={item.props.text} />;
  }
  return null;
};
