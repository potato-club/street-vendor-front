import { customColor, MultiPhotoDisplay, SpoonRating, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Menu } from './index';
import { AiOutlineMore } from 'react-icons/ai';
import { imageSrcDummy } from '../../../dummy/imageSrcDummy';

export const Review = () => {
  return (
    <Container>
      <UserWrapper>
        <Image
          src={'/cat.png'}
          alt="userImage"
          width={40}
          height={40}
          style={{ objectFit: 'contain', borderRadius: 24 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <FlexBox>
            <Typography size="14">유저닉네임</Typography>
            <Typography size="14" color="gray">
              2주 전
            </Typography>
          </FlexBox>
          <FlexBox>
            <SpoonRating
              readonly
              initialValue={5}
              width={10}
              height={15}
              gap={4}
            />
            <Typography size="14" color="orange2" fontHeight="1.4">
              5 숟가락
            </Typography>
          </FlexBox>
        </div>
        <IconWrapper>
          <AiOutlineMore size={20} />
        </IconWrapper>
      </UserWrapper>
      <StyledSwiper slidesPerView="auto">
        <SwiperSlide style={{ width: '70%' }}>
          <Menu />
        </SwiperSlide>
        <SwiperSlide style={{ width: '70%' }}>
          <Menu />
        </SwiperSlide>
        <SwiperSlide style={{ width: '70%' }}>
          <Menu />
        </SwiperSlide>
      </StyledSwiper>
      <MultiPhotoDisplay srcArray={imageSrcDummy} borderRadius={12} style={{ paddingRight: 20 }} />
      <Typography size="14">짱 맛있어요~~</Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  padding: 20px 0 20px 20px;
  :not(:last-child) {
    ::after {
      // border-bottom 를 부모 크기와 다르게 조절하기 위해서 사용한 코드
      content: '';
      position: absolute;
      bottom: 0;
      left: 20px;
      display: block;
      width: calc(100% - 40px);
      height: 1px;
      background-color: ${customColor.gray};
    }
  }
`;

const UserWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 20px;
  gap: 8px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`;