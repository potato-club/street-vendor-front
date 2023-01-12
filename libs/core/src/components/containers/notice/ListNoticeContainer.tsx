import Router from 'next/router';
import styled from 'styled-components';
import { CardNotice } from '../../card/CardNotice';

type Props = {
  detailPathName: string;
};
export const ListNoticeContainer = ({ detailPathName }: Props) => {
  const handleClickCardNotice = () => {
    Router.push(`${detailPathName}/1`);
  };
  return (
    <Container>
      <ListContainer>
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
        <CardNotice onClick={handleClickCardNotice} />
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 17px;
  margin-top: 55px;
  margin-bottom: 121px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
