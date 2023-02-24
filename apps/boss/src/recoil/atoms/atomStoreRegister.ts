import { atom } from 'recoil';

export const atomStoreRegisterCategory = atom<string>({
  key: 'atomStoreRegisterCategory',
  default: '',
});
export const atomStoreRegisterAccount = atom<string>({
  key: 'atomStoreRegisterAccount',
  default: '',
});
