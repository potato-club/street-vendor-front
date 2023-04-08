/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { MyAskContainer } from '@street-vendor/core';
import { useQueryGetMyQuestion } from 'apps/customer/src/hooks/query/ask/useQueryGetMyQestion';
import { pathName } from '../../../../configs/pathName';

export const MyAsk = () => {
  const { isLoading, data } = useQueryGetMyQuestion();
  // console.log(data);

  return (
    <MyAskContainer
      pathName={pathName.ASK.INQUIRY.FORM}
      detailPathName={pathName.ASK.INQUIRY.MY.DETAIL}
    />
  );
};
