import { DraggableProvided } from '@hello-pangea/dnd';

import { cn } from '@/util/cn';

interface Props {
  squareSize: number;
  borderSize: number;
  className: string;
  dragHandleProps: DraggableProvided['dragHandleProps'];
  color?: string;
  debug?: boolean;
}
export const CustomBorderAndDragHandle = ({
  squareSize,
  borderSize,
  className,
  color = 'white',
  dragHandleProps,
  debug = false,
}: Props) => {
  return (
    <>
      <div
        {...dragHandleProps}
        style={{
          // left: -(squareSize + borderSize - squareSize / 2),
          left: -(squareSize + borderSize),
          width: squareSize,
          height: squareSize,
          backgroundColor: color,
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
        className={cn(
          'absolute top-0 bottom-0 z-10 my-auto hidden items-center justify-center',
          'text-3xl text-white',
          className
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="#e3e3e3"
          viewBox="0 -960 960 960"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </div>
      <div
        style={{ left: -borderSize, width: borderSize, borderColor: color }}
        className={cn(
          'absolute top-0 bottom-0 hidden border-l-1',
          className,
          debug && 'bg-red-400'
        )}
      />
      <div
        style={{ right: -borderSize, width: borderSize, borderColor: color }}
        className={cn(
          'absolute top-0 bottom-0 hidden border-r-1',
          className,
          debug && 'bg-red-400'
        )}
      />
      <div
        style={{ right: -borderSize, left: -borderSize, borderColor: color }}
        className={cn('absolute top-0 hidden border-t-1', className, debug && 'bg-red-400')}
      />
      <div
        style={{ right: -borderSize, left: -borderSize, borderColor: color }}
        className={cn('absolute bottom-0 hidden border-t-1', className, debug && 'bg-red-400')}
      />
    </>
  );
};
