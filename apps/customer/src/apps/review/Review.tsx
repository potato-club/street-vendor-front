import { Typography } from '@street-vendor/core';
import styled from 'styled-components';

export const Review = () => {
  return (
    <Container>
      <ContainerInner>
        <Spoon>
          <SpoonText>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.9px">
              맛숟가락
            </Typography>
            <Typography size="12" color="darkGray" letterSpacing="-0.6px">
              맛있으셨나요? 맛있었던만큼 숟가락 갯수를 선택해주세요.
            </Typography>
            숟가락
          </SpoonText>
        </Spoon>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;
const Spoon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0;
  gap: 22px 0;
`;
const SpoonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
