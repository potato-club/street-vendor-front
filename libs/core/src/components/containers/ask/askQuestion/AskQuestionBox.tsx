import { Typography } from '@street-vendor/core';
import { customColor } from 'libs/core/src/constants';
import { useState } from 'react';
import styled from 'styled-components';
import { AskAnswerBox } from './AskAnswerBox';

interface BoxProps {
  questionLabel: string;
  answerContent: string;
}

export const AskQuestionBox = (props: BoxProps) => {
  const [isclicked, setIsclicked] = useState(false);
  return (
    <Wrapper>
      <Question
        onClick={() => {
          setIsclicked((prev) => !prev);
        }}
      >
        <QuestionInner>
          <QuestionContent>
            <QuestionLabel>
              <Icon>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                    fill="#FF8B00"
                  />
                  <path
                    d="M15 29.5C23.0081 29.5 29.5 23.0081 29.5 15C29.5 6.99187 23.0081 0.5 15 0.5C6.99187 0.5 0.5 6.99187 0.5 15C0.5 23.0081 6.99187 29.5 15 29.5Z"
                    stroke="#FF8B00"
                  />
                  <path
                    d="M14.1592 17H16.2842L18.0654 19.3437L18.5342 19.9687L21.1904 23.5H19.0654L17.3154 21.1562L16.8779 20.5625L14.1592 17ZM21.8467 14C21.8467 15.6875 21.542 17.1458 20.9326 18.375C20.3232 19.6042 19.4873 20.5521 18.4248 21.2188C17.3623 21.8854 16.1488 22.2187 14.7842 22.2187C13.4196 22.2187 12.2061 21.8854 11.1436 21.2188C10.0811 20.5521 9.24512 19.6042 8.63574 18.375C8.02637 17.1458 7.72168 15.6875 7.72168 14C7.72168 12.3125 8.02637 10.8542 8.63574 9.625C9.24512 8.39583 10.0811 7.44792 11.1436 6.78125C12.2061 6.11458 13.4196 5.78125 14.7842 5.78125C16.1488 5.78125 17.3623 6.11458 18.4248 6.78125C19.4873 7.44792 20.3232 8.39583 20.9326 9.625C21.542 10.8542 21.8467 12.3125 21.8467 14ZM19.9717 14C19.9717 12.6146 19.7399 11.4453 19.2764 10.4922C18.818 9.53906 18.1956 8.81771 17.4092 8.32812C16.6279 7.83854 15.7529 7.59375 14.7842 7.59375C13.8154 7.59375 12.9378 7.83854 12.1514 8.32812C11.3701 8.81771 10.7477 9.53906 10.2842 10.4922C9.82585 11.4453 9.59668 12.6146 9.59668 14C9.59668 15.3854 9.82585 16.5547 10.2842 17.5078C10.7477 18.4609 11.3701 19.1823 12.1514 19.6719C12.9378 20.1615 13.8154 20.4062 14.7842 20.4062C15.7529 20.4062 16.6279 20.1615 17.4092 19.6719C18.1956 19.1823 18.818 18.4609 19.2764 17.5078C19.7399 16.5547 19.9717 15.3854 19.9717 14Z"
                    fill="white"
                  />
                </svg>
              </Icon>
              <Typography
                size="16"
                letterSpacing="-1.5px"
                textAlign="left"
                style={{ wordBreak: 'keep-all' }}
              >
                {props.questionLabel}
              </Typography>
            </QuestionLabel>
            <Arrow>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.65189 0.404796C7.48204 0.40439 7.31235 0.415079 7.14389 0.436796C7.01334 0.450087 6.88674 0.489224 6.77146 0.55193C6.65619 0.614635 6.55455 0.699654 6.47246 0.802033C6.39037 0.904411 6.32947 1.0221 6.29332 1.14825C6.25717 1.2744 6.24649 1.40648 6.26189 1.5368C6.30959 1.80109 6.45882 2.03622 6.67766 2.1919C6.8965 2.34757 7.16757 2.41142 7.43289 2.3698C8.81084 2.39193 10.1376 2.89573 11.1829 3.7938C11.8284 4.30938 12.3471 4.96605 12.6991 5.71338C13.0512 6.46071 13.2273 7.27879 13.2139 8.1048C13.2412 8.90961 13.0826 9.70989 12.7505 10.4435C12.4184 11.1771 11.9217 11.8243 11.2989 12.3348C10.2178 13.2303 8.83983 13.6872 7.43789 13.6148C7.17286 13.5721 6.90166 13.6348 6.68214 13.7893C6.46263 13.9438 6.31218 14.1779 6.26289 14.4418C6.24618 14.5724 6.25569 14.7049 6.29087 14.8318C6.32606 14.9586 6.38621 15.0771 6.4678 15.1804C6.54938 15.2837 6.65076 15.3697 6.766 15.4333C6.88124 15.4969 7.00801 15.5368 7.13889 15.5508C9.1329 15.7097 11.1104 15.0856 12.6519 13.8108C13.4996 13.1257 14.1782 12.2547 14.6352 11.2652C15.0921 10.2757 15.3151 9.19434 15.2869 8.1048C15.3009 6.99542 15.0609 5.89754 14.5853 4.89519C14.1097 3.89284 13.4111 3.01259 12.5429 2.3218C11.7059 1.63942 10.7517 1.11519 9.72689 0.774796C9.05889 0.543473 8.35867 0.418615 7.65189 0.404796Z"
                  fill="#FFAF3A"
                />
                <path
                  d="M14.309 6.96387H1.26502C0.997913 6.97197 0.744926 7.08571 0.561575 7.28012C0.378224 7.47453 0.279484 7.73374 0.287023 8.00087C0.279754 8.26782 0.378613 8.52677 0.561936 8.72097C0.745258 8.91516 0.998091 9.02876 1.26502 9.03687H14.309C14.576 9.02876 14.8288 8.91516 15.0121 8.72097C15.1954 8.52677 15.2943 8.26782 15.287 8.00087C15.2946 7.73374 15.1958 7.47453 15.0125 7.28012C14.8291 7.08571 14.5761 6.97197 14.309 6.96387Z"
                  fill="#FFAF3A"
                />
              </svg>
            </Arrow>
          </QuestionContent>
        </QuestionInner>
      </Question>
      <AskAnswerBox answerContent={props.answerContent} isclicked={isclicked} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Question = styled.button`
  display: flex;
  width: 100%;
  height: 67px;
  background: ${customColor.white};
  box-shadow: 0px 3px 6px 0px ${customColor.black + '25'};
  justify-content: center;
  padding: 0px;
`;
const QuestionInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-width: 390px;
`;
const QuestionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 0 10px;
  padding: 0 7%;
  align-items: center;
`;
const QuestionLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  align-items: center;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
`;
const Arrow = styled.div`
  width: 15px;
  height: 15px;
`;
