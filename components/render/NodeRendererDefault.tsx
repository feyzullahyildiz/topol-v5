import { IRootNode } from '@/types/RootNode';
import { SingleNodeRendererDefault } from './SingleNodeRendererDefault';
import { getChildNodeRendererFromIdDefault } from '@/util/sub-renderer/getChildNodeRendererFromIdDefault';
interface NodeRendererProps {
  nodes: IRootNode[];
}
export const NodeRendererDefault = ({ nodes }: NodeRendererProps) => {
  const rootNodes = nodes.filter(node => node.atRoot);
  const childNodes = nodes.filter(node => !node.atRoot);
  const comps = rootNodes
    .map(node => (
      <SingleNodeRendererDefault
        key={node.id}
        node={node}
        childNodeList={childNodes}
        subRenderer={getChildNodeRendererFromIdDefault}
      />
    ))
    .filter(Boolean);
  return <div className="flex max-w-[800px] flex-col">{comps}</div>;
};
