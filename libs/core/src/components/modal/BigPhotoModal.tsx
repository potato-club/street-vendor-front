import Modal from 'react-modal';
import Image from 'next/image';
import { customColor } from '../../constants';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const modalStyle = {
  overlay: {
    inset: 0,
    backgroundColor: `${customColor.black}90`,
  },
  content: {
    '--imageSize': 'min(80vw, 80vh)',
    overflow: 'hidden',
    background: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 'var(--imageSize)',
    height: 'var(---imageSize)',
    border: 'none',
    padding: 0,
  },
};

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
  src: string | string[];
  initialIndex?: number;
};

export const BigPhotoModal = ({ isOpen, handleCloseModal, src, initialIndex }: Props) => {
  // src 가 배열인경우
  if (Array.isArray(src))
    return (
      <Modal
        ariaHideApp={false}
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        style={modalStyle}
      >
        <StyledSwiper
          modules={[Navigation]}
          navigation
          initialSlide={initialIndex}
          spaceBetween={100}
        >
          {src.map((data, index) => (
            <SwiperSlide key={`${data}-${index}`}>
              <ImageWrapper>
                <Image
                  src={data}
                  alt={'menu'}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Modal>
    );

  // src 가 배열이 아닌경우
  return (
    <Modal
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
      isOpen={isOpen}
      style={modalStyle}
    >
      <ImageWrapper>
        <Image
          src={src}
          alt={'menu'}
          fill
          style={{ objectFit: 'contain' }}
        />
      </ImageWrapper>
    </Modal>
  );
};

const ImageWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${customColor.white}90;
  }
`;
