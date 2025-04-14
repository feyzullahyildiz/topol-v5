import { EnumNodeType } from '../EnumNodeType';
import { IBaseWidgetNode } from './IBaseNode';
import { IWidgetTextComponentProps } from '../props/widget';
export interface IWidgetNodeText extends IBaseWidgetNode<IWidgetTextComponentProps> {
  type: EnumNodeType.WidgetText;
}
