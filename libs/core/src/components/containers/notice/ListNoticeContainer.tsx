import Router from 'next/router';
import styled from 'styled-components';
import { CardNotice } from '../../card/CardNotice';
import { AppBarLayout } from '../../layout/AppBarLayout';

type Props = {
  detailPathName: string;
};
export const ListNoticeContainer = ({ detailPathName }: Props) => {
  const handleClickCardNotice = () => {
    Router.push(`${detailPathName}/1`);
  };
  return (
    <AppBarLayout title="공지사항" home>
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
    </AppBarLayout>
  );
};

const Container = styled.div`
  padding: 0px 17px;
  max-width: 400px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 121px;
  padding-bottom: 10%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
