import { DetailNoticeContainer } from '@street-vendor/core';

export const DetailNotice = () => {
  return (
    <DetailNoticeContainer
      data={{
        content: '',
        imageUrl: '',
        notificationId: 0,
        title: '',
        type: '',
      }}
      isLoading={false}
    />
  );
};
