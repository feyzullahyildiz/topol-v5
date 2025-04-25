import { BaseType } from './BaseType';

export interface IBase<T = BaseType> {
  id: string;
  type: T;
}
