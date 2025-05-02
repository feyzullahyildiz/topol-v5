import { DnD_ItemImageComponent } from '@/components/dnd/DnD_ItemImageComponent';
import { DnD_ItemTextComponent } from '@/components/dnd/DnD_ItemTextComponent';
import { DnD_ItemComponent } from '@/components/render/DnD_ItemComponent';
import { IItemRenderer } from '@/types/IItemRenderer';

const componentSelector: IItemRenderer = (id, index, item) => {
  if (item.component === 'text') {
    return <DnD_ItemTextComponent id={id} key={id} text={item.props.text} />;
  }
  if (item.component === 'image') {
    return <DnD_ItemImageComponent id={id} key={id} src={item.props.src} />;
  }
  return null;
};

export const getItemRendererDnD: IItemRenderer = (id, index, item) => {
  return (
    <DnD_ItemComponent
      id={id}
      key={id}
      index={index}
      item={item}
      itemRenderer={componentSelector}
    />
  );
};
