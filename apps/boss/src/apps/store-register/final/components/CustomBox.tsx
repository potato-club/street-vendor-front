import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';

interface Props {
  content: string;
}

export const CustomBox = (props: Props) => {
  return (
    <Box>
      <Typography size="12">{props.content}</Typography>
    </Box>
  );
};

const Box = styled.article`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  align-items: center;
`;
