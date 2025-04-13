import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { useDraggable, useDroppable } from '@dnd-kit/core';

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
  // Configure draggable
  //   console.log('node.type', node.type);
  const {
    setNodeRef: setDraggableRef,
    listeners,
    attributes,
    transform,
    isDragging,
  } = useDraggable({
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
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : undefined,
    // border: isDragging ? '2px dashed red' : undefined,
  };

  //   const onMouseEnter = () => {
  //     console.log('onMouseEnter');
  //   };
  //   const onMouseLeave = () => {
  //     console.log('onMouseLeave');
  //   };
  //   if (isDragging) {
  //     console.log('isDragging', node.id, node.type);
  //   }
  const onMouseEnterHandler = () => {
    onMouseEnter(node.id);
  };
  const onMouseLeaveHandler = () => {
    onMouseLeave(node.id);
  };
  return (
    <>
      {/* Bu son relative ilginç oldu. En parent'ı aydınlatıyordu.  */}
      <div
        className="relative w-full"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
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
        {selectedNode === node.id && !isDragging && (
          <div
            className={cn(
              'pointer-events-none absolute inset-0 -top-2 -right-2 -bottom-2 -left-2 z-10',
              'border-2 border-solid',
              isLayout ? 'border-violet-600' : 'border-green-500'
            )}
          >
            <div
              {...listeners}
              className={cn(
                'pointer-events-auto',
                'absolute top-0 left-0 -mx-1 size-6 -translate-x-full bg-green-500',
                'flex items-center justify-center',
                'cursor-pointer'
              )}
            >
              +
            </div>
            <div
              onClick={() => onDelete(node.id)}
              className={cn(
                'pointer-events-auto',
                'absolute bottom-0 left-0 -mx-1 size-6 -translate-x-full bg-red-500',
                'flex items-center justify-center',
                'cursor-pointer'
              )}
            >
              x
            </div>
          </div>
        )}
      </div>
    </>
  );
};
