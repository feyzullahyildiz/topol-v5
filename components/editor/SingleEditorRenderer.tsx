import { RootNode } from '@/lib/RootNode';
import { SingleNodeRenderer } from '../render/SingleNodeRenderer';
import { useDraggable, useDroppable } from '@dnd-kit/core';

import { CSS } from '@dnd-kit/utilities';
import { getSingleEditorChildNodeFromId } from '../hoc/getSubRenderer';

interface SingleEditorRendererProps {
  node: RootNode;
  childNodeList: RootNode[];
}
export const SingleEditorRenderer = ({ node, childNodeList }: SingleEditorRendererProps) => {
  const {
    setNodeRef: setDraggableRef,
    listeners,
    attributes,
    transform,
    isDragging,
  } = useDraggable({
    id: node.id,
  });
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: node.id + 'drop',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
    border: isOver ? '1px solid #000' : '1px solid transparent',
  };

  //   const onMouseEnter = () => {
  //     console.log('onMouseEnter');
  //   };
  //   const onMouseLeave = () => {
  //     console.log('onMouseLeave');
  //   };
  return (
    <>
      <div ref={setDraggableRef} style={style} {...listeners} {...attributes}>
        <div ref={setDroppableRef}>
          <SingleNodeRenderer
            node={node}
            childNodeList={childNodeList}
            subRenderer={getSingleEditorChildNodeFromId}
          />
        </div>
      </div>
    </>
  );
};
