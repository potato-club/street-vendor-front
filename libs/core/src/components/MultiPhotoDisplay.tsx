import { BigPhotoModal, customColor } from '@street-vendor/core';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../hooks';
type Props = {
  style?: CSSProperties;
  srcArray: string[];
};
export const MultiPhotoDisplay = ({ style, srcArray }: Props) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [clickIndex, setClickIndex] = useState<number>(0);
  const handleImageClick = (num: number) => {
    setClickIndex(num);
    handleOpenModal();
  };

  return (
    <Container style={style}>
      {srcArray && (
        <Wrapper>
          <LeftImage style={{ width: srcArray.length > 1 ? '50%' : '100%' }}>
            <Image
              onClick={() => handleImageClick(0)}
              src={srcArray[0]}
              alt="detailStoreImage"
              fill
              style={{ objectFit: 'cover' }}
            />
          </LeftImage>
          {srcArray.length > 1 && (
            <RightImage>
              {srcArray.slice(1).map((data, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    height: '100%',
                  }}
                  onClick={() => handleImageClick(index + 1)}
                >
                  <Image
                    src={data}
                    fill
                    alt="detailStoreImage"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </RightImage>
          )}
        </Wrapper>
      )}
      <BigPhotoModal
        srcArray={srcArray}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        initialIndex={clickIndex}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div<{ borderRadius?: number }>`
  display: flex;
  /* gap: 4px; */
  width: 100%;
  aspect-ratio: 1.5;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 4px ${customColor.black + '25'};
`;

const LeftImage = styled.div`
  position: relative;
`;

const RightImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
