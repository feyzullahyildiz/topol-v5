import { IRootNode } from '@/types/RootNode';
import { getColumnRendererDefault } from '@/util/column-renderer/getColumnRendererDefault';
import { getItemRendererDefault } from '@/util/column-renderer/getItemRendererDefault';

import { RowComponent } from './RowComponent';
interface NodeRendererProps {
  nodes: IRootNode[];
}
export const RootPreview = ({ nodes }: NodeRendererProps) => {
  const rowList = nodes.filter((node) => node.type === 'row');
  const columnList = nodes.filter((node) => node.type === 'column');
  const itemList = nodes.filter((node) => node.type === 'item');
  const comps = rowList
    .map((node) => (
      <RowComponent
        key={node.id}
        id={node.id}
        type={node.type}
        columnIds={node.columnIds}
        columnList={columnList}
        itemList={itemList}
        columnRenderer={getColumnRendererDefault}
        itemRenderer={getItemRendererDefault}
      />
    ))
    .filter(Boolean);
  return <div className="flex max-w-[800px] flex-col">{comps}</div>;
};
