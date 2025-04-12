import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { RootNode } from '@/lib/RootNode';
import { DragEndEvent } from '@dnd-kit/core';
import { BaseLayoutNode } from '@/lib/BaseNode';
import { ChildWidgetRef } from '@/lib/layout/util';

type EventNodePayload = {
  node: RootNode;
  parentId?: string | undefined;
  index?: number | undefined;
};
const nodesAtom = atomWithImmer<RootNode[]>([]);

type SetNodeFn = (updater: RootNode[] | ((draft: RootNode[]) => void)) => void;

export const useNodes = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
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
    if (overId && activeId) {
      setNodes(nodes => {
        const activeIndex = nodes.findIndex(node => node.id === from.id);
        const overIndex = nodes.findIndex(node => node.id === to.id);
        arrayMove(nodes, activeIndex, overIndex);
      });
      return;
    }
  };
  return { nodes, setNodes, onDragEnd };
};

function extract(event: DragEndEvent): [RootNode, RootNode] {
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
    setNodes(prev => {
      const parentToLayoutIndex = prev.findIndex(n => n.id === to.parentId);
      const parentFromLayoutIndex = prev.findIndex(n => n.id === from.parentId);
      const toLayout = prev[parentToLayoutIndex] as BaseLayoutNode<{
        children: ChildWidgetRef[];
      }>;
      const fromLayout = prev[parentFromLayoutIndex] as BaseLayoutNode<{
        children: ChildWidgetRef[];
      }>;

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
