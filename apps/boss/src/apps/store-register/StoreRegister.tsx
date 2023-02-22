import { customColor, NextButton, Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const StoreRegister = () => {
  return (
    <Container>
      <ContainerInner></ContainerInner>
      <Button>
        <NextButton background="orange4">
          <Typography
            color="black"
            fontWeight="bold"
            size="16"
            letterSpacing="-1.5px"
            textAlign="center"
          >
            다음으로
          </Typography>
        </NextButton>
      </Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding: 0 7%;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  position: absolute;
  bottom: 54px;
`;
