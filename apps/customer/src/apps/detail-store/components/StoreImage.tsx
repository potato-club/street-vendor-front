import { BigPhotoModal } from '@street-vendor/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { storeImageDummy } from '../../../dummy/detailStore/storeImageDummy';
import { useModal } from "./../../../hooks/useModal";

export const StoreImage = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [clickIndex, setClickIndex] = useState<number>(0);
  const handleImageClick = (num: number) => {
    setClickIndex(num);
    handleOpenModal();
  }

  return (
    <Container>
      {storeImageDummy && 
      <Wrapper>
        <LeftImage
          style={{ width: storeImageDummy.length > 1 ? '50%' : '100%' }}
        >
          <Image onClick={() => handleImageClick(0)} src={storeImageDummy[0]} alt="detailStoreImage" fill style={{objectFit: 'cover'}}/>
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
                onClick={() => handleImageClick(index + 1)}
              >
                <Image src={data} fill alt="detailStoreImage" style={{objectFit: 'cover'}}/>
              </div>
            ))}
          </RightImage>
        )}
      </Wrapper>
      }
      <BigPhotoModal src={storeImageDummy} isOpen={isOpen} handleCloseModal={handleCloseModal} initialIndex={clickIndex}/>
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
