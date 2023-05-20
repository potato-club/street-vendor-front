import { atom } from 'recoil';
import { MenuCountType } from '../../types/menuCount.type';

export const allMenuInfo = atom<MenuCountType[]>({
  key: 'allMenuInfo',
  default: [],
});
