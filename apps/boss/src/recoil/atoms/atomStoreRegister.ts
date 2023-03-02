import { atom } from 'recoil';

export interface ScheduleType {
  day: string;
  isChecked: boolean;
  open: string;
  close: string;
}

export const atomStoreRegisterCategory = atom<string>({
  key: 'atomStoreRegisterCategory',
  default: '',
});
export const atomStoreRegisterAccount = atom<string>({
  key: 'atomStoreRegisterAccount',
  default: '',
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
