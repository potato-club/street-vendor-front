import {
  AppBarLayout,
  MarkerMap,
  NextButton,
  Typography,
} from '@street-vendor/core';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { pathName } from '../../../configs/pathName';
import { useSetRecoilState } from 'recoil';
import { atomStoreRegisterLocation } from '../../../recoil/atoms/atomStoreRegister';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StoreRegisterLocationProps {}

export const StoreRegisterLocation: React.FC<StoreRegisterLocationProps> = (
  props
) => {
  const setLocation = useSetRecoilState(atomStoreRegisterLocation);

  const handleNext = () => {
    Router.push(pathName.STORE_REGISTER.SCHEDULE);
  };

  return (
    <AppBarLayout
      title="위치 설정"
      titleAlign="center"
      next
      onNext={handleNext}
    >
      <Container>
        <MarkerMap
          centerMarker
          onChangeCenter={(center) =>
            setLocation({ address: '', position: center })
          }
        />
        <NextButtonWrapper>
          <NextButton background="orange4" type="button" onClick={handleNext}>
            <Typography
              color="black"
              fontWeight="bold"
              size="16"
              letterSpacing="-1.5px"
              textAlign="center"
            >
              다음으로
            </Typography>
          </NextButton>
        </NextButtonWrapper>
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  z-index: 900;
  left: 50%;
  bottom: 56px;
  transform: translateX(-50%);
`;
