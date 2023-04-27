export type OrderHistoryType = {
  firstMenuName: string;
  orderCreateAt: string;
  orderId: number;
  orderStatus: 'PREPARING' | 'READY_TO_PICK_UP' | 'REQUEST ';
  payment: 'ACCOUNT_TRANSFER' | 'CASH';
  status: 'ACTIVE' | 'CANCELED ';
  storeId: number;
  storeName: string;
  totalAmount: number;
  totalMenuCount: number;
};

export type OrderHistoryDetailType = {
  menuIds: number[];
  menuName: string;
  orderId: number;
  orderStatus: 'PREPARING' | 'READY_TO_PICK_UP' | 'REQUEST';
  orderTime: string;
  paymentMethod: 'ACCOUNT_TRANSFER' | 'CASH';
  storeId: number;
  totalPrice: number;
};
