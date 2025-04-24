import { useDroppable } from '@dnd-kit/core';
import React from 'react';

import { EmptyArea } from './EmptyAreaDefault';

interface Props {
  parentId: string;
  index: number;
}
export const EmptyAreaDnD = ({ parentId, index }: Props) => {
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: `${parentId}-${index}`,
    data: {
      isEmptyArea: true,
      parentId,
      index,
    },
  });
  const style = {
    border: isOver ? '2px dashed red' : undefined,
  };

  return (
    <>
      <div ref={setDroppableRef} style={style}>
        <EmptyArea />
      </div>
    </>
  );
};
