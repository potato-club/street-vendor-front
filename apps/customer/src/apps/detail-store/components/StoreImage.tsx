import { useQueryGetDetailStore } from '../../../hooks/query/detail-store/useQueryGetDetailStore';
import React from 'react';
import styled from 'styled-components';
import { ImageUrlType, MultiPhotoDisplay } from '@street-vendor/core';

export const StoreImage = () => {
  const { data } = useQueryGetDetailStore();

  return (
    <Container>
      {data?.storeImageResponses?.length > 0 && (
        <MultiPhotoDisplay
          srcArray={data.storeImageResponses.map(
            (data: ImageUrlType) => data.pictureUrl
          )}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  /* gap: 4px; */
  width: 100%;
  aspect-ratio: 1.5;
`;

const LeftImage = styled.div`
  position: relative;
  /* aspect-ratio: 0.75; */
`;

const RightImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 4px;
  gap: 4px;
`;
