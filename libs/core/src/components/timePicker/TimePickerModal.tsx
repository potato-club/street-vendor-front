import React, { useMemo, useState } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { timePickerBackground } from './timePickerBackground';
import 'swiper/css';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

const modalCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(325px, 90%)',
    height: 'min(470px, 100%)',
    overflow: 'hidden',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    borderRadius: '20px',
  },
  overlay: {
    background: `${customColor.gray}80`,
  },
};

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
  setValue: UseFormSetValue<FieldValues>;
  name?: string;
};
export const TimePickerModal = ({ isOpen, handleCloseModal, setValue, name }: Props) => {
  const formatTime = (data: { toString: () => string; }) => {
    return data.toString().padStart(2, '0');
  };

  const hours = useMemo(() => Array.from(new Array(12), (_, i) => formatTime((i + 1))), []);



  const minute = useMemo(
    () => Array.from(new Array(60), (_, i) => formatTime(i)),
    []
  );

  const [atNoon, setAtNoon] = useState<number>(0);
  const [activeHours, setActiveHours] = useState<number>(1);
  const [activeMinute, setActiveMinute] = useState<number>(0);


  const handleConfirmButton = () => {
    // Todo POST 요청전에 format 변경해야함
    setValue(name ? name : 'time', `${atNoon === 0 ? '오전' : '오후'} ${formatTime(activeHours)} : ${formatTime(activeMinute)}`);

    const time = new Date();
    time.setHours(atNoon === 0 ? activeHours : activeHours + 12)
    time.setMinutes(activeMinute)

    handleCloseModal();
  }

  return (
    <Modal
      style={modalCustomStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="TimePickerModal"
      // onRequestClose={() => handleCloseModal()}
    >
      <Container>
        <Typography size="24" fontWeight="bold">
          가게 방문 예정 시간
        </Typography>
        <TimeWrapper>
          <StyledSwiper
            onSlideChange={(e) => setAtNoon(e.realIndex)}
            slidesPerView={3}
            initialSlide={atNoon}
            centeredSlides
            direction="vertical"
          >
            <SwiperSlide>
              <Typography
                size="20"
                style={{ display: 'flex', justifyContent: 'center' }}
                notBreak
              >
                오전
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography
                size="20"
                style={{ display: 'flex', justifyContent: 'center' }}
                notBreak
              >
                오후
              </Typography>
            </SwiperSlide>
          </StyledSwiper>
          <StyledSwiper
            onSlideChange={(e) => setActiveHours(e.realIndex + 1)}
            slidesPerView={3}
            initialSlide={activeHours - 1}
            loop
            centeredSlides
            loopedSlides={12}
            direction="vertical"
          >
            {hours.map((data, i) => (
              <SwiperSlide key={i}>
                <Typography
                  size="20"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  {data}
                </Typography>
              </SwiperSlide>
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
            loopedSlides={12}
            direction="vertical"
          >
            {minute.map((data, i) => (
              <SwiperSlide key={i}>
                <Typography
                  size="20"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  {data}
                </Typography>
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </TimeWrapper>
        <ButtonWrapper>
          <Button onClick={() => handleCloseModal()}>취소</Button>
          <Button onClick={handleConfirmButton}>확인</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  background: url("data:image/svg+xml,${timePickerBackground}") no-repeat center;
  background-size: cover;
  justify-content: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;


const TimeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 20%;
  div div :not(.swiper-slide-active) {
    div {
      color: ${customColor.darkGray}80;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  width: 92px;
  height: 48px;
  border-radius: 24px;
  background-color: ${customColor.white};
  box-shadow: 0px 4px 4px ${customColor.gray}80;
`;
