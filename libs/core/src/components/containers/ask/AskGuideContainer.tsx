import Router from 'next/router';
import styled from 'styled-components';
import { BasicButton } from '../../button/BasicButton';
import { AppBarLayout, Typography } from '@street-vendor/core';

interface Props {
  inquiryPathName: string;
  questionPathName: string;
}

export const AskGuideContainer = (props: Props) => {
  const handleInquiryRouter = () => {
    Router.push(props.inquiryPathName);
  };
  const handleQuestionRouter = () => {
    Router.push(props.questionPathName);
  };
  return (
    <Wrapper>
      <AppBarLayout title="고객센터" search home>
        <Container>
          <ContainerInner>
            <Typography size="20" letterSpacing="-1.0px" fontWeight="bold">
              손안의 노점 고객 센터 안내
            </Typography>
            <ContentBox>
              <Content>
                <Typography size="20" letterSpacing="-1.5px">
                  1:1 문의
                </Typography>
                <Text>
                  <Typography size="12" letterSpacing="-1.0px" color="darkGray">
                    고객님의 질문을 정성스럽게 답변해드립니다.
                  </Typography>
                  <Time>
                    <Typography
                      size="12"
                      letterSpacing="-1.0px"
                      color="darkGray"
                    >
                      월~토요일
                    </Typography>
                    <Typography
                      size="12"
                      letterSpacing="-1.0px"
                      color="darkGray"
                    >
                      오전 9시~오후 5시
                    </Typography>
                  </Time>
                </Text>
              </Content>
              <BasicButton
                backgroundColor="orange3"
                padding={18}
                onClick={handleInquiryRouter}
                style={{
                  boxShadow: '0px 3px 6px 0px #00000025',
                }}
              >
                <Typography size="16" fontWeight="bold" color="beige">
                  1:1 문의
                </Typography>
              </BasicButton>
            </ContentBox>
            <ContentBox>
              <Content>
                <Typography size="20" letterSpacing="-1.5px">
                  자주 하는 질문
                </Typography>
                <Text>
                  <Typography size="12" letterSpacing="-1.0px" color="darkGray">
                    고객님들이 자주 묻는 질문을 적어보았습니다.
                  </Typography>
                </Text>
              </Content>
              <BasicButton
                backgroundColor="orange3"
                padding={18}
                onClick={handleQuestionRouter}
                style={{
                  boxShadow: '0px 3px 6px 0px #00000025',
                }}
              >
                <Typography
                  size="16"
                  fontWeight="bold"
                  letterSpacing="-1.0px"
                  color="beige"
                >
                  자주 하는 질문
                </Typography>
              </BasicButton>
            </ContentBox>
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
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  height: 100%;
  margin: 0 auto;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 7% 0;
  gap: 24px 0;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;
const Time = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
`;
