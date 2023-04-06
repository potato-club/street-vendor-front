/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskQuestionContainer } from '@street-vendor/core';
import { useQueryGetFAQ } from 'apps/customer/src/hooks/query/ask/useQueryGetFAQ';
import { pathName } from '../../../configs/pathName';

export type FAQType = 'EVENT' | 'FAQ_BOSS' | 'FAQ_USER' | 'NOTIFICATION';

export const AskQuestion = () => {
  const faqType: FAQType = 'FAQ_USER';
  const { isLoading, data } = useQueryGetFAQ(faqType);

  return (
    <AskQuestionContainer
      isLoading={isLoading}
      data={data}
      pathName={pathName.ASK.INQUIRY.FORM}
    />
  );
};
