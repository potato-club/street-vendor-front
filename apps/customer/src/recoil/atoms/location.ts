import { atom } from 'recoil';

import { Location } from '../../apis/controller/store.api.type';

// TODO: 초기값 변경해야 함.
export const locationState = atom<Location>({
  key: 'locationState',
  default: { latitude: 37.45054589999992, longitude: 126.7198025999998 },
});
