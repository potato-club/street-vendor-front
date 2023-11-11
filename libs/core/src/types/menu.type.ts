export type MenuType = {
  menuCount: number;
  menuId: number;
  menuName: string;
  menuPrice: number;
  menuSalesStatus: string;
  pictureUrl: string;
  orderCount?: number; // 주문하기용으로 사용하는 타입
};
