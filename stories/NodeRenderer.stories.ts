import type { Meta, StoryObj } from '@storybook/react';

import { NodeRendererDefault } from '@/components/render/NodeRendererDefault';
import { EnumNodeType } from '@/types/EnumNodeType';

const meta = {
  title: 'NodeRenderer/Basic',
  component: NodeRendererDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NodeRendererDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    nodes: [
      {
        id: '1',
        props: { text: 'Hello, world!' },
        atRoot: true,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
    ],
  },
};

export const LayoutOneOne: Story = {
  args: {
    nodes: [
      {
        id: 'top',
        props: { text: 'TOP' },
        atRoot: true,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
      {
        id: 'layout-x',
        props: {
          children: ['left', 'right'],
        },
        atRoot: true,
        type: EnumNodeType.LayoutOneOne,
        mode: 'Layout',
      },
      {
        id: 'left',
        props: { text: 'Left' },
        atRoot: false,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
      {
        id: 'right',
        props: { text: 'Right' },
        atRoot: false,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
      {
        id: 'bottom',
        props: { text: 'BOTTOM' },
        atRoot: true,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
    ],
  },
};

export const LayoutOneOne_with_GrandChild: Story = {
  args: {
    nodes: [
      {
        id: 'layout',
        props: {
          children: ['left', 'another-layout'],
        },
        atRoot: true,
        type: EnumNodeType.LayoutOneOne,
        mode: 'Layout',
      },
      {
        id: 'another-layout',
        props: {
          children: ['grandchild-a', 'grandchild-b'],
        },
        atRoot: false,
        type: EnumNodeType.LayoutOneOne,
        mode: 'Layout',
      },
      {
        id: 'left',
        props: { text: 'Left' },
        atRoot: false,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
      {
        id: 'grandchild-a',
        props: { text: 'grandchild-a' },
        atRoot: false,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
      {
        id: 'grandchild-b',
        props: { text: 'grandchild-b' },
        atRoot: false,
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
    ],
  },
};
