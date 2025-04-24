import { SortableContext } from '@dnd-kit/sortable';

import { ISubRenderer } from '@/types/ISubRenderer';
import { ILayoutOneOneComponentProps } from '@/types/props/layout';
import { IRootNode } from '@/types/RootNode';
interface Props extends ILayoutOneOneComponentProps {
  id: string;
  childNodeList: IRootNode[];
  subRenderer: ISubRenderer;
}
export const DnD_LayoutOneOneComponent = ({ id, children, childNodeList, subRenderer }: Props) => {
  return (
    <div className="flex items-center gap-4 p-2">
      <SortableContext items={[`${id}-0`, `${id}-1`]}>
        <div className="flex-1">{subRenderer(children[0], childNodeList, id, 0)}</div>
        <div className="flex-1">{subRenderer(children[1], childNodeList, id, 1)}</div>
      </SortableContext>
    </div>
  );
};
