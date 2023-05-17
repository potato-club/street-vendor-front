import { Category } from '@street-vendor/core';

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
  badge: string;
  distance: number;
  locationDescription: string;
  pictureUrl: string;
  reviews: number;
  salesStatus: SalesStatus;
  spoon: string;
  storeCategory: Category;
  storeId: number;
  storeName: string;
};
