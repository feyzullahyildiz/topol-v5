import { IRoot } from '@/types/IRoot';
import { getColumnRendererDefault } from '@/util/column-renderer/getColumnRendererDefault';
import { getItemRendererDefault } from '@/util/column-renderer/getItemRendererDefault';

import { RowComponent } from './RowComponent';
interface NodeRendererProps {
  root: IRoot;
}
export const RootPreview = ({ root }: NodeRendererProps) => {
  const comps = root.rowOrder
    .map((rowId) => {
      const row = root.rows[rowId];
      return (
        <RowComponent
          key={row.id}
          id={row.id}
          type={row.type}
          columnIds={row.columnIds}
          columnRecord={root.columns}
          itemRecord={root.items}
          columnRenderer={getColumnRendererDefault}
          itemRenderer={getItemRendererDefault}
        />
      );
    })
    .filter(Boolean);
  return <div className="flex w-full max-w-[800px] flex-col">{comps}</div>;
};
