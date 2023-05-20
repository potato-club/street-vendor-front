import { Position } from '@street-vendor/core';
import { atom } from 'recoil';

export interface ScheduleType {
  day: string;
  isChecked: boolean;
  open: string;
  close: string;
}
export interface MenuType {
  image: File | null;
  name: string;
  price: string;
  weight: string;
}

export const atomStoreRegisterCategory = atom<string>({
  key: 'atomStoreRegisterCategory',
  default: '',
});
export const atomStoreRegisterAccount = atom<{ bank: string; number: string }>({
  key: 'atomStoreRegisterAccount',
  default: { bank: '', number: '' },
});
export const atomStoreRegisterExplain = atom<{
  name: string;
  description: string;
  location: string;
}>({
  key: 'atomStoreRegisterExplain',
  default: { name: '', description: '', location: '' },
});
export const atomStoreRegisterLocation = atom<{
  address: string;
  position: Position;
}>({
  key: 'atomStoreRegisterLocation',
  default: { address: '', position: { latitude: 0, longitude: 0 } },
});
export const atomStoreRegisterSchedule = atom<ScheduleType[]>({
  key: 'atomStoreRegisterSchedule',
  default: [
    { day: '월', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '화', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '수', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '목', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '금', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '토', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
    { day: '일', isChecked: true, open: '오전 09:00', close: '오후 10:00' },
  ],
});
export const atomScheduleModalTime = atom<{
  day: number;
  time: 'open' | 'close';
  atNoon: number;
  h: number;
  m: number;
}>({
  key: 'atomScheduleTime',
  default: { day: 0, time: 'open', atNoon: 0, h: 0, m: 0 },
});
export const atomStoreRegisterMenu = atom<MenuType[] | null>({
  key: 'atomStoreRegisterMenu',
  default: [
    {
      image: null,
      name: '',
      price: '',
      weight: '',
    },
  ],
});
export const atomStoreRegisterImage = atom<string[]>({
  key: 'atomStoreRegisterImages',
  default: [],
});
export const atomStoreRegisterFile = atom<File[] | null>({
  key: 'atomStoreRegisterPhoto',
  default: null,
  dangerouslyAllowMutability: true,
});
