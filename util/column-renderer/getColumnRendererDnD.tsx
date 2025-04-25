import { DnD_ColumnComponent } from '@/components/render/DnD_ColumnComponent';
import { IColumnRenderer } from '@/types/IColumnRenderer';

export const getColumnRendererDnD: IColumnRenderer = (id, index, column, items, itemRenderer) => {
  return (
    <DnD_ColumnComponent
      key={id}
      id={id}
      index={index}
      itemIDs={column.itemIDs}
      type="column"
      items={items}
      itemRenderer={itemRenderer}
    />
  );
};
