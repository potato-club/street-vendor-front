import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const AskInput = (props: InputProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          문의 내용
        </Typography>
      </Label>
      <Input
        type={'text'}
        placeholder="제목을 작성해주세요."
        maxLength={32}
        {...props.register('askTitle')}
      />
      {props.errors['askTitle'] && (
        <Error>
          <Typography size="16">에러Title</Typography>
        </Error>
      )}
    </Wrapper>
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
  font-size: 14px;
  letter-spacing: -0.5px;
  font-family: inherit;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
    /* 나중에 darkgray로 바꾸기 */
  }
`;
const Error = styled.span``;
