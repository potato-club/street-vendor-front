import styled from 'styled-components';

import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';
import { Typography, customColor } from '@street-vendor/core';

interface InputProps {
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors?: Partial<FieldErrorsImpl>;
  defaultValue?: string;
  shadow?: boolean;
}

export const InputPhoneNumber = (props: InputProps) => {
  function phoneNumberMaxLength(e: any) {
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, 11);
    }
  }

  return (
    <Wrapper>
      <Label>
        <Typography size="16" letterSpacing="-0.5px">
          전화번호
        </Typography>
      </Label>

      <PhoneBoxWrapper>
        <PhonetextLeftBox>010</PhonetextLeftBox>
        <PhonetextRightInputBox
          type="number"
          placeholder={props.placeholder ?? "'-'를 제외하고 입력"}
          {...props.register(props.name, {
            valueAsNumber: true,
          })}
          defaultValue={props.defaultValue}
          shadow={props.shadow}
          maxLength={11}
          onChange={phoneNumberMaxLength}
        />
      </PhoneBoxWrapper>

      {props.errors?.[props.name] && (
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

const PhoneBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 22px;
`;

const PhonetextLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  font-weight: bold;
`;

const Error = styled.span``;
const PhonetextRightInputBox = styled.input<{ shadow?: boolean }>`
  width: 70%;
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
  :focus {
    outline: 2px solid ${customColor.orange3};
  }
  box-shadow: ${({ shadow }) => shadow && 'inset 0 0 7px rgba(0, 0, 0, 0.161)'};
`;
