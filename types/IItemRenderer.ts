import { IRootItems } from './IRoot';

export type IItemRenderer = (id: string, index: number, item: IRootItems) => React.ReactNode | null;
