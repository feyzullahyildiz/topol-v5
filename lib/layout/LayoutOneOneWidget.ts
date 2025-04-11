import { LayoutOneOneComponentProps } from '@/components/layout/LayoutOneOneComoponent';
import { EnumNodeType } from '../EnumNodeType';
import { BaseLayoutNode } from '../BaseNode';

export interface LayoutOneOne extends BaseLayoutNode<LayoutOneOneComponentProps> {
  type: EnumNodeType.LayoutOneOne;
}
