import { MyAskContainer } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';

export const MyAsk = () => {
  return (
    <MyAskContainer
      pathName={pathName.ASK.FORM}
      detailPathName={pathName.ASK.MY.DETAIL}
    />
  );
};
