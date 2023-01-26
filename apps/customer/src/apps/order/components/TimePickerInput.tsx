import styled from 'styled-components';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { customColor, Typography } from '@street-vendor/core';
import { useModal } from '../../../hooks';
import { TimePickerModal } from './timePickerModal';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const TimePickerInput = (props: InputProps) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <Wrapper onClick={() => handleOpenModal()}>
        {props.label && (
          <Label>
            <Typography size="16" letterSpacing="-0.5px">
              {props.label}
            </Typography>
          </Label>
        )}
        <Input
          placeholder={props.placeholder}
          {...props.register(props.name)}
        />
        {/* 전화번호 정규식 넣으실거면 ↓↓↓
      var tel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
      */}
        {props.errors[props.name] && (
          <Error>
            <Typography size="16">에러Title</Typography>
          </Error>
        )}
      </Wrapper>
      <TimePickerModal isOpen={isOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  margin-bottom: 12px;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
`;
const Error = styled.span``;
