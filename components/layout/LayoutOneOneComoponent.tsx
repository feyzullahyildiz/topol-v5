'use server';
import { ChildWidgetRef } from '@/lib/layout/util';
import { RootNode } from '@/lib/RootNode';
import { Column, Row } from '@react-email/components';
import { getChildNodeFromId } from '../render/SingleNodeRenderer';

export interface LayoutOneOneComponentProps {
  children: [ChildWidgetRef, ChildWidgetRef];
}
interface Props extends LayoutOneOneComponentProps {
  childNodeList: RootNode[];
}
export const LayoutOneOneComponent = ({ children, childNodeList }: Props) => {
  return (
    <Row className="text-black  flex">
      <Column className="flex-1">{getChildNodeFromId(children[0], childNodeList)}</Column>
      <Column className="flex-1">{getChildNodeFromId(children[1], childNodeList)}</Column>
    </Row>
  );
};
