import { SingleNodeRendererDefault } from '@/components/render/SingleNodeRendererDefault';
import { ISubRenderer } from '@/types/ISubRenderer';

export const getSingleNodeChildNodeFromId: ISubRenderer = (id, childNodeList) => {
  if (id === null) {
    return null;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <div />;
  }
  return <SingleNodeRendererDefault node={node} childNodeList={childNodeList} />;
};
