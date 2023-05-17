import Router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { ReadAnswerBox } from '../../../box/ReadAnswerBox';
import { ReadImageBox } from '../../../box/ReadImageBox';
import { ReadLabelBox } from '../../../box/ReadLabelBox';
import { ReadStretchBox } from '../../../box/ReadStretchBox';
import { BasicButton } from '../../../button/BasicButton';
import { Typography } from '../../../Typography';
import { LoadingContainer } from '../../loading/LoadingContainer';

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
}

export const AskDetail = ({ pathName, data, isLoading }: Props) => {
  const handleRouter = () => {
    Router.push(pathName + '/my');
  };
  !isLoading && console.log(data);

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <ContainerInner>
          <AnswerType>
            <ReadLabelBox label="문의 유형" content={data[0].type} />
          </AnswerType>
          <AnswerContent>
            <ReadLabelBox label="문의 내용" content={data[0].title} />
            <ReadStretchBox content={data[0].content} marginTop={20} />
          </AnswerContent>
          <AnswerImage>
            <ReadImageBox label="첨부 사진" images={data[0].images} />
          </AnswerImage>
          {data.length !== 1 && (
            <Answer>
              <ReadAnswerBox label="답변" content={data[1].content} />
              <BasicButton
                backgroundColor="orange2"
                height={58}
                onClick={handleRouter}
              >
                <EndButton>
                  <Typography size="20" letterSpacing="-1.0px" color="white">
                    문의 종료하기
                  </Typography>
                </EndButton>
              </BasicButton>
            </Answer>
          )}
        </ContainerInner>
      )}
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
const EndButton = styled.div`
  background: none;
`;
