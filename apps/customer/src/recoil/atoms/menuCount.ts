import { atomFamily } from 'recoil';
import { MenuCountType } from '../../types/menuCount.type';

export const menuCount = atomFamily<MenuCountType, number>({
  key: 'menuCount',
  default: (menuId) => {
    return {
      menuId,
      count: 0,
      price: undefined,
    };
  },
});
