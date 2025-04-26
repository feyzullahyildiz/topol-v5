import { ColumnComponent } from '@/components/render/ColumnComponent';
import { IColumnRenderer } from '@/types/IColumnRenderer';

export const getColumnRendererDefault: IColumnRenderer = (
  id,
  index,
  column,
  itemRecord,
  itemRenderer
) => {
  return (
    <ColumnComponent
      key={id}
      id={id}
      itemIDs={column.itemIDs}
      type="column"
      itemRecord={itemRecord}
      itemRenderer={itemRenderer}
    />
  );
};
