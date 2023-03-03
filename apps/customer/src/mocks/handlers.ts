import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://dev.street-vendor.shop/api/v1/store/detail/1',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          businessHours: [
            {
              days: 'MON',
              endTime: '12:00:00',
              startTime: '08:00:00',
            },
          ],
          reviewCount: 10,
          score: 3.5,
          category: 'BUNG_EO_PPANG',
          location: {
            latitude: 37.45064589999992,
            longitude: 126.7199025999998,
          },
          locationDescription: '송도 1동 행정복지센터 대각선(mock)',
          menuList: [
            {
              menuCount: 2,
              menuId: 1,
              menuName: '팥 붕어빵',
              menuPrice: 2000,
              menuSalesStatus: 'ON_SALE',
              pictureUrl: '/cat.png',
            },
            {
              menuCount: 3,
              menuId: 2,
              menuName: '슈크림',
              menuPrice: 2500,
              menuSalesStatus: 'ON_SALE',
              pictureUrl: '/cat.png',
            },
          ],
          salesStatus: 'OPEN',
          storeDescription:
            '서윤이와 보경이가 정성을 팔고있습니다. 떡볶이가 맛있습니다!',
          storeId: 1,
          storeImageResponses: [
            {
              id: 1,
              isThumbNail: true,
              pictureUrl: '/cat.png',
            },
            {
              id: 2,
              isThumbNail: true,
              pictureUrl: '/cat.png',
            },
          ],

          storeName: '서윤보경이네 떡볶이집(mock)',
        })
      );
    }
  ),
];
