import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const Payment = () => {
  return (
    <Container>
      <Typography size="16" fontWeight="bold">
        결제 방법
      </Typography>
      <Button>
        <Typography size="14" color="white">
          계좌 이체
        </Typography>
      </Button>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 22px 22px;
  gap: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange3};
  padding: 15px 20px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
