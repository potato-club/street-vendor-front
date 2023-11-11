import styled from 'styled-components';
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import {
  customColor,
  TimePickerModal,
  Typography,
  useModal,
} from '@street-vendor/core';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  watch: UseFormWatch<FieldValues>;
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
          // {...props.register(props.name)}
          value={props.watch(props.name) || ''}
          readOnly
        />
      </Wrapper>
      <TimePickerModal
        name={props.name}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        setValue={props.setValue}
      />
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
