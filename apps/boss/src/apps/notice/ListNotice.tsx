import { ListNoticeContainer } from '@street-vendor/core';
import { pathName } from '../../configs/pathName';

export const ListNotice = () => {
  return (
    <ListNoticeContainer
      detailPathName={pathName.NOTICE.DETAIL}
      list={[]}
      isLoading={false}
    />
  );
};
