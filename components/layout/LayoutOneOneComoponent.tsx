'use server';
import { ChildWidgetRef } from '@/lib/layout/util';
import { RootNode } from '@/lib/RootNode';
import { Column, Row } from '@react-email/components';
import { SubRenderer } from '../hoc/getSubRenderer';
export interface LayoutOneOneComponentProps {
  children: [ChildWidgetRef, ChildWidgetRef];
}
interface Props extends LayoutOneOneComponentProps {
  childNodeList: RootNode[];
  subRenderer: SubRenderer;
}
export const LayoutOneOneComponent = ({ children, childNodeList, subRenderer }: Props) => {
  return (
    <Row className="text-black">
      <Column>{subRenderer(children[0], childNodeList)}</Column>
      <Column>{subRenderer(children[1], childNodeList)}</Column>
    </Row>
  );
};
