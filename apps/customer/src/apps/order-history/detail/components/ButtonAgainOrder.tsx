import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const ButtonAgainOrder = () => {
  return (
    <Container>
      <Button>
        <Typography size="20" color="orange3" fontWeight="bold">
          한번 더 주문하러 가기!
        </Typography>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 53px 22px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${customColor.white};
  flex: 1;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
