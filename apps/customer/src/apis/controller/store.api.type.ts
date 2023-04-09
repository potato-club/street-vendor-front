export type Category =
  | 'BUNG_EO_PPANG'
  | 'EGG_BREAD'
  | 'HO_DDEOK'
  | 'OTHER_DESSERT'
  | 'OTHER_MEAL'
  | 'SUNDAE'
  | 'TAKOYAKI'
  | 'TTEOK_BOKKI';

export type Location = {
  latitude: number;
  longitude: number;
};

export type SalesStatus = 'CLOSED' | 'OPEN';

export type StoreResponse = {
  category: Category;
  location: Location;
  salesStatus: SalesStatus;
  storeId: number;
  storeName: string;
};

export type StoreInfoResponse = {
  locationDescription: string;
  pictureUrl: string;
  reviews: number;
  salesStatus: SalesStatus;
  spoon: string;
  storeCategory: Category;
  storeId: number;
  storeName: string;
};
