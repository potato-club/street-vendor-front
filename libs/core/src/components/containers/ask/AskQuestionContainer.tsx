import { customColor } from 'libs/core/src/constants';
import Router from 'next/router';
import styled from 'styled-components';
import { Typography } from '../../Typography';
import { AskGoInquiry } from './askQuestion/AskGoInquiry';
import { AskQuestionBox } from './askQuestion/AskQuestionBox';

interface Props {
  pathName: string;
}

export const AskQuestionContainer = (props: Props) => {
  const handleRouter = () => {
    Router.push(props.pathName);
  };
  return (
    <Container>
      <AskGoInquiry handleRouter={handleRouter} />
      <AskQuestionList>
        <AskQuestionBox
          questionLabel="사장님과 손님 페이지는 무엇인가요?"
          answerLabel="가게 위치 등록 설명"
        >
          <AnswerContent>
            <Typography
              size="12"
              letterSpacing="-1.0px"
              textAlign="left"
              style={{ wordBreak: 'keep-all', lineHeight: '20px' }}
            >
              - 또한 근처 랜드마크등을 등록 할 수 있기에,그런 기능을 잘 활용하여
              주시길 바랍니다.
            </Typography>
          </AnswerContent>
        </AskQuestionBox>
        <AskQuestionBox
          questionLabel="가게 위치가 정확하지 않아요"
          answerLabel="가게 위치 등록 설명"
        >
          <AnswerContent>
            <Typography
              size="12"
              letterSpacing="-1.0px"
              textAlign="left"
              style={{ wordBreak: 'keep-all', lineHeight: '20px' }}
            >
              - 사장님께서 처음 가게 위치를 등록하실때 지도로 좌표를 찍어
              등록하게 됩니다. 가게 리스트와 마이노점에서 수정도 가능합니다.
            </Typography>
            <Typography
              size="12"
              letterSpacing="-1.0px"
              textAlign="left"
              style={{ wordBreak: 'keep-all', lineHeight: '20px' }}
            >
              - 또한 근처 랜드마크등을 등록 할 수 있기에,그런 기능을 잘 활용하여
              주시길 바랍니다.
            </Typography>
          </AnswerContent>
        </AskQuestionBox>
      </AskQuestionList>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${customColor.beige};
  overflow-y: auto;
`;
const AskQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;
const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  margin-bottom: 20px;
`;
