import React from 'react';
import { Typography, customColor } from '@street-vendor/core';
import styled from 'styled-components';

type Props = {
  id: string;
  label: string;
  name: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 *
 * @param id: string;
 * @param label: string
 * @param name: string (라디오버튼 그룹 이름)
 * @param selectedValue: string; (useState string 값)
 * @param onChange: (e => setUseState(e.target.value))
 *
 */

export function CustomRadioButton(props: Props) {
  const { id, label, name, selectedValue, onChange } = props;
  return (
    <Container>
      <RadioButton
        type="radio"
        name={name}
        id={id}
        value={id}
        onChange={onChange}
        checked={id === selectedValue}
      />
      <Label htmlFor={id}>
        <Typography
          size="16"
          fontWeight="bold"
          color={selectedValue === id ? 'white' : 'orange2'}
        >
          {label}
        </Typography>
      </Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  border-radius: 20px;
  padding: 8px 20px;
  background-color: ${customColor.beige};
`;

const RadioButton = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: ${customColor.orange2};
  }
`;
