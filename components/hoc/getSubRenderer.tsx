import { ChildWidgetRef } from '@/lib/layout/util';
import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { SingleEditorRenderer } from '../editor/SingleEditorRenderer';
import { EmptyArea } from '../utility/EmptyArea';

export const getSingleNodeChildNodeFromId: SubRenderer = (id, childNodeList) => {
  if (id === null) {
    return <EmptyArea />;
    return null;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <EmptyArea />;
    return null;
  }
  return <SingleNodeRenderer node={node} childNodeList={childNodeList} />;
};
export const getSingleEditorChildNodeFromId: SubRenderer = (id, childNodeList) => {
  if (id === null) {
    return <EmptyArea />;
    return null;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <EmptyArea />;
  }
  return <SingleEditorRenderer node={node} childNodeList={childNodeList} />;
};

export type SubRenderer = (id: ChildWidgetRef, childNodeList: RootNode[]) => React.ReactNode | null;
