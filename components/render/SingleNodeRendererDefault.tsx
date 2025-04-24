import { EnumNodeType } from '@/types/EnumNodeType';
import { ISubRenderer } from '@/types/ISubRenderer';
import { IRootNode } from '@/types/RootNode';

import { LayoutOneOneComponent } from '../default/LayoutNodeOneOneComponent';
import { WidgetNodeTextComponent } from '../default/WidgetNodeTextComponent';

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
