import { AppBarLayout } from '@street-vendor/core';
import Router from 'next/router';
import { UseMutateFunction } from 'react-query';
import styled from 'styled-components';
import { AskSelectButton } from '../../../button/AskSelectButton';
import { AskDetail } from '../askSetting/AskDetail';

interface RequestDetailQuestion {
  content: string;
  images: { imageUrl: string }[];
  title: string;
  type: string;
  writtenBy: string;
}
interface Props {
  pathName: string;
  data: RequestDetailQuestion[];
  isLoading: boolean;
  mutate: UseMutateFunction<any, unknown, void, unknown>;
}

export const AskDetailContainer = ({
  pathName,
  data,
  isLoading,
  mutate,
}: Props) => {
  const handleAskRouter = () => {
    Router.push(pathName);
  };
  const handleMyRouter = () => {
    Router.push(pathName + '/my');
  };

  return (
    <Wrapper>
      <AppBarLayout title="1:1 문의" search home>
        <Container>
          <ContainerInner>
            <TopBar>
              <AskSelectButton
                content="1:1 문의"
                isSelected={false}
                onClick={handleAskRouter}
              />
              <AskSelectButton
                content="나의 문의내역"
                isSelected={true}
                onClick={handleMyRouter}
              />
            </TopBar>
          </ContainerInner>
          <AskDetail
            pathName={pathName}
            data={data}
            isLoading={isLoading}
            mutate={mutate}
          />
        </Container>
      </AppBarLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 26px 0;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
  align-items: center;
  padding-top: 38px;
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 8%;
  padding: 0 7%;
`;
