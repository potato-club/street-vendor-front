import { Typography } from '@street-vendor/core';
import styled from 'styled-components';
import { CardAsk } from '../../../card/CardAsk';
import { LoadingContainer } from '../../loading/LoadingContainer';

interface RequestType {
  createdAt: string;
  questionId: number;
  status: string;
  title: string;
  type: string;
}
interface Props {
  detailPathName: string;
  data: RequestType[];
  isLoading: boolean;
}

export const MyAsk = ({ detailPathName, data, isLoading }: Props) => {
  return (
    <Container>
      <ContainerInner>
        <CardList>
          {isLoading ? (
            <LoadingContainer />
          ) : data.length === 0 ? (
            <Content>
              <Typography
                size="20"
                textAlign="center"
                letterSpacing="-1.5px"
                fontWeight="bold"
              >
                1:1 문의 내역이 없어요
              </Typography>
              <Typography size="12" textAlign="center" color="gray">
                고객 센터&gt;1:1 문의 탭에서
                <br />
                고객님의 궁금하신 점을 풀어주세요!
              </Typography>
            </Content>
          ) : (
            data.map((i) => (
              <CardAsk
                detailPathName={detailPathName}
                key={i.questionId}
                data={i}
              />
            ))
          )}
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
  height: 100%;
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
  min-height: 1px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px 0;
  padding-bottom: 70px;
`;
