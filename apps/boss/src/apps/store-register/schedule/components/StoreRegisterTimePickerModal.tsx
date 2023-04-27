import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { customColor } from '../../../../../../../libs/core/src/constants';
import { Typography } from '../../../../../../../libs/core/src/components/Typography';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  atomScheduleModalTime,
  atomStoreRegisterSchedule,
} from 'apps/boss/src/recoil/atoms/atomStoreRegister';

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
    zIndex: 2000,
  },
};

type Props = {
  isOpen: boolean;
  handleCloseModal: () => void;
};
type StypeProps = {
  isTime?: boolean;
};
export const StoreRegisterTimePickerModal = ({
  isOpen,
  handleCloseModal,
}: Props) => {
  const formatTime = (data: { toString: () => string }) => {
    return data.toString().padStart(2, '0');
  };
  const hours = useMemo(
    () => Array.from(new Array(12), (_, i) => formatTime(i + 1)),
    []
  );

  const minute = useMemo(
    () => Array.from(new Array(60), (_, i) => formatTime(i)),
    []
  );
  const [modalValue, setModalValue] = useRecoilState(atomScheduleModalTime);
  const [scheduleValue, setScheduleValue] = useRecoilState(
    atomStoreRegisterSchedule
  );

  useEffect(() => {}, [isOpen]);

  const handleConfirmButton = () => {
    setScheduleValue(
      scheduleValue.map((i, id) =>
        id === modalValue.day
          ? modalValue.time === 'open'
            ? {
                day: i.day,
                isChecked: i.isChecked,
                open: `${
                  modalValue.atNoon === 0 ? '오전' : '오후'
                } ${formatTime(modalValue.h)}:${formatTime(modalValue.m)}`,
                close: i.close,
              }
            : {
                day: i.day,
                isChecked: i.isChecked,
                open: i.open,
                close: `${
                  modalValue.atNoon === 0 ? '오전' : '오후'
                } ${formatTime(modalValue.h)}:${formatTime(modalValue.m)}`,
              }
          : i
      )
    );
    handleCloseModal();
  };

  return (
    <Modal
      style={modalCustomStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="TimePickerModal"
      // onRequestClose={() => handleCloseModal()}
    >
      <Container>
        <ModalBackground>
          <svg
            width="325"
            height="470"
            viewBox="0 0 325 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M305 470H20.0001C17.3726 470.007 14.7698 469.493 12.3424 468.488C9.91488 467.482 7.7108 466.005 5.85798 464.142C3.99498 462.289 2.51805 460.085 1.51253 457.658C0.506999 455.23 -0.00706947 452.628 7.45747e-05 450V20.0001C-0.00712469 17.3726 0.506996 14.7698 1.51253 12.3424C2.51806 9.91487 3.99493 7.71101 5.85798 5.85823C7.7108 3.99522 9.91488 2.51805 12.3424 1.51252C14.7698 0.506998 17.3726 -0.00707059 20.0001 7.34499e-05H264.206C264.43 16.036 270.913 31.3493 282.271 42.6715C293.629 53.9936 308.963 60.4277 325 60.6002V450C325.007 452.628 324.493 455.23 323.488 457.658C322.482 460.085 321.005 462.289 319.142 464.142C317.289 466.005 315.085 467.482 312.658 468.488C310.23 469.493 307.628 470.007 305 470Z"
              fill="#F6F1EC"
            />
          </svg>
        </ModalBackground>
        <ContainerInner>
          <TopButtonWrapper>
            <TopButton isTime={modalValue.time === 'open'}>
              <Typography size="20" fontWeight="bold" letterSpacing="-1.0px">
                영업시간
              </Typography>
            </TopButton>
            <TopButton isTime={modalValue.time === 'close'}>
              <Typography size="20" fontWeight="bold" letterSpacing="-1.0px">
                마감시간
              </Typography>
            </TopButton>
          </TopButtonWrapper>
          <TimeWrapper>
            <StyledSwiper
              onSlideChange={(e) =>
                setModalValue((prev) => ({ ...prev, atNoon: e.realIndex }))
              }
              slidesPerView={3}
              initialSlide={modalValue.atNoon}
              centeredSlides
              direction="vertical"
              spaceBetween={30}
            >
              <StyledSwiperSlide>
                <Typography
                  size="24"
                  style={{ display: 'flex', justifyContent: 'center' }}
                  notBreak
                  letterSpacing="-1.0px"
                >
                  오전
                </Typography>
              </StyledSwiperSlide>
              <StyledSwiperSlide>
                <Typography
                  size="24"
                  style={{ display: 'flex', justifyContent: 'center' }}
                  notBreak
                  letterSpacing="-1.0px"
                >
                  오후
                </Typography>
              </StyledSwiperSlide>
            </StyledSwiper>
            <StyledSwiper
              onSlideChange={(e) =>
                setModalValue((prev) => ({ ...prev, h: e.realIndex + 1 }))
              }
              slidesPerView={3}
              initialSlide={modalValue.h}
              loop
              centeredSlides
              loopedSlides={12}
              direction="vertical"
              spaceBetween={30}
            >
              {hours.map((data, i) => (
                <StyledSwiperSlide key={i}>
                  <Typography
                    size="24"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {data}
                  </Typography>
                </StyledSwiperSlide>
              ))}
            </StyledSwiper>
            <div style={{ paddingBottom: '6px' }}>
              <Typography
                size="24"
                style={{ textShadow: `1px 1px 1px ${customColor.black}29` }}
              >
                :
              </Typography>
            </div>
            <StyledSwiper
              onSlideChange={(e) =>
                setModalValue((prev) => ({ ...prev, m: e.realIndex }))
              }
              slidesPerView={3}
              initialSlide={modalValue.m}
              loop
              centeredSlides
              loopedSlides={12}
              direction="vertical"
              spaceBetween={30}
            >
              {minute.map((data, i) => (
                <StyledSwiperSlide key={i}>
                  <Typography
                    size="24"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {data}
                  </Typography>
                </StyledSwiperSlide>
              ))}
            </StyledSwiper>
          </TimeWrapper>
          <ButtonWrapper>
            <Button
              onClick={() => handleCloseModal()}
              style={{ background: `${customColor.orange3}` }}
            >
              취소
            </Button>
            <Button
              onClick={handleConfirmButton}
              style={{ background: `${customColor.orange4}` }}
            >
              확인
            </Button>
          </ButtonWrapper>
        </ContainerInner>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const TopButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 16px;
`;
const TopButton = styled.div<StypeProps>`
  display: flex;
  width: 50%;
  height: 42px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.isTime && customColor.white};
  opacity: ${(props) => !props.isTime && 0.3};
  border-radius: 21px;
`;
const TimeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 165px;
  align-items: center;
  justify-content: center;
  padding: 0 8%;
  margin: 36px 0 42px;
`;
const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 20%;
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  &:not(.swiper-slide-active) {
    div {
      color: ${customColor.gray};
    }
  }
  &.swiper-slide-active {
    div {
      text-shadow: 1px 1px 1px ${customColor.black + '29'};
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 17%;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;
const Button = styled.button`
  min-width: 92px;
  height: 48px;
  border-radius: 24px;
  background-color: ${customColor.white};
  box-shadow: 0px 4px 4px ${customColor.gray}80;
`;
const ModalBackground = styled.div`
  display: flex;
  position: absolute;
`;
