import { Typography } from '@street-vendor/core';
import { customColor } from 'libs/core/src/constants';
import styled from 'styled-components';

interface ButtonProps {
  handleRouter: () => void;
}

export const AskGoInquiry = (props: ButtonProps) => {
  return (
    <GoInquiry>
      <Typography
        size="16"
        letterSpacing="-1.0px"
        fontWeight="bold"
        color="darkGray"
      >
        궁금한게 아직 안풀렸나요? :(
      </Typography>
      <ButtonGoInquiry onClick={props.handleRouter}>
        <Typography size="16" letterSpacing="-1.5px" color="orange2">
          1:1 문의 이동
        </Typography>
      </ButtonGoInquiry>
    </GoInquiry>
  );
};

const GoInquiry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
  margin: 29px 0 26px;
  padding: 0 7%;
  align-items: center;
`;
const ButtonGoInquiry = styled.button`
  background: transparent;
  border: 1px solid ${customColor.orange2};
  width: 118px;
  height: 35px;
  border-radius: 20px;
`;
