import { EnumNodeType } from '@/lib/EnumNodeType';
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
    case EnumNodeType.WidgetText:
      return <WidgetTextComponent key={node.id} {...node.props} />;
    case EnumNodeType.LayoutOneOne:
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
