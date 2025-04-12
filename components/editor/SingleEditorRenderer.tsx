import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { useDraggable, useDroppable } from '@dnd-kit/core';

import { CSS } from '@dnd-kit/utilities';
import { getSingleEditorChildNodeFromId } from '../hoc/getSubRenderer';
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
  return (
    <>
      {/* Bu son relative ilginç oldu. En parent'ı aydınlatıyordu.  */}
      <div className="relative w-full">
        <div ref={setDroppableRef}>
          <div ref={setDraggableRef} style={style} {...listeners} {...attributes}>
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
