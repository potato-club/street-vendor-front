/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskDetailContainer } from '@street-vendor/core';
import { pathName } from '../../../../configs/pathName';
import Router from 'next/router';
import { useQueryGetDetailQuestion } from 'apps/customer/src/hooks/query/ask/useQueryGetDetailQestion';

export const AskDetail = () => {
  const { query } = Router;
  const { isLoading, data } = useQueryGetDetailQuestion(
    Number(query.questionId)
  );
  return (
    <AskDetailContainer
      pathName={pathName.ASK.INQUIRY.FORM}
      isLoading={isLoading}
      data={data}
    />
  );
};
