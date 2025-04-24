import { EnumNodeType } from '@/types/EnumNodeType';
import { IRootNode } from '@/types/RootNode';
import { WidgetNodeTextComponent } from '../default/WidgetNodeTextComponent';
import { LayoutOneOneComponent } from '../default/LayoutNodeOneOneComponent';
import { ISubRenderer } from '@/types/ISubRenderer';

interface SingleNodeRendererDefaultProps {
  node: IRootNode;
  childNodeList: IRootNode[];
  subRenderer: ISubRenderer;
}
export const SingleNodeRendererDefault = ({
  node,
  childNodeList,
  subRenderer,
}: SingleNodeRendererDefaultProps) => {
  switch (node.type) {
    case EnumNodeType.WidgetText:
      return <WidgetNodeTextComponent key={node.id} {...node.props} />;
    case EnumNodeType.LayoutOneOne:
      return (
        <LayoutOneOneComponent
          key={node.id}
          id={node.id}
          {...node.props}
          childNodeList={childNodeList}
          subRenderer={subRenderer}
        />
      );
    default:
      return null;
  }
};
