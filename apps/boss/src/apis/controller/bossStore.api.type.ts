export type RequestStore = {
  bankInfo: {
    accountNumber: string;
    bankType: 'SHINHAN'; //todo 수정필요
  };
  businessHours: {
    days: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
    endTime: {
      hour: string;
      minute: string;
      nano: number; //! 여쭤보기
      second: string;
    };
    startTime: {
      hour: string;
      minute: string;
      nano: number;
      second: string;
    };
  }[];
  category: 'BUNG_EO_PPANG'; //todo 수정필요
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  menus: {
    menuCount: number; //todo 검토필요
    name: string;
    pictureUrl: string;
    price: number;
  }[];
  name: string;
  paymentMethods: ['ACCOUNT_TRANSFER'];
  storeImages: {
    imageUrl: string;
    isThumbNail: boolean; //todo 검토필요
  }[];
};
