/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskContainer } from '@street-vendor/core';
import { useQueryPostQuestion } from 'apps/customer/src/hooks/query/ask/useQueryPostQuestion';
import { pathName } from '../../../configs/pathName';

export const AskMain = () => {
  const { mutate } = useQueryPostQuestion();
  return (
    <AskContainer pathName={pathName.ASK.INQUIRY.MY.LIST} mutate={mutate} />
  );
};
