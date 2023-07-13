import {
  Category,
  CategoryName,
  customColor,
  SpoonRating,
  Typography,
} from '@street-vendor/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { SalesStatus } from '../../apis/controller/store.api.type';
import { Star } from '../icons';

export interface StoreProps {
  id: number;
  name: string;
  category: Category;
  pictureUrl?: string;
  description?: string;
  locationDescription: string;
  salesStatus: SalesStatus;
  reviews: number;
  distance: number;
  spoon: string;
  badge?: string;
}

export const Store: React.FC<StoreProps> = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <StarWrapper>
          <Star />
        </StarWrapper>
        {props.badge && (
          <New>
            <Typography size="12" color="orange2" fontWeight="bold">
              {props.badge}
            </Typography>
          </New>
        )}
        <Image
          src={'/cat.png'}
          fill
          alt="store"
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
      <InfoWrapper>
        <Typography size="16" fontWeight="bold">
          {props.name}
        </Typography>
        <Typography size="14">{CategoryName[props.category]}</Typography>
        <Typography size="14">{props.locationDescription}</Typography>
        <Flex>
          <Typography
            size="14"
            color={props.salesStatus === 'OPEN' ? 'orange2' : 'gray'}
          >
            {props.salesStatus === 'OPEN' ? '영업중' : '준비중'}
          </Typography>
          <Line />
          <Typography size="12">리뷰 {props.reviews}</Typography>
          <Line />
          <Typography size="12">{props.distance}km</Typography>
        </Flex>
        <Flex>
          <SpoonRating initialValue={Number(props.spoon)} readonly />
          <Typography size="12" fontWeight="bold">
            {Number(props.spoon)} 숟가락
          </Typography>
        </Flex>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0px 3px 6px ${customColor.gray};
  overflow: hidden;
  flex: none;
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
