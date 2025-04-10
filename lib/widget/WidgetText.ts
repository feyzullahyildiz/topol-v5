import { NodeType } from '../NodeType';
import { BaseNode } from '../BaseNode';
import { WidgetTextComponentProps } from '@/components/widget/WidgetTextComponent';

export interface WidgetText extends BaseNode<WidgetTextComponentProps> {
  type: NodeType.WidgetText;
}
