import { SubRenderer } from '@/lib/SubRenderer';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';

export const getSingleNodeChildNodeFromId: SubRenderer = (id, childNodeList) => {
  if (id === null) {
    return null;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return <div />;
  }
  return <SingleNodeRenderer node={node} childNodeList={childNodeList} />;
};
