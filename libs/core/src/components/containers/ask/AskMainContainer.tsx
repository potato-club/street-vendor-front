import { useState } from 'react';
import { AskContainer } from './mainSetting/AskContainer';
import { InitialAskContainer } from './mainSetting/InitialAskContainer';
import styled from 'styled-components';

export const AskMainContainer = () => {
  const [isInitital, setIsInitial] = useState<boolean>(true);
  return (
    <Container>
      {isInitital ? <InitialAskContainer /> : <AskContainer />}
      <TestButton
        onClick={() => {
          setIsInitial((prev) => !prev);
        }}
      >
        버튼
      </TestButton>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;
const TestButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 4px 8px;
`;
