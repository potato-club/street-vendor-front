import { customColor } from 'libs/core/src/constants';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';
import { AskGoInquiry } from './askQuestion/AskGoInquiry';
import { AskQuestionBox } from './askQuestion/AskQuestionBox';
import { AppBarLayout } from '@street-vendor/core';

interface Props {
  isLoading: boolean;
  data: { content: string; imageUrl: string; title: string }[];
  pathName: string;
}

export const AskQuestionContainer = ({ isLoading, data, pathName }: Props) => {
  const handleRouter = () => {
    Router.push(pathName);
  };

  return (
    <Container>
      <AppBarLayout title="자주 하는 질문" search home>
        <AskGoInquiry handleRouter={handleRouter} />
        <AskQuestionList>
          {isLoading ? (
            <></>
          ) : (
            <>
              {data.map((i, id) => (
                <AskQuestionBox
                  key={id}
                  questionLabel={i.title}
                  answerContent={i.content}
                />
              ))}
            </>
          )}
        </AskQuestionList>
      </AppBarLayout>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
