import React from 'react';
import styled from 'styled-components';
import { Typography, customColor } from '@street-vendor/core';
import { Rating } from 'react-simple-star-rating';
import { Arrow, EmptySpoon, FullSpoon, SpeechBubble, Star, Tteokbokki } from '../Icons';
import { FlexBox } from './common/FlexBox';

export const Info = () => {
  return (
    <Container>
      <GrayLine />
      <Wrapper>
        <Typography size="20" fontWeight="bold">
          서윤보경이네 떡볶이집
        </Typography>
        <Category>
          <Tteokbokki size={24} />
          <Typography size="16">떡볶이</Typography>
        </Category>
        <Typography size="16" color="darkGray">
          송도 1동 행정복지센터 대각선
        </Typography>
        <FlexBox gap={16}>
          <Typography size="14" fontWeight="bold" color="orange2">
            최근 리뷰 10
          </Typography>
          <OrangeLine />
          <RatingWrapper>
            <Rating
              initialValue={3.5}
              emptyIcon={<EmptySpoon />}
              fillIcon={<FullSpoon />}
              emptyStyle={{ display: 'flex', alignItems: 'center' }}
              allowFraction
              readonly
              transition
              allowHover={false}
            />
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
  padding: 20px 0 20px 0;

  @media screen and (min-width: 375px) {
    padding: 20px 40px 40px 40px;
  }
`;

const GrayLine = styled.hr`
  margin-bottom: 40px;
  width: 40px;
  opacity: 0.3;
  border: 3px solid #7c7c7c;
  border-radius: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
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