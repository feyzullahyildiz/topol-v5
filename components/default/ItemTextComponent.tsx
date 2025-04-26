import { IItemTextComponentProps } from '@/types/props/item';

export const ItemTextComponent = ({ text }: IItemTextComponentProps) => {
  return <div className="flex-1 p-4">{text}</div>;
};
