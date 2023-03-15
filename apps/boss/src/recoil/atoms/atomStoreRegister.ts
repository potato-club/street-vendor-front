import { atom } from 'recoil';

export interface ScheduleType {
  day: string;
  isChecked: boolean;
  open: string;
  close: string;
}
export interface MenuType {
  image: File;
  name: string;
  price: number;
  weight: string;
}

export const atomStoreRegisterCategory = atom<string>({
  key: 'atomStoreRegisterCategory',
  default: '',
});
export const atomStoreRegisterAccount = atom<string>({
  key: 'atomStoreRegisterAccount',
  default: '',
});
export const atomStoreRegisterExplain = atom<{
  name: string;
  description: string;
  location: string;
}>({
  key: 'atomStoreRegisterExplain',
  default: { name: '', description: '', location: '' },
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
export const atomScheduleModalTime = atom<{ day: number; time: string }>({
  key: 'atomScheduleTime',
  default: { day: 0, time: 'open' },
});
export const atomStoreRegisterMenu = atom<MenuType[]>({
  key: 'atomStoreRegisterMenu',
  default: [{ image: null, name: null, price: null, weight: null }],
});
export const atomStoreRegisterPhoto = atom<FileList>({
  key: 'atomStoreRegisterPhoto',
  default: null,
});
