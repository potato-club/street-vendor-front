import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const AskPhone = (props: InputProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          휴대폰 번호
        </Typography>
      </Label>
      <Input
        type={'text'}
        placeholder="010-1234-5678"
        {...props.register('askPhone')}
      />
      {props.errors['askPhone'] && (
        <Error>
          <Typography size="16">에러Phone</Typography>
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
