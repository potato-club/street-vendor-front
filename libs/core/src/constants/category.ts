export type Category = keyof typeof CategoryName;

export enum CategoryName {
  'TTEOK_BOKKI' = '떡볶이',
  'SUNDAE' = '순대',
  'TAKOYAKI' = '타코야끼',
  'BUNG_EO_PPANG' = '붕어빵',
  'HO_DDEOK' = '호떡',
  'EGG_BREAD' = '계란빵',
  'OTHER_DESSERT' = '기타 후식류',
  'OTHER_MEAL' = '기타 식사류',
}
