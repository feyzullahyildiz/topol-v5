import { IItemRenderer } from './IItemRenderer';
import { IBaseColumn } from './node/IBaseColumn';
import { IRootItems } from './RootNode';

export type IColumnRenderer = (
  id: string,
  index: number,
  column: IBaseColumn,
  itemList: IRootItems[],
  itemRenderer: IItemRenderer
) => React.ReactNode | null;
