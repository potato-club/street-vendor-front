import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const AskEmail = (props: InputProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          이메일
        </Typography>
      </Label>
      <Input
        type={'email'}
        placeholder="이메일을 작성해 주세요."
        {...props.register('askEmail')}
      />
      {props.errors['askEmail'] && (
        <Error>
          <Typography size="16">에러Email</Typography>
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
  }
`;
const Error = styled.span``;
