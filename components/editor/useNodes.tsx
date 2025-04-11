import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { RootNode } from '@/lib/RootNode';
import { DragEndEvent } from '@dnd-kit/core';

const nodesAtom = atomWithImmer<RootNode[]>([]);

export const useNodes = () => {
  const [nodes, setNodes] = useAtom(nodesAtom);
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const activeId = active.id;
    const overId = over?.id;
    if (activeId === overId) {
      return;
    }
    if (overId && activeId) {
      console.log('nodes HAYDA');
      setNodes(nodes => {
        const activeIndex = nodes.findIndex(node => node.id === activeId);
        const overIndex = nodes.findIndex(node => node.id === overId);
        arrayMove(nodes, activeIndex, overIndex);
      });
      return;
    }
    // console.log('event', event);
    // if (active.id !== over.id) {
    //   setNodes(nodes => move(nodes, active.id, over.id));
    // }
  };
  return { nodes, setNodes, onDragEnd };
};

function arrayMove<T>(arr: T[], oldIndex: number, newIndex: number) {
  const temp = arr[oldIndex];
  arr[oldIndex] = arr[newIndex];
  arr[newIndex] = temp;
}
