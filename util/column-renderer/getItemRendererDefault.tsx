import { ItemTextComponent } from '@/components/default/ItemTextComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

export const getItemRendererDefault: IItemRenderer = (id, index, item) => {
  if (item.component === 'text') {
    return <ItemTextComponent text={item.props.text} />;
  }
  return null;
};
