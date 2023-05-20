import { ListNoticeContainer } from '@street-vendor/core';
import { pathName } from '../../configs/pathName';
import { useQueryGetListNotice } from '../../hooks/query/notice/useQueryGetListNotice';

export const ListNotice = () => {
  const { data, isLoading } = useQueryGetListNotice();
  return (
    <ListNoticeContainer
      detailPathName={pathName.NOTICE.DETAIL}
      list={data ?? []}
      isLoading={isLoading}
    />
  );
};
