import type { Meta, StoryObj } from '@storybook/react';

import { EnumNodeType } from '@/types/EnumNodeType';
import { EditorNodeRenderer } from '@/components/render/NodeRendererDnD';
import { NodeRendererForTest } from '@/components/render/NodeRendererForTest';

const meta = {
  title: 'EditorRenderer/Basic',
  component: NodeRendererForTest,
  parameters: {
    layout: 'fullscreen',
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
        type: EnumNodeType.WidgetText,
        mode: 'Widget',
      },
    ],
  },
};

export const LayoutOneOne: Story = {
  args: {
    initialNodes: [
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
    initialNodes: [
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

export const LayoutOneOne_with_EmptyArea: Story = {
  args: {
    initialNodes: [
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
          children: ['left', null],
        },
        atRoot: true,
        type: EnumNodeType.LayoutOneOne,
        mode: 'Layout',
      },
      {
        id: 'layout-y',
        props: {
          children: ['foo', null],
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
        id: 'foo',
        props: { text: 'foo' },
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
