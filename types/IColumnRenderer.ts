import { IItemRenderer } from './IItemRenderer';
import { IBaseColumn } from './node/IBaseColumn';
import { IRootItemRecord } from './RootNode';

export type IColumnRenderer = (
  id: string,
  index: number,
  column: IBaseColumn,
  itemRecord: IRootItemRecord,
  itemRenderer: IItemRenderer
) => React.ReactNode | null;
