import { Text } from '@react-email/components';

import { IItemTextComponentProps } from '@/types/props/item';

export const ItemTextComponent = ({ text }: IItemTextComponentProps) => {
  return <Text className="!m-0 p-4 text-sm break-all">{text}</Text>;
};
