import type { Meta, StoryObj } from '@storybook/react';

import { RootPreview } from '@/components/render/RootPreview';

const meta = {
  title: 'RootPreview/Basic',
  component: RootPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RootPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    root: {
      rows: {
        r1: {
          id: 'r1',
          type: 'row',
          columnIds: ['c1', 'c2'],
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
      },
      items: {
        'item-1': {
          id: 'item-1',
          type: 'item',
          component: 'text',
          props: {
            text: 'Hello item 1',
          },
        },
        'item-2': {
          id: 'item-2',
          type: 'item',
          component: 'text',
          props: {
            text: 'Hello item 2',
          },
        },
        'item-3': {
          id: 'item-3',
          type: 'item',
          component: 'text',
          props: {
            text: 'Hello item 3',
          },
        },
      },
      rowOrder: ['r1'],
    },
  },
};
