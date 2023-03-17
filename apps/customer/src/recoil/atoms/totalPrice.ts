import { atom } from 'recoil';

export const totalPrice = atom<number>({
  key: 'totalPrice',
  default: 0,
});
