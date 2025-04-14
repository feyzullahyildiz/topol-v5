import { useCallback } from 'react';
import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getSingleEditorChildNodeFromId } from '../hoc/getSubRenderer';
import { useExtra } from './extra/useExtra';
import { cn } from '@/util/cn';
interface SingleEditorRendererProps {
  node: RootNode;
  childNodeList: RootNode[];
  index?: number | undefined;
  parentId?: string | undefined;
}
export const SingleEditorRenderer = ({
  node,
  childNodeList,
  index,
  parentId,
}: SingleEditorRendererProps) => {
  const { selectedNode, onMouseEnter, onMouseLeave, onDelete } = useExtra();
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

  const isLayout = node.mode === 'Layout';
  const {
    setNodeRef: setDroppableRef,
    isOver,
    // over,
  } = useDroppable({
    id: node.id,
    data: { node, index },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : undefined,
    // border: isDragging ? '2px dashed red' : undefined,
  };

  const onMouseEnterHandler = useCallback(() => {
    onMouseEnter(node.id);
  }, [onMouseEnter, node.id]);
  const onMouseLeaveHandler = useCallback(() => {
    onMouseLeave(node.id);
  }, [onMouseLeave, node.id]);
  return (
    <>
      {/* Bu son relative ilginç oldu. En parent'ı aydınlatıyordu.  */}
      <div className="relative w-full">
        <div
          className={cn(
            'absolute top-0 right-0 bottom-0 left-0',
            isSorting && 'pointer-events-none opacity-0'
          )}
          onMouseEnter={onMouseEnterHandler}
        >
          {selectedNode === node.id && (
            <div
              onMouseLeave={onMouseLeaveHandler}
              className={cn(
                'absolute top-0 right-0 bottom-0 left-0',
                'border-2 border-solid',
                isLayout ? 'border-violet-600' : 'border-green-500'
              )}
            >
              <div
                className={cn(
                  'pointer-events-auto',
                  // 'top-0 bottom-0',
                  // '-top-1 -bottom-1',
                  '-top-[2px] -bottom-[2px]',
                  'absolute left-0 -translate-x-full',
                  'flex flex-col justify-between'
                )}
              >
                <div
                  {...listeners}
                  className={cn(
                    // 'pointer-events-auto',
                    'size-6 bg-green-500',
                    'flex items-center justify-center',
                    'cursor-pointer'
                  )}
                >
                  +
                </div>
                <div
                  onClick={() => onDelete(node.id)}
                  className={cn(
                    'size-6 bg-red-500',
                    'flex items-center justify-center',
                    'cursor-pointer'
                  )}
                >
                  x
                </div>
              </div>
            </div>
          )}
        </div>

        <div ref={setDroppableRef}>
          <div ref={setDraggableRef} style={style} {...attributes}>
            <SingleNodeRenderer
              node={node}
              childNodeList={childNodeList}
              subRenderer={getSingleEditorChildNodeFromId}
            />
          </div>
          {isOver && (
            <div className="pointer-events-none absolute inset-0 top-0 right-0 bottom-0 left-0 z-10 border-2 border-dashed border-red-500" />
          )}
        </div>
      </div>
    </>
  );
};
