import { atom } from 'recoil';

export const atomMyProfileEmail = atom<string>({
  key: 'atomMyProfile',
  default: '',
});
export const atomMyProfileName = atom<string>({
  key: 'atomMyProfileName',
  default: '',
});
export const atomMyProfileNickname = atom<string>({
  key: 'atomMyProfileNickname',
  default: '',
});
export const atomMyProfileProfileUrl = atom<string>({
  key: 'atomMyProfileProfileUrl',
  default: '',
});
