import styled from 'styled-components';
import { customColor, Typography } from '@street-vendor/core';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const CustomInput = (props: InputProps) => {
  return (
    <Wrapper>
      {props.label && (
        <Label>
          <Typography size="16" letterSpacing="-0.5px">
            {props.label}
          </Typography>
        </Label>
      )}
      <Input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
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
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
`;
