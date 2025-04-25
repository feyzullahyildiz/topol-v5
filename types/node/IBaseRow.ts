import { IBase } from './IBase';

export interface IBaseRow extends IBase<'row'> {
  columnIds: string[];
}
