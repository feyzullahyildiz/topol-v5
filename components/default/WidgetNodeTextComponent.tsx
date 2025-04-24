import { IWidgetTextComponentProps } from '@/types/props/widget';

export const WidgetNodeTextComponent = ({ text }: IWidgetTextComponentProps) => {
  return <div className="flex-1 p-4">{text}</div>;
};
