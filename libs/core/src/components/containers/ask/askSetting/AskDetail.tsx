import Router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { ReadAnswerBox } from '../../../box/ReadAnswerBox';
import { ReadImageBox } from '../../../box/ReadImageBox';
import { ReadLabelBox } from '../../../box/ReadLabelBox';
import { ReadStretchBox } from '../../../box/ReadStretchBox';
import { BasicButton } from '../../../button/BasicButton';
import { Typography } from '../../../Typography';

interface Props {
  content?: string;
  pathName: string;
}

export const AskDetail = (props: Props) => {
  const handleRouter = () => {
    Router.push(props.pathName + '/my');
  };
  const [isAnswered, setIsAnswered] = useState(true);
  return (
    <Container>
      <ContainerInner>
        <AnswerType>
          <ReadLabelBox label="문의 유형" content="결제/환불" />
        </AnswerType>
        <AnswerContent>
          <ReadLabelBox label="문의 내용" content="환불이 안돼요ㅜㅜㅜ" />
          <ReadStretchBox
            content="영업일이 다 지났지만 돈이 들어오지 않았습니다..."
            marginTop={20}
          />
        </AnswerContent>
        <AnswerImage>
          <ReadImageBox label="첨부 사진" images={[{ src: '앙' }]} />
        </AnswerImage>
        {isAnswered && (
          <Answer>
            <ReadAnswerBox label="답변" content="내가 돈 먹었다악 꿀꺽" />
            <BasicButton backgroundColor="orange2" height={58}>
              <EndButton onClick={handleRouter}>
                <Typography size="20" letterSpacing="-1.0px" color="white">
                  문의 종료하기
                </Typography>
              </EndButton>
            </BasicButton>
          </Answer>
        )}
      </ContainerInner>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow-y: auto;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  gap: 26px 0;
`;
const AnswerType = styled.div`
  display: flex;
  padding: 0 7%;
`;
const AnswerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7%;
`;
const AnswerImage = styled.div`
  display: flex;
  padding: 0 7%;
`;
const Answer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7%;
  gap: 70px 0;
  margin-bottom: 72px;
`;
const EndButton = styled.button`
  background: none;
`;
