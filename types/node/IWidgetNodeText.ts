import { EnumNodeType } from '../EnumNodeType';
import { IWidgetTextComponentProps } from '../props/widget';
import { IBaseWidgetNode } from './IBaseNode';
export interface IWidgetNodeText extends IBaseWidgetNode<IWidgetTextComponentProps> {
  type: EnumNodeType.WidgetText;
}
