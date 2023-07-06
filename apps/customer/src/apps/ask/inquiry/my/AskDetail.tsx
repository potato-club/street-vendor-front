/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskDetailContainer } from '@street-vendor/core';
import { pathName } from '../../../../configs/pathName';
import Router from 'next/router';
import { useQueryGetDetailQuestion } from 'apps/customer/src/hooks/query/ask/useQueryGetDetailQestion';
import { useQueryDeleteQuestion } from 'apps/customer/src/hooks/query/ask/useQueryDeleteQuestion';

export const AskDetail = () => {
  const { query } = Router;
  const { isLoading, data } = useQueryGetDetailQuestion(
    Number(query.questionId)
  );
  const { mutate } = useQueryDeleteQuestion(Number(query.questionId));
  return (
    <AskDetailContainer
      pathName={pathName.ASK.INQUIRY.FORM}
      isLoading={isLoading}
      data={data}
      mutate={mutate}
    />
  );
};
