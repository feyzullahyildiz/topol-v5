import { DragOverlay, useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

import { IRootNode } from '@/types/RootNode';
import { getChildNodeRendererFromIdDnD } from '@/util/sub-renderer/getChildNodeRendererFromIdDnD';

import { SingleNodeRendererDefault } from './SingleNodeRendererDefault';
import { SingleNodeRendererDnD } from './SingleNodeRendererDnD_';
interface Props {
  node: IRootNode;
  childNodeList: IRootNode[];
  index?: number | undefined;
  parentId?: string | undefined;
}
export const SingleNodeDndProvider = ({ node, childNodeList, index, parentId }: Props) => {
  const {
    setNodeRef: setDraggableRef,
    listeners,
    attributes,
    transform,
    transition,
    isDragging,
    isSorting,
  } = useSortable({
    id: node.id,
    data: { node, index, parentId },
  });

  const {
    setNodeRef: setDroppableRef,
    // isOver,
    // over,
  } = useDroppable({
    id: node.id,
    data: { node, index },
  });
  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    // opacity: isDragging ? 0.5 : 1,
    // zIndex: isDragging ? 10 : undefined,
    // border: isOver ? '1px dashed red' : undefined,
  };
  return (
    <>
      <div ref={setDroppableRef}>
        <div ref={setDraggableRef} style={style} {...attributes} {...listeners}>
          <SingleNodeRendererDnD
            node={node}
            childNodeList={childNodeList}
            subRenderer={getChildNodeRendererFromIdDnD}
          />
        </div>
      </div>
      {isSorting && isDragging && (
        <DragOverlay>
          <div className="opacity-50">
            {/* Burası Default kalabilir, zaten overlayda çıkıyor sadece */}
            <SingleNodeRendererDefault
              node={node}
              childNodeList={childNodeList}
              subRenderer={getChildNodeRendererFromIdDnD}
            />
          </div>
        </DragOverlay>
      )}
    </>
  );
};
