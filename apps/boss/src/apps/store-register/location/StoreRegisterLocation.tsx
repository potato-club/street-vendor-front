import { MarkerMap, toPosition } from '@street-vendor/core';
import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { atomStoreRegisterLocation } from '../../../recoil/atoms/atomStoreRegister';
import { LocationAppBarLayout } from './components/LocationAppBarLayout';
import { LocationUnderBar } from './components/LocationUnderBar';

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
          onChangeGeocode={(center) =>
            setLocation({
              address: center.address,
              position: toPosition(center.position),
            })
          }
          preview={<LocationUnderBar />}
        />
      </Container>
    </LocationAppBarLayout>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;
