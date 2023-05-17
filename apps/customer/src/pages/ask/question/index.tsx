/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AskQuestion } from 'apps/customer/src/apps/ask/question/AskQuestion';
import type { NextPage } from 'next';

const AskQuestionPage: NextPage = () => {
  return <AskQuestion />;
};

export default AskQuestionPage;
