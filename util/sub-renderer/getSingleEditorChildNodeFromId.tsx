import { SingleNodeRendererDnd } from '@/components/render/SingleNodeRendererDnd';
import { EmptyArea } from '@/components/utility/EmptyAreaDefault';
import { EmptyAreaDnD } from '@/components/utility/EmptyAreaRenderer';
import { ISubRenderer } from '@/types/ISubRenderer';
export const getSingleEditorChildNodeFromId: ISubRenderer = (
  id,
  childNodeList,
  parentId,
  index
) => {
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
    return <EmptyAreaDnD parentId={parentId} index={index} />;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <EmptyArea />;
  }
  return (
    <SingleNodeRendererDnd
      node={node}
      childNodeList={childNodeList}
      index={index}
      parentId={parentId}
    />
  );
};
