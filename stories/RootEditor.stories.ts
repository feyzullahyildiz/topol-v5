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
    initialRoot: {
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
    },
  },
};
