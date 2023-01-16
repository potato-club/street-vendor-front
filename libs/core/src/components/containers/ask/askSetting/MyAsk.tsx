import styled from 'styled-components';
import { CardAsk } from '../../../card/CardAsk';

export const MyAsk = () => {
  const handleClickCardAsk = () => {};
  return (
    <Container>
      <CardAsk onClick={handleClickCardAsk} />
      <CardAsk onClick={handleClickCardAsk} />
      <CardAsk onClick={handleClickCardAsk} />
      <CardAsk onClick={handleClickCardAsk} />
      <CardAsk onClick={handleClickCardAsk} />
      <CardAsk onClick={handleClickCardAsk} />
      <ContainerEnd />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 26px 0;
  overflow-y: auto;
  padding: 0 7%;
`;
const ContainerEnd = styled.div`
  display: flex;
`;
