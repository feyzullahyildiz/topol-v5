'use client';
import { Droppable } from '@hello-pangea/dnd';
import React, { useEffect } from 'react';

import { useRootStore } from '@/hooks/useRootStore';
import { IRoot } from '@/types/IRoot';
import { cn } from '@/util/cn';
import { getColumnRendererDnD } from '@/util/column-renderer/getColumnRendererDnD';
import { getItemRendererDnD } from '@/util/column-renderer/getItemRendererDnD';

import { DnD_RowComponent } from './DnD_RowComponent';

interface Props {
  className?: string;
  children?: (nodes: IRoot) => React.ReactNode;
  onNodesChange?: (nodes: IRoot) => void;
}
export const RootEditor = ({ children, onNodesChange, className }: Props) => {
  const [root] = useRootStore();

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
      <div className={cn('w-full max-w-[800px]', className)}>
        <Droppable droppableId="root" type="row">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {comps}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      {children?.(root)}
    </>
  );
};
