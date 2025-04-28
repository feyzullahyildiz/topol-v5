import { EnumItem } from './EnumItem';
import { IBase } from './IBase';

export interface IBaseItem<T, C = EnumItem> extends IBase<'item'> {
  props: T;
  component: C;
}
