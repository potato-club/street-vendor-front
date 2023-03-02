import Router from 'next/router';
import styled from 'styled-components';
import { CardAsk } from '../../../card/CardAsk';

interface Props {
  detailPathName: string;
}

export const MyAsk = (props: Props) => {
  const handleDetailRouter = () => {
    Router.push(props.detailPathName);
  };
  return (
    <Container>
      <ContainerInner>
        <CardList>
          <CardAsk onClick={handleDetailRouter} />
          <CardAsk onClick={handleDetailRouter} />
          <CardAsk onClick={handleDetailRouter} />
          <CardAsk onClick={handleDetailRouter} />
          <CardAsk onClick={handleDetailRouter} />
          <CardAsk onClick={handleDetailRouter} />
          <ContainerEnd />
        </CardList>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  align-items: center;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
`;
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 7%;
  gap: 26px 0;
`;
const ContainerEnd = styled.div`
  display: flex;
`;
