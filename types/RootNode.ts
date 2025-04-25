import { IBaseColumn } from './node/IBaseColumn';
import { IBaseRow } from './node/IBaseRow';
import { IItemText } from './node/IItemText';

export type IRootItems = IItemText;
export type IRootNode = IBaseRow | IBaseColumn | IRootItems;
