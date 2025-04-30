'use client';
import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect } from 'react';

import { LeftArea } from '@/components/left-area/LeftArea';
import { RootEditor } from '@/components/render/RootEditor';
import { useNodes } from '@/hooks/useNodes';
import { useRootStore } from '@/hooks/useRootStore';
import { IRoot } from '@/types/IRoot';
import { cn } from '@/util/cn';

const initialRoot: IRoot = {
  rows: {
    r1: {
      id: 'r1',
      type: 'row',
      columnIds: ['c1', 'c2'],
    },
    r2: {
      id: 'r2',
      type: 'row',
      columnIds: ['c3'],
    },
  },
  columns: {
    c1: {
      id: 'c1',
      type: 'column',
      itemIDs: ['item-1', 'item-2'],
    },
    c2: {
      id: 'c2',
      type: 'column',
      itemIDs: ['item-3'],
    },
    c3: {
      id: 'c3',
      type: 'column',
      itemIDs: ['item-4'],
    },
  },
  items: {
    'item-1': {
      id: 'item-1',
      type: 'item',
      component: 'text',
      props: {
        text: 'r1 | c1 | item-1',
      },
    },
    'item-2': {
      id: 'item-2',
      type: 'item',
      component: 'text',
      props: {
        text: 'r1 | c1 | item-2',
      },
    },
    'item-3': {
      id: 'item-3',
      type: 'item',
      component: 'text',
      props: {
        text: 'r1 | c2 | item-3',
      },
    },
    'item-4': {
      id: 'item-4',
      type: 'item',
      component: 'text',
      props: {
        text: 'r2 | c3 | item-4',
      },
    },
  },
  rowOrder: ['r1', 'r2'],
};
export default function Home() {
  const { onDragEnd, onDragStart } = useNodes();
  const [, setRoot] = useRootStore();
  useEffect(() => {
    setRoot(initialRoot);
  }, [setRoot]);
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className={cn('flex h-screen flex-col p-4')}>
        <main className="flex flex-1 gap-4">
          <div className="bg-card flex min-h-12 flex-col">
            <div className="bg-muted text-primary flex min-h-12 gap-4 p-4">
              <span>Layout</span>
              <span>Items</span>
              <span>Settings</span>
            </div>
            <LeftArea className="min-w-72 p-4" />
          </div>
          <div className="bg-card text-primary mx-auto flex flex-1 flex-col items-center">
            <div className="bg-muted flex min-h-12 w-full items-center p-4">Header</div>
            <RootEditor className="bg-foreground/10" />
          </div>
        </main>
      </div>
    </DragDropContext>
  );
}
