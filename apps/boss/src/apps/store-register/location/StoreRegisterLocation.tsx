import { MarkerMap } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { atomStoreRegisterLocation } from '../../../recoil/atoms/atomStoreRegister';
import { LocationAppBarLayout } from './components/LocationAppBarLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StoreRegisterLocationProps {}

export const StoreRegisterLocation: React.FC<StoreRegisterLocationProps> = (
  props
) => {
  const setLocation = useSetRecoilState(atomStoreRegisterLocation);

  return (
    <LocationAppBarLayout>
      <Container>
        <MarkerMap
          centerMarker
          onChangeCenter={(center) =>
            setLocation({ address: '', position: center })
          }
        />
      </Container>
    </LocationAppBarLayout>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;
