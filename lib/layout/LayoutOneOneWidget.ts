import { LayoutOneOneComponentProps } from '@/components/layout/LayoutOneOneComoponent';
import { NodeType } from '../NodeType';
import { BaseNode } from '../BaseNode';

export interface LayoutOneOne extends BaseNode<LayoutOneOneComponentProps> {
  type: NodeType.LayoutOneOne;
}
