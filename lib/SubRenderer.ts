import { ChildWidgetRef } from './layout/util';
import { RootNode } from './RootNode';

export type SubRenderer = (
  id: ChildWidgetRef,
  childNodeList: RootNode[],
  parentId?: string | undefined,
  index?: number | undefined
) => React.ReactNode | null;
