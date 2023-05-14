/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskContainer } from '@street-vendor/core';
import { useQueryPostImages } from 'apps/customer/src/hooks/query/ask/useQueryPostImages';
import { pathName } from '../../../configs/pathName';

export const AskMain = () => {
  const { mutate } = useQueryPostImages();
  return (
    <AskContainer pathName={pathName.ASK.INQUIRY.MY.LIST} mutate={mutate} />
  );
};
