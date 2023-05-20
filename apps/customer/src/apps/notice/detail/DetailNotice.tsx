import { DetailNoticeContainer } from '@street-vendor/core';
import { useQueryGetDetailNotice } from 'apps/customer/src/hooks/query/notice/useQueryGetDetailNotice';

export const DetailNotice = () => {
  const { data, isLoading } = useQueryGetDetailNotice();

  return <DetailNoticeContainer data={data} isLoading={isLoading} />;
};
