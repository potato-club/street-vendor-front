import React from 'react';
import styled from 'styled-components';
import { Typography, customColor, SpoonRating } from '@street-vendor/core';
import {
  Arrow,
  SpeechBubble,
  Star,
  Tteokbokki,
} from '../Icons';

export const Info = () => {
  return (
    <Container>
      <GrayLine />
      <Wrapper>
        <Title>
          <Typography size="20" fontWeight="bold" fontHeight="1">
            서윤보경이네 떡볶이집
          </Typography>
          <Category>
            <Tteokbokki size={24} />
            <Typography size="16">떡볶이</Typography>
          </Category>
          <Typography size="16" color="darkGray" fontHeight="1">
            송도 1동 행정복지센터 대각선
          </Typography>
        </Title>
        <Intro>
          <Typography size="12" color='darkGray' fontHeight='1.4'>
            서윤이와 보경이가 정성을 팔고있습니다. 떡볶이가 맛있습니다!
          </Typography>
        </Intro>
        <FlexBox gap={16}>
          <Typography
            size="14"
            fontWeight="bold"
            color="orange2"
            underlineColor="orange2"
          >
            최근 리뷰 10
          </Typography>
          <OrangeLine />
          <RatingWrapper>
            <SpoonRating readonly initialValue={3.5} />
            <Typography size="14" fontWeight="bold" color="orange2">
              3.5 숟가락
            </Typography>
          </RatingWrapper>
        </FlexBox>
        <ButtonWrapper>
          <IconButton>
            <Star />
            <Typography size="12" fontWeight="bold">
              즐겨찾기
            </Typography>
          </IconButton>
          <IconButton>
            <Arrow />
            <Typography size="12" fontWeight="bold">
              길찾기
            </Typography>
          </IconButton>
          <IconButton>
            <SpeechBubble />
            <Typography size="12" fontWeight="bold">
              공유하기
            </Typography>
          </IconButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px; // Todo 다같이 디자인 확인해보고 max-width 수치 바꿀거면 바꾸기
  padding: 20px 0;

  @media screen and (min-width: 320px) {
    padding: 20px;
  }
  @media screen and (min-width: 375px) {
    padding: 20px 40px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const GrayLine = styled.hr`
  margin-bottom: 40px;
  width: 40px;
  opacity: 0.3;
  border-bottom: 3px solid #7c7c7c;
  border-radius: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Intro = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrangeLine = styled.hr`
  height: 18px;
  border: 1px solid ${customColor.orange2};
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  display: flex;
  white-space: nowrap;
  width: 88px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${customColor.beige};
  padding: 6px 20px;
  border-radius: 20px;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FlexBox = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
  justify-content: center;
  white-space: normal;
  @media screen and (min-width: 300px) {
    white-space: nowrap;
  }
`;
