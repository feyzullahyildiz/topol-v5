import { IItemTextComponentProps } from '@/types/props/widget';

export const ItemTextComponent = ({ text }: IItemTextComponentProps) => {
  return <div className="flex-1 p-4">{text}</div>;
};
