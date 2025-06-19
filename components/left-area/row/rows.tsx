import { creatBaseRow } from './createBaseRow';

const Column = ({ children }: { children?: React.ReactNode }) => (
  <div className="text-accent-foreground flex min-h-24 flex-1 flex-col items-center justify-center border-2 border-gray-400 text-sm">
    <div>Column</div>
    <div>{children}</div>
  </div>
);
export const Row_1_Column_Component = creatBaseRow(
  'ROW_1_COLUMN',
  0,
  <div className="flex gap-2">
    <Column>1</Column>
  </div>
);
export const Row_2_Column_Component = creatBaseRow(
  'ROW_2_COLUMN',
  1,
  <div className="flex gap-2">
    <Column>1</Column>
    <Column>2</Column>
  </div>
);
export const Row_3_Column_Component = creatBaseRow(
  'ROW_3_COLUMN',
  2,
  <div className="flex gap-2">
    <Column>1</Column>
    <Column>2</Column>
    <Column>3</Column>
  </div>
);
