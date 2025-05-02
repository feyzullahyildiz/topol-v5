import { Section } from '@react-email/components';

import { cn } from '@/lib/utils';
import { IRoot } from '@/types/IRoot';
import { getColumnRendererDefault } from '@/util/column-renderer/getColumnRendererDefault';
import { getItemRendererDefault } from '@/util/column-renderer/getItemRendererDefault';

import { RowComponent } from '../default/RowComponent';
interface NodeRendererProps {
  root: IRoot;
  className?: string;
}
export const RootPreview = ({ root, className }: NodeRendererProps) => {
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
  return <Section className={cn('w-full max-w-[800px]', className)}>{comps}</Section>;
};
