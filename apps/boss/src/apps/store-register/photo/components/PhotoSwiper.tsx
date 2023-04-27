import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  images: string[];
}

export const PhotoSwiper = ({ images }: Props) => {
  return (
    <Wrapper>
      <StyledSwiper slidesPerView={1} centeredSlides spaceBetween={30}>
        {images.length === 0 ? (
          <StyledSwiperSlide />
        ) : (
          images.map((i, id) => (
            <StyledSwiperSlide key={id}>
              <Image
                src={i}
                alt={String(id)}
                fill
                style={{ objectFit: 'cover', borderRadius: 'inherit' }}
              />
              <IndexTag>
                <Typography
                  size="12"
                  color="gray"
                  letterSpacing="0.5px"
                  style={{
                    textShadow: `0px 1px 1px ${customColor.black + '29'}`,
                  }}
                >
                  {id + 1}/{images.length}
                </Typography>
              </IndexTag>
            </StyledSwiperSlide>
          ))
        )}
      </StyledSwiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 36px 7% 60px;
  width: 100%;
`;
const StyledSwiper = styled(Swiper)`
  display: flex;
  width: 100%;
  overflow: visible;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  position: relative;
  background: ${customColor.beige};
  width: 100%;
  aspect-ratio: 28/22;
  border-radius: 20px;
  box-shadow: 0px 3px 6px 0 ${customColor.black + '29'};
`;
const IndexTag = styled.div`
  display: flex;
  position: absolute;
  bottom: 18px;
  right: 22px;
`;
