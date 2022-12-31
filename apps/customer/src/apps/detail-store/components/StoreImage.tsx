import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { storeImageDummy } from "../../../dummy/detailStore/storeImageDummy";

export const StoreImage = () => {
  return (
    <ImageWrapper>
      <LeftImage style={{ width: storeImageDummy.length > 1 ? '50vw' : '100vw' }}>
        <Image src={storeImageDummy[0]} alt="detailStoreImage" fill />
      </LeftImage>
      {storeImageDummy.length > 1 && (
        <RightImage>
          {storeImageDummy.slice(1).map((data, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                height: 256 / (storeImageDummy.length - 1),
              }}
            >
              <Image src={data} fill alt="detailStoreImage" />
            </div>
          ))}
        </RightImage>
      )}
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  /* gap: 4px; */
  width: 100%;
  height: 260px;
`;

const LeftImage = styled.div`
  position: relative;
`;

const RightImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-left: 4px;
  gap: 4px;
`;
