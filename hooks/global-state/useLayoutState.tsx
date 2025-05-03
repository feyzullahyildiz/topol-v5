import { useAtom } from 'jotai';

import { AtomLayoutMenu } from './AtomLayout';

export const useLayoutMenu = () => useAtom(AtomLayoutMenu);
