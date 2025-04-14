import { EnumNodeType } from '../EnumNodeType';
import { ILayoutOneOneComponentProps } from '../props/layout';
import { IBaseLayoutNode } from './IBaseNode';

export interface ILayoutNodeOneOne extends IBaseLayoutNode<ILayoutOneOneComponentProps> {
  type: EnumNodeType.LayoutOneOne;
}
