import { Category, Position } from '@street-vendor/core';

export type SalesStatus = 'CLOSED' | 'OPEN';

export type StoreResponse = {
  category: Category;
  location: Position;
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
