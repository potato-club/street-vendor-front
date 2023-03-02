import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const SummaryOrder = () => {
  return (
    <Container>
      <Typography size="14" color="orange2" fontWeight="bold">
        주문 완료
      </Typography>
      <StoreTitle>
        <Typography size="24" fontWeight="bold">
          서윤보경이네 떡볶이
        </Typography>
      </StoreTitle>
      <Typography size="14" fontWeight="bold">
        서윤이의 떡볶이 & 보경이의 마라탕 세트
      </Typography>
      <Typography size="14" color="darkGray">
        2022-09-26 오후 09:18
      </Typography>
      <ButtonWrapper>
        <Button>
          <Typography size="14" color="white">
            가게보러 가기!
          </Typography>
        </Button>
        <Button>
          <Typography size="14" color="white">
            리뷰쓰러 가기!
          </Typography>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 11px;
  width: 100%;
  padding: 22px 22px;
`;

const StoreTitle = styled.div``;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-top: 18px;
`;

const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange3};
  padding: 15px 10px;
  flex: 1;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
