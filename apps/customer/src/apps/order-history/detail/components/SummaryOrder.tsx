import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const SummaryOrder = () => {
  return (
    <Container>
      <ContainerInner>
        <Typography
          size="14"
          color="orange2"
          fontWeight="bold"
          letterSpacing="-1.0px"
        >
          주문 완료
        </Typography>
        <StoreTitle>
          <Typography size="24" fontWeight="bold" letterSpacing="-1.5px">
            서윤보경이네 떡볶이
          </Typography>
        </StoreTitle>
        <Typography size="14" fontWeight="bold" letterSpacing="-1.0px">
          서윤이의 떡볶이 & 보경이의 마라탕 세트
        </Typography>
        <Typography size="14" color="darkGray">
          2022-09-26 오후 09:18
        </Typography>
        <ButtonWrapper>
          <Button>
            <Typography size="14" color="white" letterSpacing="-1.0px">
              가게보러 가기!
            </Typography>
          </Button>
          <Button>
            <Typography size="14" color="white" letterSpacing="-1.0px">
              리뷰쓰러 가기!
            </Typography>
          </Button>
        </ButtonWrapper>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 22px 7%;
`;

const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 11px;
  align-items: flex-start;
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
