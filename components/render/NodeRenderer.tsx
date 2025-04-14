import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from './SingleNodeRenderer';

interface NodeRendererProps {
  nodes: RootNode[];
}
export const NodeRenderer = ({ nodes }: NodeRendererProps) => {
  const rootNodes = nodes.filter(node => node.atRoot);
  const childNodes = nodes.filter(node => !node.atRoot);
  const comps = rootNodes
    .map(node => <SingleNodeRenderer key={node.id} node={node} childNodeList={childNodes} />)
    .filter(Boolean);
  return <div className="flex flex-col gap-4">{comps}</div>;
};
