import { AskGuideContainer } from '@street-vendor/core';
import { pathName } from '../../configs/pathName';

export const AskGuide = () => {
  return (
    <AskGuideContainer
      inquiryPathName={pathName.ASK.INQUIRY.FORM}
      questionPathName={pathName.ASK.QUESTION}
    />
  );
};
