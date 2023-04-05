import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const Payment = () => {
  return (
    <Container>
      <ContainerInner>
        <Typography size="16" fontWeight="bold" letterSpacing="-1.0px">
          결제 방법
        </Typography>
        <Button>
          <Typography size="14" color="white" letterSpacing="-1.0px">
            계좌 이체
          </Typography>
        </Button>
      </ContainerInner>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 22px 7%;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 16px;
  align-items: flex-start;
`;
const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange3};
  padding: 15px 20px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
