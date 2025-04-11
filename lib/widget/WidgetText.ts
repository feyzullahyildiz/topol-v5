import { EnumNodeType } from '../EnumNodeType';
import { BaseWidgetNode } from '../BaseNode';
import { WidgetTextComponentProps } from '@/components/widget/WidgetTextComponent';

export interface WidgetText extends BaseWidgetNode<WidgetTextComponentProps> {
  type: EnumNodeType.WidgetText;
}
