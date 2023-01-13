// TimePicker Test Pgae
import { customColor, Typography } from '@street-vendor/core';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function TimePickerPage() {
  const hours = useMemo(() => Array.from(new Array(12), (_, i) => i + 1), []);

  const minute = useMemo(
    () => Array.from(new Array(60), (_, i) => String(i).padStart(2, '0')),
    []
  );

  const [atNoon, setAtNoon] = useState<number>(0);
  const [activeHours, setActiveHours] = useState<number>(1);
  const [activeMinute, setActiveMinute] = useState<number>(0);

  useEffect(() => {
    console.log(activeHours);
  }, [activeHours]);

  useEffect(() => {
    console.log(activeMinute);
  }, [activeMinute]);

  return (
    <Container>
      <Wrapper>
        <Typography size="20">가게 방문 예정 시간</Typography>
        <TimeWrapper>
          <StyledSwiper
            onSlideChange={(e) => setAtNoon(e.realIndex)}
            slidesPerView={3}
            initialSlide={atNoon}
            centeredSlides
            direction="vertical"
          >
            <SwiperSlide>오전</SwiperSlide>
            <SwiperSlide>오후</SwiperSlide>
          </StyledSwiper>
          <StyledSwiper
            onSlideChange={(e) => setActiveHours(e.realIndex + 1)}
            slidesPerView={3}
            initialSlide={activeHours - 1}
            loop
            centeredSlides
            direction="vertical"
          >
            {hours.map((data, i) => (
              <SwiperSlide key={i}>{data}</SwiperSlide>
            ))}
          </StyledSwiper>
          <div style={{ height: 'calc(100% / 3)' }}>
            <Typography size="20">:</Typography>
          </div>
          <StyledSwiper
            onSlideChange={(e) => setActiveMinute(e.realIndex)}
            slidesPerView={3}
            initialSlide={activeMinute}
            loop
            centeredSlides
            direction="vertical"
          >
            {minute.map((data, i) => (
              <SwiperSlide key={i}>{data}</SwiperSlide>
            ))}
          </StyledSwiper>
        </TimeWrapper>
        <ButtonWrapper>
          <Button onClick={() => alert('취소')}>취소</Button>
          <Button
            onClick={() =>
              alert(
                `${
                  atNoon === 0 ? '오전' : '오후'
                }, ${activeHours}시, ${activeMinute}분`
              )
            }
          >
            확인
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled.div`
  background-color: skyblue;
  width: 100%;
  max-width: 325px;
  height: 100%;
  max-height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  .swiper-slide-active {
    color: black;
  }
  :not(.swiper-slide-active) {
    color: ${customColor.darkGray}80;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  width: 92px;
  height: 48px;
  border-radius: 24px;
  box-shadow: 0px 4px 4px ${customColor.gray}80;
`;
