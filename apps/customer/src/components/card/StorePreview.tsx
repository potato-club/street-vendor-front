import { customColor, SpoonRating, Typography } from '@street-vendor/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Category, SalesStatus } from '../../apis/controller/store.api.type';
import { getCategoryName } from '../../utilities/category';
import { Star } from '../icons';

export interface StorePreviewProps {
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
}

export const StorePreview: React.FC<StorePreviewProps> = (props) => {
  return (
    <Container href={`/detail-store/${props.id}`}>
      <ImageWrapper>
        <StarWrapper>
          <Star />
        </StarWrapper>
        <Image src="/cat.png" alt="store" fill style={{ objectFit: 'cover' }} />
      </ImageWrapper>
      <InfoWrapper>
        <Typography size="18" fontWeight="500" letterSpacing="-0.9px">
          {props.name}
        </Typography>
        <Row>
          <Typography size="16" fontWeight="300" letterSpacing="-0.8px">
            {getCategoryName(props.category)}
          </Typography>
          <Tag>
            <Typography
              size="12"
              fontWeight="bold"
              letterSpacing="-0.36px"
              color="orange2"
            >
              신규
            </Typography>
          </Tag>
        </Row>
        <Test
          size="14"
          fontWeight="300"
          letterSpacing="-0.7px"
          color="darkGray"
          // fontHeight="28px"
        >
          {props.description}
        </Test>
        <Typography
          size="14"
          letterSpacing="-0.7px"
          style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {props.locationDescription}
        </Typography>
        <Row>
          <Typography
            size="14"
            fontWeight="500"
            letterSpacing="-0.7px"
            color={props.salesStatus === 'OPEN' ? 'orange2' : 'gray'}
          >
            {props.salesStatus === 'OPEN' ? '영업중' : '준비중'}
          </Typography>
          <RowDivider />
          <Typography size="14" letterSpacing="-0.7px" color="darkGray">
            리뷰 {props.reviews}
          </Typography>
          <RowDivider />
          <Typography size="14" letterSpacing="-0.7px" color="darkGray">
            {props.distance}km
          </Typography>
        </Row>
        <RatingWrapper>
          <SpoonRating initialValue={Number(props.spoon)} readonly />
          <Typography size="12" fontWeight="500">
            {Number(props.spoon)} 숟가락
          </Typography>
        </RatingWrapper>
      </InfoWrapper>
    </Container>
  );
};

const Test = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Container = styled(Link)`
  min-height: 260px;
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 40%;
  position: relative;
`;

const StarWrapper = styled.div`
  position: absolute;
  top: 22px;
  left: 16px;
  z-index: 9;
`;

const InfoWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 22px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Tag = styled.div`
  background-color: ${customColor.orange5};
  border-radius: 12px;
  padding: 2px 8px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RowDivider = styled.div`
  height: 12px;
  border-left: 1px solid #707070;
`;
