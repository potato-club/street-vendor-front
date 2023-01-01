import React from 'react';
import styled from 'styled-components';
import { Typography, customColor } from '@street-vendor/core';
import { Tteokbokki } from './components/Icons/foodCategory/Tteokbokki';
import { Rating } from 'react-simple-star-rating';
import { EmptySpoon } from './components/Icons/score/EmptySpoon';
import { FullSpoon } from './components/Icons/score/FullSpoon';
export const DetailStore = () => {
  return (
    <Container>
      {/* <StoreImage /> */}
      <Wrapper>
        <GrayLine />
        <Info>
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
        </Info>
        <Review>
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
        </Review>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(3px 3px 10px ${customColor.black}26);
`;

const GrayLine = styled.hr`
  margin: 40px 0;
  width: 40px;
  opacity: 0.3;
  border: 3px solid #7c7c7c;
  border-radius: 24px;
`;

const Info = styled.div`
  display: flex;
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

const Review = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
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