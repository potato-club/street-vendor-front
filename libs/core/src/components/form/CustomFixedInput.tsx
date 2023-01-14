import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  // register: UseFormRegister<FieldValues>;
  // errors: Partial<FieldErrorsImpl>;
}

export const CustomFixedInput = (props: InputProps) => {
  return (
    <Wrapper>
      {props.label && (
        <Label>
          <Typography size="16" letterSpacing="-0.5px">
            {props.label}
          </Typography>
        </Label>
      )}
      <Button
        type="button"
        // {...props.register(props.name)}
      >
        {props.value}
      </Button>
      {/* {props.errors[props.name] && (
        <Error>
          <Typography size="16">에러Title</Typography>
        </Error>
      )} */}
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
const Button = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-family: inherit;
  justify-content: flex-start;
  align-items: center;
`;
const Error = styled.span``;
