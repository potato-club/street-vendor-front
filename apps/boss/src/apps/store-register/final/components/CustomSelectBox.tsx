import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';

interface Props {
  width?: number;
  content: string;
}
interface StyleProps {
  width: number;
}

export const CustomSelectBox = ({ width, content }: Props) => {
  return (
    <Box width={width}>
      <Content>
        <Typography size="12" letterSpacing="-1px">
          {content}
        </Typography>
      </Content>
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
    </Box>
  );
};

const Box = styled.button<StyleProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  height: 48px;
  background: ${customColor.beige};
  border-radius: 12px;
  padding: 0 16px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;
const Content = styled.div``;
