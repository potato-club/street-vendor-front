import { Category } from '../apis/controller/store.api.type';

export const getCategoryName = (category: Category): string => {
  switch (category) {
    case 'BUNG_EO_PPANG':
      return '붕어빵';
    case 'EGG_BREAD':
      return '계란빵';
    case 'HO_DDEOK':
      return '호떡';
    case 'OTHER_DESSERT':
      return '기타 후식류';
    case 'OTHER_MEAL':
      return '기타 식사류';
    case 'SUNDAE':
      return '순대';
    case 'TAKOYAKI':
      return '타코야끼';
    case 'TTEOK_BOKKI':
      return '떡볶이';
    default:
      return '';
  }
};
