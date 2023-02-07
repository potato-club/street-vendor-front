import { SpoonRating, Typography } from '@street-vendor/core';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export const ReviewList = () => {
  return (
    <Container>
      <Wrapper>
        <UserWrapper>
          <Image
            src={'/cat.png'}
            alt="userImage"
            width={40}
            height={40}
            style={{ objectFit: 'contain', borderRadius: 24 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FlexBox>
              <Typography size="14">유저닉네임</Typography>
              <Typography size="14" color="gray">
                2주 전
              </Typography>
            </FlexBox>
            <FlexBox>
                <SpoonRating readonly initialValue={5} width={10} height={15} gap={4} />
              <Typography size="14" fontWeight="bold" color="orange2">
                3.5 숟가락
              </Typography>
            </FlexBox>
          </div>
        </UserWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  padding: 20px 0 20px 20px;
`;

const UserWrapper = styled.div`
  display: flex;
  padding-right: 20px;
  gap: 8px;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
