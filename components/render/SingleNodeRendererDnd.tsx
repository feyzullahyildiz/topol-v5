import { EnumNodeType } from '@/types/EnumNodeType';
import { ISubRenderer } from '@/types/ISubRenderer';
import { IRootNode } from '@/types/RootNode';

import { WidgetNodeTextComponent } from '../default/WidgetNodeTextComponent';
import { DnD_LayoutOneOneComponent } from '../dnd/DnD_LayoutNodeOneOneComponent';

interface SingleNodeRendererDefaultProps {
  node: IRootNode;
  childNodeList: IRootNode[];
  subRenderer: ISubRenderer;
}
export const SingleNodeRendererDnD = ({
  node,
  childNodeList,
  subRenderer,
}: SingleNodeRendererDefaultProps) => {
  switch (node.type) {
    case EnumNodeType.WidgetText:
      return <WidgetNodeTextComponent key={node.id} {...node.props} />;
    case EnumNodeType.LayoutOneOne:
      return (
        <DnD_LayoutOneOneComponent
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
