import { IBaseColumn } from './node/IBaseColumn';
import { IBaseRow } from './node/IBaseRow';
import { IItemText } from './node/IItemText';

export type IRootItems = IItemText;

export type IRootRowRecord = Record<string, IBaseRow>;
export type IRootColumnRecord = Record<string, IBaseColumn>;
export type IRootItemRecord = Record<string, IRootItems>;

export type IRoot = {
  rows: IRootRowRecord;
  columns: IRootColumnRecord;
  items: IRootItemRecord;
  rowOrder: string[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _rootA: IRoot = {
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
};
