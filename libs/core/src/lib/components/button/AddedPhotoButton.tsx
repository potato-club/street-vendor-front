import styled from 'styled-components';
import { customColor } from '../../constants';
import { FieldErrorsImpl } from 'react-hook-form';

interface ButtonProps {
  src: string;
  onClick?: () => void;
  errors: Partial<FieldErrorsImpl>;
}
interface ButtonStyledProps {
  src: string;
}

export const AddedPhotoButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick} type="button">
      <Img src={props.src} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  position: relative;
  background: ${customColor.beige};
  border-radius: 12px;
`;
const Img = styled.image<ButtonStyledProps>`
  width: 100%;
  height: 100%;
`;
