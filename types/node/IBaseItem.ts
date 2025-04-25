import { ComponentType } from './ComponentType';
import { IBase } from './IBase';

export interface IBaseItem<T, C = ComponentType> extends IBase<'item'> {
  props: T;
  component: C;
}
