import { IRootNode } from '@/types/RootNode';
import { ILayoutOneOneComponentProps } from '@/types/props/layout';
import { ISubRenderer } from '@/types/ISubRenderer';
interface Props extends ILayoutOneOneComponentProps {
  id: string;
  childNodeList: IRootNode[];
  subRenderer: ISubRenderer;
}
export const LayoutOneOneComponent = ({ id, children, childNodeList, subRenderer }: Props) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <div className="flex-1">{subRenderer(children[0], childNodeList, id, 0)}</div>
      <div className="flex-1">{subRenderer(children[1], childNodeList, id, 1)}</div>
    </div>
  );
};
