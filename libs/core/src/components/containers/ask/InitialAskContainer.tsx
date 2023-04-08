import Router from 'next/router';
import styled from 'styled-components';
import { AskButton } from '../../button/AskButton';
import { AppBarLayout, Typography } from '@street-vendor/core';

interface Props {
  pathName: string;
}

export const InitialAskContainer = (props: Props) => {
  const handleRouter = () => {
    Router.push(props.pathName);
  };
  return (
    <Wrapper>
      <AppBarLayout title="1:1 문의" search home>
        <Container>
          <ContainerInner>
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
                마이 페이지나 고객 센터&gt;1:1 문의 탭에서
                <br />
                고객님의 궁금하신 점을 풀어주세요!
              </Typography>
            </Content>
            <AskButtons>
              <AskButton
                content="1:1 문의"
                background="orange3"
                onClick={handleRouter}
              />
            </AskButtons>
          </ContainerInner>
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
  width: 100%;
  max-width: 390px;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 7%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 12px 0;
`;
const AskButtons = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  margin-bottom: 54px;
  bottom: 0px;
  left: 50%;
  padding: 0 7%;
  transform: translate(-50%, 0);
`;
