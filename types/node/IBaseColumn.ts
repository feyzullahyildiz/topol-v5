import { IBase } from './IBase';

export interface IBaseColumn extends IBase<'column'> {
  itemIDs: string[];
}
