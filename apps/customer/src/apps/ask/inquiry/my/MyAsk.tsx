import { MyAskContainer } from '@street-vendor/core';
import { pathName } from '../../../../configs/pathName';

export const MyAsk = () => {
  return (
    <MyAskContainer
      pathName={pathName.ASK.INQUIRY.FORM}
      detailPathName={pathName.ASK.INQUIRY.MY.DETAIL}
    />
  );
};
