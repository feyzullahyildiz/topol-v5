import { WidgetNodeTextComponent } from '@/components/default/WidgetNodeTextComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

export const getItemRendererDefault: IItemRenderer = (id, index, item) => {
  if (item.component === 'text') {
    return <WidgetNodeTextComponent text={item.props.text} />;
  }
  return null;
};
