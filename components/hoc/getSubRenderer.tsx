import { ChildWidgetRef } from '@/lib/layout/util';
import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { SingleEditorRenderer } from '../editor/SingleEditorRenderer';
import { EmptyArea } from '../utility/EmptyArea';
import { EmptyAreaRenderer } from '../editor/EmptyAreaRenderer';
export const getSingleNodeChildNodeFromId: SubRenderer = (id, childNodeList) => {
  if (id === null) {
    return null;
    return <div className="size-8 bg-red-500" />;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <div />;
    return null;
  }
  return <SingleNodeRenderer node={node} childNodeList={childNodeList} />;
};
export const getSingleEditorChildNodeFromId: SubRenderer = (id, childNodeList, parentId, index) => {
  if (id === null) {
    if (index === undefined) {
      // TODO bu senaryo olmaması lazım ama bilmiyoruz...
      console.error('HAYDA index undefined');
      return null;
    }
    if (parentId === undefined) {
      // TODO bu senaryo olmaması lazım ama bilmiyoruz...
      console.error('HAYDA parentId undefined');
      return null;
    }
    return <EmptyAreaRenderer parentId={parentId} index={index} />;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <EmptyArea />;
  }
  return (
    <SingleEditorRenderer
      node={node}
      childNodeList={childNodeList}
      index={index}
      parentId={parentId}
    />
  );
};

export type SubRenderer = (
  id: ChildWidgetRef,
  childNodeList: RootNode[],
  parentId?: string | undefined,
  index?: number | undefined
) => React.ReactNode | null;

// export type SubRenderer = SubRendererA | SubRendererB;

// type SubRendererA = (
//   id: null,
//   childNodeList: RootNode[],
//   index: number
// ) => React.ReactNode | null;
// type SubRendererB = (
//   id: string,
//   childNodeList: RootNode[],
// ) => React.ReactNode | null;
