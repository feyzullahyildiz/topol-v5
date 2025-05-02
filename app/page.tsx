'use client';
import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect, useState } from 'react';

import { LeftArea } from '@/components/left-area/LeftArea';
import { RootEditor } from '@/components/render/RootEditor';
import { RootPreview } from '@/components/render/RootPreview';
import { Button } from '@/components/ui/button';
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
    r3: {
      id: 'r3',
      type: 'row',
      columnIds: ['c4', 'c5'],
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
    c4: {
      id: 'c4',
      type: 'column',
      itemIDs: [],
    },
    c5: {
      id: 'c5',
      type: 'column',
      itemIDs: ['item-5'],
    },
  },
  items: {
    'item-1': {
      id: 'item-1',
      type: 'item',
      component: 'image',
      props: {
        src: 'https://picsum.photos/id/15/400/300',
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
    'item-5': {
      id: 'item-5',
      type: 'item',
      component: 'text',
      props: {
        text: 'Yeni Metin',
      },
    },
  },
  rowOrder: ['r1', 'r2', 'r3'],
};
export default function Home() {
  const [isPreview, setIsPreview] = useState(false);
  const { onDragEnd, onDragStart } = useNodes();
  const [root, setRoot] = useRootStore();
  useEffect(() => {
    setRoot(initialRoot);
  }, [setRoot]);

  const sendMail = async () => {
    const to = prompt('Mail adresini giriniz');
    if (!to) return;

    const response = await fetch('/api/test/send-mail', {
      method: 'POST',
      body: JSON.stringify({ to, subject: 'Test mail', data: root }),
    }).then((res) => res.json());
    console.log(response);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className={cn('flex h-screen flex-col p-4')}>
        <main className="flex flex-1 gap-4">
          <div className="bg-card flex min-h-12 flex-col">
            <div className="bg-muted text-primary flex min-h-12 gap-4 p-4">
              <Button variant="outline" size="sm">
                Layout
              </Button>
              <Button disabled variant="outline" size="sm">
                Items
              </Button>
              <Button disabled variant="outline" size="sm">
                Settings
              </Button>
            </div>
            <LeftArea className="min-w-72 p-4" />
          </div>
          <div className="bg-card text-primary mx-auto flex flex-1 flex-col items-center">
            <div className="bg-muted flex min-h-12 w-full items-center justify-between p-4">
              <Button variant="outline" onClick={sendMail} size="sm">
                Test maili gönder
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsPreview((p) => !p)}>
                  {isPreview ? 'Preview Mode' : 'Editor Mode'}
                </Button>
              </div>
            </div>
            {isPreview ? (
              <RootPreview root={root} className="bg-foreground/10" />
            ) : (
              <RootEditor className="bg-foreground/10" />
            )}
          </div>
        </main>
      </div>
    </DragDropContext>
  );
}
