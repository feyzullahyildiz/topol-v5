import { DropResult } from '@hello-pangea/dnd';
import { useCallback } from 'react';

import { useRootStore } from '@/hooks/useRootStore';

export const useNodes = () => {
  const [root, setRoot] = useRootStore();

  const onDragStart = useCallback(() => {
    document.body.style.cursor = 'grabbing';
  }, []);
  const onDragEnd = useCallback(
    (result: DropResult) => {
      document.body.style.cursor = 'inherit';

      const { destination, source, draggableId, type } = result;

      // If no destination or dropped in same position, do nothing
      if (
        !destination ||
        (destination.droppableId === source.droppableId && destination.index === source.index)
      ) {
        return;
      }

      if (type === 'row') {
        // Handle row reordering
        setRoot((draft) => {
          const newRowOrder = Array.from(draft.rowOrder);
          newRowOrder.splice(source.index, 1);
          newRowOrder.splice(destination.index, 0, draggableId);
          draft.rowOrder = newRowOrder;
        });
        return;
      }

      if (type === 'column') {
        // Handle item reordering between columns
        setRoot((prev) => {
          const sourceColumnId = source.droppableId;
          const sourceColumn = prev.columns[sourceColumnId];

          const index = sourceColumn.itemIDs.indexOf(draggableId);
          sourceColumn.itemIDs.splice(index, 1);

          const destColumnId = destination.droppableId;
          const destColumn = prev.columns[destColumnId];

          destColumn.itemIDs.splice(destination.index, 0, draggableId);

          // TODO Bunlar belki zorunlu değildir ama deniyoruz.
          prev.rows = { ...prev.rows };
          prev.columns = { ...prev.columns };
          prev.items = { ...prev.items };
          return prev;
        });
        return;
      }
    },
    [setRoot]
  );

  return { root, setRoot, onDragEnd, onDragStart };
};
