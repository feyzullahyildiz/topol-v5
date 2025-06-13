'use client';
import { DragDropContext } from '@hello-pangea/dnd';
import { useEffect, useState } from 'react';

import { LeftArea } from '@/components/left-area/LeftArea';
import { RootEditor } from '@/components/render/RootEditor';
import { RootPreview } from '@/components/render/RootPreview';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ILayoutMenuState } from '@/hooks/global-state/AtomLayout';
import { useLayoutMenu } from '@/hooks/global-state/useLayoutState';
import { useRootStore } from '@/hooks/global-state/useRootStore';
import { useNodes } from '@/hooks/useNodes';
import { IRoot } from '@/types/IRoot';
import { cn } from '@/util/cn';

const initialRoot: IRoot = {
  rows: {
    r1: {
      id: 'r1',
      type: 'row',
      columnIds: ['c1'],
    },
    r1_2: {
      id: 'r1_2',
      type: 'row',
      columnIds: ['c2'],
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
    r_bottom: {
      id: 'r_bottom',
      type: 'row',
      columnIds: ['c_bottom_1', 'c_bottom_2'],
    },
    r_footer: {
      id: 'r_footer',
      type: 'row',
      columnIds: ['c_footer_1'],
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
    c_bottom_1: {
      id: 'c_bottom_1',
      type: 'column',
      itemIDs: ['bottom_img_1'],
    },
    c_bottom_2: {
      id: 'c_bottom_2',
      type: 'column',
      itemIDs: ['bottom_img_2'],
    },
    c_footer_1: {
      id: 'c_footer_1',
      type: 'column',
      itemIDs: ['item_footer_1'],
    },
  },
  items: {
    'item-1': {
      id: 'item-1',
      type: 'item',
      component: 'image',
      props: {
        src: 'https://picsum.photos/id/15/800/300',
      },
    },
    'item-2': {
      id: 'item-2',
      type: 'item',
      component: 'text',
      props: {
        text: 'Email DnD Provider - Sample Title',
      },
    },
    'item-3': {
      id: 'item-3',
      type: 'item',
      component: 'text',
      props: {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    },
    'item-4': {
      id: 'item-4',
      type: 'item',
      component: 'text',
      props: {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis ',
      },
    },
    'item-5': {
      id: 'item-5',
      type: 'item',
      component: 'text',
      props: {
        text: 'New Text',
      },
    },
    item_footer_1: {
      id: 'item_footer_1',
      type: 'item',
      component: 'text',
      props: {
        text: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella',
      },
    },
    bottom_img_1: {
      id: 'bottom_img_1',
      type: 'item',
      component: 'image',
      props: {
        src: 'https://picsum.photos/id/16/400/300',
      },
    },
    bottom_img_2: {
      id: 'bottom_img_2',
      type: 'item',
      component: 'image',
      props: {
        src: 'https://picsum.photos/id/17/400/300',
      },
    },
  },
  rowOrder: ['r1', 'r1_2', 'r2', 'r3', 'r_bottom', 'r_footer'],
};
export default function Home() {
  const [layoutMenu, setLayoutMenu] = useLayoutMenu();

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
          <Tabs
            value={layoutMenu.menu!}
            onValueChange={(value) => {
              setLayoutMenu({
                menu: value as ILayoutMenuState,
                selectedId: null,
              });
            }}
            className="bg-card flex min-h-12 w-[300px] flex-col"
          >
            <div className="bg-muted text-primary flex min-h-12 gap-4 p-4">
              <TabsList>
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
                <TabsTrigger disabled value="settings">
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>
            <LeftArea className="p-4" />
          </Tabs>
          <div className="bg-card text-primary mx-auto flex flex-1 flex-col items-center">
            <div className="bg-muted flex min-h-12 w-full items-center justify-between p-4">
              <Button variant="outline" onClick={sendMail} size="sm">
                Send test mail
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
