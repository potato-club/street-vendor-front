import { BigPhotoModal, ImageUrlType } from '@street-vendor/core';
import { useQueryGetDetailStore } from '../../../hooks/query/detail-store/useQueryGetDetailStore';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useModal } from './../../../hooks/useModal';

export const StoreImage = () => {
  const { data } = useQueryGetDetailStore();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [clickIndex, setClickIndex] = useState<number>(0);

  const handleImageClick = (num: number) => {
    setClickIndex(num);
    handleOpenModal();
  };

  return (
    <Container>
      {data?.storeImageResponses?.length > 0 && (
        <>
          <Wrapper>
            <LeftImage
              style={{
                width: data.storeImageResponses.length > 1 ? '50%' : '100%',
              }}
            >
              <Image
                onClick={() => handleImageClick(0)}
                src={data.storeImageResponses[0].pictureUrl}
                alt="detailStoreImage"
                fill
                style={{ objectFit: 'cover' }}
              />
            </LeftImage>
            {data.storeImageResponses.length > 1 && (
              <RightImage>
                {data.storeImageResponses
                  .slice(1)
                  .map((data: ImageUrlType, index) => (
                    <div
                      key={data.id}
                      style={{
                        position: 'relative',
                        height: '100%',
                      }}
                      onClick={() => handleImageClick(index + 1)}
                    >
                      <Image
                        src={data.pictureUrl}
                        fill
                        alt="detailStoreImage"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
              </RightImage>
            )}
          </Wrapper>
          <BigPhotoModal
            src={data.storeImageResponses.map((data:ImageUrlType) => data.pictureUrl)}
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            initialIndex={clickIndex}
          />
        </>
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
