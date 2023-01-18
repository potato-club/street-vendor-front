import { MyAskContainer } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';

export const MyAsk = () => {
  return (
    <MyAskContainer
      pathName={pathName.ASK.INDEX}
      detailPathName={pathName.ASK.MY.DETAIL}
    />
  );
};
