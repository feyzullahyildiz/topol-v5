import { DropResult } from '@hello-pangea/dnd';
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useRootStore } from '@/hooks/useRootStore';
import { IRootItems } from '@/types/IRoot';
import { EnumRowIDs } from '@/types/node/EnumDraggableIDs';
import { IBaseColumn } from '@/types/node/IBaseColumn';
import { IBaseRow } from '@/types/node/IBaseRow';

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
        if (draggableId.startsWith('ROW_')) {
          const res = createLayaoutFromId(draggableId as EnumRowIDs);
          if (!res) {
            return;
          }
          console.log('res', res);
          setRoot((prev) => {
            prev.rows[res.row.id] = res.row;
            prev.columns = { ...prev.columns, ...res.columns };
            prev.rowOrder.splice(destination.index, 0, res.row.id);
          });
          return;
        }
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

  const addNode = useCallback(
    (id: string, index: number, type: string) => {
      if (type === 'text') {
        setRoot((prev) => {
          const item = {
            id: uuidv4(),
            component: 'text',
            props: {
              text: 'Yeni Metin',
            },
            type: 'item',
          } as IRootItems;
          prev.items[item.id] = item;
          prev.columns[id].itemIDs.splice(index, 0, item.id);
          prev.columns[id].itemIDs[index] = item.id;
        });
      }
    },
    [setRoot]
  );
  return { root, setRoot, onDragEnd, onDragStart, addNode };
};

export type IUseNodes = ReturnType<typeof useNodes>;

function createLayaoutFromId(id: EnumRowIDs) {
  if (id === 'ROW_1_COLUMN') {
    const c1 = uuidv4();
    return {
      row: {
        id: uuidv4(),
        type: 'row',
        columnIds: [c1],
      } as IBaseRow,
      columns: {
        [c1]: {
          id: c1,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
      },
    };
  }
  if (id === 'ROW_2_COLUMN') {
    const c1 = uuidv4();
    const c2 = uuidv4();
    return {
      row: {
        id: uuidv4(),
        type: 'row',
        columnIds: [c1, c2],
      } as IBaseRow,
      columns: {
        [c1]: {
          id: c1,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
        [c2]: {
          id: c2,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
      },
    };
  }
  if (id === 'ROW_3_COLUMN') {
    const c1 = uuidv4();
    const c2 = uuidv4();
    const c3 = uuidv4();
    return {
      row: {
        id: uuidv4(),
        type: 'row',
        columnIds: [c1, c2, c3],
      } as IBaseRow,
      columns: {
        [c1]: {
          id: c1,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
        [c2]: {
          id: c2,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
        [c3]: {
          id: c3,
          type: 'column',
          itemIDs: [],
        } as IBaseColumn,
      },
    };
  }
  return null;
}
