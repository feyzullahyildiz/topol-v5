import { DragEndEvent } from '@dnd-kit/core';
import { atom, useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

import { ChildWidgetRef } from '@/types/ChildWidgetRef';
import { IBaseLayoutNode } from '@/types/node/IBaseNode';
import { IRootNode } from '@/types/RootNode';
type AnyLayoutNode = IBaseLayoutNode<{
  children: ChildWidgetRef[];
}>;

type EventNodePayload = {
  node: IRootNode;
  parentId?: string | undefined;
  index?: number | undefined;
};
const nodesAtom = atomWithImmer<IRootNode[]>([]);
const selectedNodeAtome = atom<string | undefined>(undefined);

type SetNodeFn = (updater: IRootNode[] | ((draft: IRootNode[]) => void)) => void;

export const useNodes = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const [selectedNode, setSelectedNode] = useAtom(selectedNodeAtome);
  const onDragEnd = (event: DragEndEvent) => {
    const isEmptyArea = event.over?.data.current?.isEmptyArea;
    if (isEmptyArea) {
      // console.log('isEmptyArea', active, over);
      moveToEmptyArea(event, setNodes);
      return;
    }

    const [from, to] = extract(event);
    // console.log('from, to', from, to);

    const activeId = from.id;
    const overId = to.id;
    if (activeId === overId) {
      return;
    }
    if (!from.atRoot && !to.atRoot) {
      setNodes((nodes) => {
        const fromParentObj = getParent(nodes, from.id);
        const toParentObj = getParent(nodes, to.id);
        if (!fromParentObj || !toParentObj) {
          return;
        }
        const { parent: fromParent, indexAtParent: fromParentIndex } = fromParentObj;
        const { parent: toParent, indexAtParent: toParentIndex } = toParentObj;

        // console.log('fromParent', fromParent);
        // console.log('toParent', toParent);

        fromParent.props.children[fromParentIndex] = to.id;
        toParent.props.children[toParentIndex] = from.id;
      });

      return;
    }
    if (overId && activeId) {
      setNodes((nodes) => {
        const activeIndex = nodes.findIndex((node) => node.id === from.id);
        const overIndex = nodes.findIndex((node) => node.id === to.id);
        arrayMove(nodes, activeIndex, overIndex);
      });
      return;
    }
  };
  const onMouseEnter = (id: string) => {
    // console.log('onMouseEnter', id);
    setSelectedNode(id);
  };
  const onMouseLeave = (id: string) => {
    // TODO find parent id
    // console.log('onMouseLeave', id);
    // TODO: burayı kaldırdık, belki lazım olabilir.
    // setSelectedNode(undefined);
    const node = nodes.find((node) => node.id === id);
    if (node?.mode === 'Layout') {
      setSelectedNode(undefined);
      return;
    }

    const parent = nodes.find((n) => {
      if (n.mode === 'Widget') {
        return false;
      }
      return n.props.children.includes(id);
    });
    if (parent) {
      setSelectedNode(parent.id);
    }
  };
  const onDelete = () => {
    // TODO delete this
    // console.log('onDelete', id);
  };
  return { nodes, setNodes, onDragEnd, onMouseEnter, onMouseLeave, selectedNode, onDelete };
};

function extract(event: DragEndEvent): [IRootNode, IRootNode] {
  const { active, over } = event;
  // TODO: .node olmayabilir
  return [active.data.current!.node, over!.data.current!.node];
}
function extractAsEmptyArea(
  event: DragEndEvent
): [EventNodePayload, { parentId: string; index: number }] {
  const { active, over } = event;
  const to = over!.data.current as { parentId: string; index: number };
  return [active.data.current as EventNodePayload, to];
}
function arrayMove<T>(arr: T[], oldIndex: number, newIndex: number) {
  const temp = arr[oldIndex];
  arr[oldIndex] = arr[newIndex];
  arr[newIndex] = temp;
}
function moveToEmptyArea(event: DragEndEvent, setNodes: SetNodeFn) {
  const [from, to] = extractAsEmptyArea(event);
  // console.log('moveToEmptyArea');
  // console.log('from, to', from, to);

  if (to.parentId) {
    // layoutun içine giriyor.
    setNodes((prev) => {
      const parentToLayoutIndex = prev.findIndex((n) => n.id === to.parentId);
      const parentFromLayoutIndex = prev.findIndex((n) => n.id === from.parentId);
      const toLayout = prev[parentToLayoutIndex] as AnyLayoutNode;
      const fromLayout = prev[parentFromLayoutIndex] as AnyLayoutNode;

      // if (fromLayout.atRoot) {
      //   // TODO
      //   return;
      // }
      // console.log('toLayout', JSON.parse(JSON.stringify(toLayout)));
      // console.log('fromLayout', JSON.parse(JSON.stringify(fromLayout)));
      if (!toLayout) {
        console.log('skip');
        return;
      }
      if (!fromLayout) {
        console.log('skip');
        return;
      }
      toLayout.props.children[to.index] = from.node.id;
      fromLayout.props.children[from.index!] = null;

      // const parentIndex = prev.findIndex(node => node.id === from.parentId);
      // prev.splice(parentIndex, 0, from);
    });
    return;
  }
}

function getParent(
  nodes: IRootNode[],
  id: string
): null | { parent: AnyLayoutNode; indexAtParent: number } {
  const node = nodes.find((n) => {
    if (n.mode === 'Widget') {
      return false;
    }
    return n.props.children.includes(id);
  }) as AnyLayoutNode | undefined;
  if (!node) {
    return null;
  }

  return { parent: node as AnyLayoutNode, indexAtParent: node.props.children.indexOf(id) };
}
