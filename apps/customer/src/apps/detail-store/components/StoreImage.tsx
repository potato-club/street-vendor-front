import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { storeImageDummy } from '../../../dummy/detailStore/storeImageDummy';

export const StoreImage = () => {
  return (
    <Container>
      <Wrapper>
        <LeftImage
          style={{ width: storeImageDummy.length > 1 ? '50%' : '100%' }}
        >
          <Image src={storeImageDummy[0]} alt="detailStoreImage" fill />
        </LeftImage>
        {storeImageDummy.length > 1 && (
          <RightImage>
            {storeImageDummy.slice(1).map((data, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  height: '100%',
                }}
              >
                <Image src={data} fill alt="detailStoreImage" />
              </div>
            ))}
          </RightImage>
        )}
      </Wrapper>
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
  max-width: 768px;
`;

const LeftImage = styled.div`
  position: relative;
  aspect-ratio: 0.75;
`;

const RightImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 4px;
  gap: 4px;
`;
