import type { Meta, StoryObj } from '@storybook/react';

import { RootTestEditor } from '@/components/render/RootTestEditor';

const meta = {
  title: 'RootTestEditor/Basic',
  component: RootTestEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RootTestEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    initialNodes: [
      {
        id: 'r1',
        type: 'row',
        columnIds: ['c1', 'c2'],
      },
      {
        id: 'r2',
        type: 'row',
        columnIds: ['c3'],
      },
      {
        id: 'c1',
        type: 'column',
        itemIDs: ['item-1', 'item-2'],
      },
      {
        id: 'c2',
        type: 'column',
        itemIDs: ['item-3'],
      },
      {
        id: 'c3',
        type: 'column',
        itemIDs: ['item-4'],
      },
      {
        id: 'item-1',
        type: 'item',
        component: 'text',
        props: {
          text: 'Hello item 1',
        },
      },
      {
        id: 'item-2',
        type: 'item',
        component: 'text',
        props: {
          text: 'Hello item 2',
        },
      },
      {
        id: 'item-3',
        type: 'item',
        component: 'text',
        props: {
          text: 'Hello item 3',
        },
      },
      {
        id: 'item-4',
        type: 'item',
        component: 'text',
        props: {
          text: 'Hello item 4',
        },
      },
    ],
  },
};
