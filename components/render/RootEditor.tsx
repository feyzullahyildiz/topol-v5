import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import React, { useEffect } from 'react';

import { IRoot } from '@/types/IRoot';
import { getColumnRendererDnD } from '@/util/column-renderer/getColumnRendererDnD';
import { getItemRendererDnD } from '@/util/column-renderer/getItemRendererDnD';

import { EditorExtraContext } from './dnd/EditorExtraContext';
import { useNodes } from './dnd/useNodes';
import { DnD_RowComponent } from './DnD_RowComponent';

interface Props {
  initialRoot: IRoot;
  children?: (nodes: IRoot) => React.ReactNode;
  onNodesChange?: (nodes: IRoot) => void;
}
export const RootEditor = ({ initialRoot, children, onNodesChange }: Props) => {
  const { root, setRoot, onDragEnd, onDragStart } = useNodes();
  useEffect(() => {
    setRoot(initialRoot);
  }, [initialRoot, setRoot]);

  const comps = root.rowOrder
    .map((rowId, index) => {
      const row = root.rows[rowId];
      return (
        <DnD_RowComponent
          key={row.id}
          id={row.id}
          row={row}
          index={index}
          type={row.type}
          columnIds={row.columnIds}
          columnRecord={root.columns}
          itemRecord={root.items}
          columnRenderer={getColumnRendererDnD}
          itemRenderer={getItemRendererDnD}
        />
      );
    })
    .filter(Boolean);

  useEffect(() => {
    onNodesChange?.(root);
  }, [root, onNodesChange]);
  return (
    <>
      <EditorExtraContext.Provider value={{ root, setRoot }}>
        <div className="flex w-full max-w-[800px] flex-col">
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <Droppable droppableId="root" type="row">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {comps}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </EditorExtraContext.Provider>
      {children?.(root)}
    </>
  );
};
