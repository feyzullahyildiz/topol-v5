import { atomWithImmer } from 'jotai-immer';

export type ILayoutMenuState = 'layout' | 'items' | 'settings';
type Option1 = {
  menu: ILayoutMenuState;
  selectedId: null;
};
type Option2 = {
  menu: null;
  selectedId: string;
};
type Props = Option1 | Option2;
export const AtomLayoutMenu = atomWithImmer<Props>({
  menu: 'layout',
  selectedId: null,
});
