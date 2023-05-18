import { customColor, Typography } from '@street-vendor/core';
import { customColorType } from 'libs/core/src/constants/customColor';
import styled from 'styled-components';

interface Props {
  setInit: () => void;
}

export const DeleteButton = ({ setInit }: Props) => {
  return (
    <Button type="button" onClick={setInit}>
      <Typography size="20" letterSpacing="-1.5px">
        전체 삭제
      </Typography>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${customColor.beige};
`;
