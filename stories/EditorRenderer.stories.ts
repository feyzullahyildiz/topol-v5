import type { Meta, StoryObj } from '@storybook/react';

import { NodeType } from '@/lib/NodeType';
import { EditorNodeRenderer } from '@/components/editor/EditorNodeRenderer';

const meta = {
  title: 'EditorRenderer/Basic',
  component: EditorNodeRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditorNodeRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    initialNodes: [
      {
        id: '1',
        props: { text: 'Hello, world!' },
        atRoot: true,
        type: NodeType.WidgetText,
      },
    ],
  },
};

export const LayoutOneOne: Story = {
  args: {
    initialNodes: [
      { id: 'top', props: { text: 'TOP' }, atRoot: true, type: NodeType.WidgetText },
      {
        id: 'layout-x',
        props: {
          children: ['left', 'right'],
        },
        atRoot: true,
        type: NodeType.LayoutOneOne,
      },
      { id: 'left', props: { text: 'Left' }, atRoot: false, type: NodeType.WidgetText },
      { id: 'right', props: { text: 'Right' }, atRoot: false, type: NodeType.WidgetText },
      { id: 'bottom', props: { text: 'BOTTOM' }, atRoot: true, type: NodeType.WidgetText },
    ],
  },
};
export const LayoutOneOne_with_GrandChild: Story = {
  args: {
    initialNodes: [
      {
        id: 'layout',
        props: {
          children: ['left', 'another-layout'],
        },
        atRoot: true,
        type: NodeType.LayoutOneOne,
      },
      {
        id: 'another-layout',
        props: {
          children: ['grandchild-a', 'grandchild-b'],
        },
        atRoot: false,
        type: NodeType.LayoutOneOne,
      },
      { id: 'left', props: { text: 'Left' }, atRoot: false, type: NodeType.WidgetText },
      {
        id: 'grandchild-a',
        props: { text: 'grandchild-a' },
        atRoot: false,
        type: NodeType.WidgetText,
      },
      {
        id: 'grandchild-b',
        props: { text: 'grandchild-b' },
        atRoot: false,
        type: NodeType.WidgetText,
      },
    ],
  },
};
