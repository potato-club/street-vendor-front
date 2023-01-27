import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@street-vendor/core';
import { useSpring, animated } from 'react-spring';

interface BoxProps {
  answerLabel: string;
  isClicked: boolean;
  children: React.ReactNode;
}

interface BoxStyle {
  isClicked: boolean;
}

export const AskAnswerBox = (props: BoxProps) => {
  const anime = useSpring(
    props.isClicked
      ? {
          from: { maxHeight: '0px' },
          to: { maxHeight: '250px' },
          config: { duration: 300 },
        }
      : {
          from: { maxHeight: '250px' },
          to: { maxHeight: '0px' },
          config: { duration: 300 },
        }
  );
  return (
    <Answer isClicked={props.isClicked} style={anime}>
      <AnswerInner>
        <AnswerLabel>
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
                d="M10.5649 22H8.53369L14.4087 6H16.4087L22.2837 22H20.2524L15.4712 8.53125H15.3462L10.5649 22ZM11.3149 15.75H19.5024V17.4687H11.3149V15.75Z"
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
            {props.answerLabel}
          </Typography>
        </AnswerLabel>
        <AnswerContent>{props.children}</AnswerContent>
      </AnswerInner>
    </Answer>
  );
};

const Answer = styled(animated.article)<BoxStyle>`
  display: flex;
  background: transparent;
  width: 100%;
  max-height: ${(props) => (props.isClicked ? '205px' : '0px')};
  justify-content: center;
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
const AnswerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 390px;
  padding-top: 20px;
  gap: 16px 0;
`;
const AnswerLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  padding: 0 7%;
  align-items: center;
`;
const AnswerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 7% 0 calc(7% + 46px);
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
`;
