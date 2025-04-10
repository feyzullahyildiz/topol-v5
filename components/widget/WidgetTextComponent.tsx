'use server';

export interface WidgetTextComponentProps {
  text: string;
}
export const WidgetTextComponent = ({ text }: WidgetTextComponentProps) => {
  return <div className="text-black bg-white p-4 flex-1">{text}</div>;
};
