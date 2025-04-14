import { IRootNode } from '@/types/RootNode';
import { ChildWidgetRef } from './ChildWidgetRef';

export type ISubRenderer = (
  id: ChildWidgetRef,
  childNodeList: IRootNode[],
  parentId?: string | undefined,
  index?: number | undefined
) => React.ReactNode | null;
