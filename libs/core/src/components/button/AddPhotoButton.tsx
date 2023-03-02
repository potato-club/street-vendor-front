import styled from 'styled-components';
import { FieldErrorsImpl } from 'react-hook-form';
import { customColor } from '../../constants';

interface ButtonProps {
  onClick?: () => void;
  errors: Partial<FieldErrorsImpl>;
}

export const AddPhotoButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick} type="button">
      <AddIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 12H0V14H25V12Z" fill={customColor.orange2} />
          <path d="M11 0L11 25H13L13 0H11Z" fill={customColor.orange2} />
        </svg>
      </AddIcon>
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
  position: relative;
  background: ${customColor.beige};
  border-radius: 12px;
`;
const AddIcon = styled.div``;
