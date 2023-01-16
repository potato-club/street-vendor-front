import { useState } from 'react';
import styled from 'styled-components';
import { CardAsk } from '../../../card/CardAsk';
import { DetailNoticeContainer } from '../../notice/detail/DetailNoticeContainer';
import { DetailAskContainer } from '../detail/DetailAskContainer';

export const MyAsk = () => {
  const [isDetail, setIsDetail] = useState(false);
  const handleClickCardAsk = () => {
    setIsDetail((prev) => !prev);
  };
  return (
    <Container>
      <ContainerInner>
        {!isDetail ? (
          <CardList>
            <CardAsk onClick={handleClickCardAsk} />
            <CardAsk onClick={handleClickCardAsk} />
            <CardAsk onClick={handleClickCardAsk} />
            <CardAsk onClick={handleClickCardAsk} />
            <CardAsk onClick={handleClickCardAsk} />
            <CardAsk onClick={handleClickCardAsk} />
            <ContainerEnd />
          </CardList>
        ) : (
          <DetailAskContainer></DetailAskContainer>
        )}
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
