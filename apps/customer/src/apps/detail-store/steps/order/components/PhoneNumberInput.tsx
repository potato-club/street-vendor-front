import styled from 'styled-components';
import { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { customColor, Typography } from '@street-vendor/core';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';


interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  control: Control<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
}

export const PhoneNumberInput = ({ name, control, label, placeholder, errors }: InputProps) => {
  return (
    <Wrapper>
      {label && (
        <Label>
          <Typography size="16" letterSpacing="-0.5px">
            {label}
          </Typography>
        </Label>
      )}
      <Input
        country="KR"
        name={name}
        control={control}
        placeholder={placeholder}
      />
      {/* 전화번호 정규식 넣으실거면 ↓↓↓
      var tel = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
      */}
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

// placeHolder 를 그냥쓰면 라이브러리 내에서 타입오류를 발생시켜서 attrs 를 사용하였음.
const Input = styled(PhoneInput).attrs(
  ({ placeholder }: { placeholder: string }) => ({
    placeholder,
  })
)`
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
