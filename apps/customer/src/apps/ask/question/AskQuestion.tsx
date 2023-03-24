import { AskQuestionContainer } from '@street-vendor/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useQueryGetFAQ } from 'apps/customer/src/hooks/query/ask/useQueryGetFAQ';
import { pathName } from '../../../configs/pathName';

export const AskQuestion = () => {
  const { isLoading, data } = useQueryGetFAQ();
  return (
    <AskQuestionContainer
      isLoading={isLoading}
      data={data}
      pathName={pathName.ASK.INQUIRY.FORM}
    />
  );
};
