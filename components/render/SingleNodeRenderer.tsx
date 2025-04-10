import { NodeType } from '@/lib/NodeType';
import { RootNode } from '@/lib/RootNode';
import { WidgetTextComponent } from '../widget/WidgetTextComponent';
import { LayoutOneOneComponent } from '../layout/LayoutOneOneComoponent';
import { getSingleNodeChildNodeFromId, SubRenderer } from '../hoc/getSubRenderer';

interface SingleNodeRendererProps {
  node: RootNode;
  childNodeList: RootNode[];
  subRenderer?: SubRenderer;
}
export const SingleNodeRenderer = ({
  node,
  childNodeList,
  subRenderer = getSingleNodeChildNodeFromId,
}: SingleNodeRendererProps) => {
  switch (node.type) {
    case NodeType.WidgetText:
      return <WidgetTextComponent key={node.id} {...node.props} />;
    case NodeType.LayoutOneOne:
      return (
        <LayoutOneOneComponent
          key={node.id}
          {...node.props}
          childNodeList={childNodeList}
          subRenderer={subRenderer}
        />
      );
    default:
      return null;
  }
};
