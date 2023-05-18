import Router from 'next/router';
import styled from 'styled-components';
import { CardNotice } from '../../card/CardNotice';
import { AppBarLayout } from '../../layout/AppBarLayout';
import { ListNoticeType } from 'libs/core/src/types';
import { LoadingContainer } from '../loading/LoadingContainer';
import { Typography } from '../../Typography';

type Props = {
  detailPathName: string;
  list: ListNoticeType[];
  isLoading: boolean;
};
export const ListNoticeContainer = ({
  detailPathName,
  list,
  isLoading,
}: Props) => {
  const handleClickCardNotice = (id: number) => {
    Router.push(`${detailPathName}/${id}`);
  };

  if (list.length === 0) {
    return (
      <AppBarLayout title="공지사항" home>
        <CenterContainer>
          <Typography size="16" color="darkGray" letterSpacing="-1px">
            공지사항이 없습니다.
          </Typography>
        </CenterContainer>
      </AppBarLayout>
    );
  }
  if (isLoading) {
    return (
      <AppBarLayout title="공지사항" home>
        <LoadingContainer />
      </AppBarLayout>
    );
  }
  return (
    <AppBarLayout title="공지사항" home>
      <Container>
        <ListContainer>
          {list.map((item) => (
            <CardNotice
              onClick={handleClickCardNotice}
              data={item}
              key={item.id}
            />
          ))}
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

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 128px;
`;
