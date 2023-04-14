import styled from 'styled-components';
import { customColor } from 'libs/core/src/constants';
import { SyncLoader } from 'react-spinners';

export const LoadingContainer = () => {
  return (
    <Container>
      <BlackFilter>
        <SyncLoader color={customColor.orange1} />
      </BlackFilter>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  opacity: 1;
  pointer-events: none;
  z-index: 99999;
`;

const BlackFilter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.7;
  z-index: 99999;
`;
