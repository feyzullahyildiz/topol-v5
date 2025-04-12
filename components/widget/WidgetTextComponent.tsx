'use server';

export interface WidgetTextComponentProps {
  text: string;
}
export const WidgetTextComponent = ({ text }: WidgetTextComponentProps) => {
  return <div className="flex-1 p-4">{text}</div>;
};
