import { customColor } from '../../constants';
import { Typography } from '../Typography';
import styled, { css } from 'styled-components';
import { useState } from 'react';

interface BoxProps {
  content: string;
  marginTop?: number;
}
interface BoxStyle {
  marginTop?: number;
  isFold?: boolean;
}

export const ReadStretchBox = (props: BoxProps) => {
  const [isFold, setIsFold] = useState(true);
  const commaFormat = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <Wrapper marginTop={props.marginTop}>
      <Box
        onClick={() => {
          setIsFold((prev) => !prev);
        }}
        isFold={isFold}
      >
        <Typography
          size="12"
          letterSpacing="-0.5px"
          textAlign="left"
          style={{ verticalAlign: 'top', height: '100%' }}
        >
          {props.content}
        </Typography>
        {isFold ? (
          <ArrowIcon>
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.83398 1L7.00098 5.183L12.167 1"
                stroke={customColor.orange2}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowIcon>
        ) : (
          <Length>
            <Typography size="12" color="darkGray">
              {commaFormat(props.content.length)}&nbsp;/&nbsp;
              {commaFormat(3000)}
            </Typography>
          </Length>
        )}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.article<BoxStyle>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;
  margin-top: ${(props) => props.marginTop}px;
`;
const Box = styled.button<BoxStyle>`
  position: relative;
  width: 100%;
  background: ${customColor.beige};
  border-radius: 12px;
  transition: height 0.3s ease;
  ${(props) =>
    props.isFold
      ? css`
          display: block;
          height: 48px;
          padding: 16px 52px 16px 18px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        `
      : css`
          display: flex;
          height: 225px;
          padding: 16px 18px;
          text-align: left;
        `}
`;
const ArrowIcon = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translate(0, -50%);
  pointer-events: none;
`;
const Length = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 24px;
`;
