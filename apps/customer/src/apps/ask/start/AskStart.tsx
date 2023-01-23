import { InitialAskContainer } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';

export const AskStart = () => {
  return <InitialAskContainer pathName={pathName.ASK.FORM} />;
};
