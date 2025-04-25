import { IRootItems } from './RootNode';

export type IItemRenderer = (id: string, index: number, item: IRootItems) => React.ReactNode | null;
