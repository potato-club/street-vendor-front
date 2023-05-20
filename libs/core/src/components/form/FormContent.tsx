import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';

interface ContentProps {
  label: string;
  type: string;
  placeholderInput: string;
  valueInput: string;
  placeholderText: string;
  valueText: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const FormContent = (props: ContentProps) => {
  const commaFormat = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
        <MaxLength>
          <Typography size="12" color="gray" letterSpacing="-0.5px">
            {props.watch(props.valueText) === undefined
              ? 0
              : commaFormat(props.watch(props.valueText).length)}
            &nbsp;/&nbsp;{commaFormat(3000)}
          </Typography>
        </MaxLength>
      </Label>
      <Input
        type={props.type}
        placeholder={props.placeholderInput}
        maxLength={32}
        {...props.register(props.valueInput, { required: true })}
      />
      <Textarea
        placeholder={props.placeholderText}
        maxLength={3000}
        {...props.register(props.valueText, { required: true })}
        defaultValue={''}
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
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: flex-end;
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
  margin-bottom: 20px;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
`;
const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 224px;
  padding: 17px 18px;
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
const MaxLength = styled.span`
  display: flex;
  bottom: 20px;
  right: 24px;
  pointer-events: none;
`;
