import { IItemRenderer } from './IItemRenderer';
import { IRootItemRecord } from './IRoot';
import { IBaseColumn } from './node/IBaseColumn';

export type IColumnRenderer = (
  id: string,
  index: number,
  column: IBaseColumn,
  itemRecord: IRootItemRecord,
  itemRenderer: IItemRenderer
) => React.ReactNode | null;
