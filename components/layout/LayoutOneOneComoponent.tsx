'use server';
import { ChildWidgetRef } from '@/lib/layout/util';
import { RootNode } from '@/lib/RootNode';
import { Column, Row } from '@react-email/components';
import { SubRenderer } from '../hoc/getSubRenderer';
export interface LayoutOneOneComponentProps {
  children: [ChildWidgetRef, ChildWidgetRef];
}
interface Props extends LayoutOneOneComponentProps {
  id: string;
  childNodeList: RootNode[];
  subRenderer: SubRenderer;
}
export const LayoutOneOneComponent = ({ id, children, childNodeList, subRenderer }: Props) => {
  return (
    <div className="flex">
      <div className="flex-1">{subRenderer(children[0], childNodeList, id, 0)}</div>
      <div className="flex-1">{subRenderer(children[1], childNodeList, id, 1)}</div>
    </div>
  );
  return (
    <Row>
      <Column>{subRenderer(children[0], childNodeList, id, 0)}</Column>
      <Column>{subRenderer(children[1], childNodeList, id, 1)}</Column>
    </Row>
  );
};
