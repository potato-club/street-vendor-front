import { customColor, SpoonRating, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { Star } from '../../../components/icons';

export const Store = () => {
  return (
    <Container>
      <ImageWrapper>
        <StarWrapper>
          <Star />
        </StarWrapper>
        <New>
          <Typography size="12" color="orange2" fontWeight="bold">
            신규
          </Typography>
        </New>
        <Image
          src={'/cat.png'}
          fill
          alt="store"
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
      <InfoWrapper>
        <Typography size="16" fontWeight="bold">
          서윤보경이네
        </Typography>
        <Typography size="14">떡볶이</Typography>
        <Typography size="14">송도 1동 행정복지센터 대각선</Typography>
        <Flex>
          <Typography size="14" color="orange2">
            영업중
          </Typography>
          <Line />
          <Typography size="12">리뷰 10</Typography>
          <Line />
          <Typography size="12">0.3km</Typography>
        </Flex>
        <Flex>
          <SpoonRating initialValue={3.5} readonly />
          <Typography size="12" fontWeight='bold'>3.5 숟가락</Typography>
        </Flex>
      </InfoWrapper>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0px 3px 6px ${customColor.gray};
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 40px 8px 12px;
`;

const Flex = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Line = styled.hr`
  height: 18px;
  border-left: 1px solid ${customColor.darkGray};
`;

const StarWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 9;
`;

const New = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  z-index: 9;
  background-color: ${customColor.orange5};
  border-radius: 12px;
  padding: 8px;
`;
