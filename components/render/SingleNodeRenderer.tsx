import { NodeType } from '@/lib/NodeType';
import { RootNode } from '@/lib/RootNode';
import { WidgetTextComponent } from '../widget/WidgetTextComponent';
import { LayoutOneOneComponent } from '../layout/LayoutOneOneComoponent';
import { ChildWidgetRef } from '@/lib/layout/util';

interface SingleNodeRendererProps {
  node: RootNode;
  childNodeList: RootNode[];
}
export const SingleNodeRenderer = ({ node, childNodeList }: SingleNodeRendererProps) => {
  switch (node.type) {
    case NodeType.WidgetText:
      return <WidgetTextComponent key={node.id} {...node.props} />;
    case NodeType.LayoutOneOne:
      return <LayoutOneOneComponent key={node.id} {...node.props} childNodeList={childNodeList} />;
    default:
      return null;
  }
};

export const getChildNodeFromId = (id: ChildWidgetRef, childNodeList: RootNode[]) => {
  if (id === null) {
    return null;
  }
  const node = childNodeList.find(node => node.id === id) || null;

  if (!node) {
    return null;
  }
  return <SingleNodeRenderer node={node} childNodeList={childNodeList} />;
};
