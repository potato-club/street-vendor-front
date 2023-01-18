import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import {
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  watch: UseFormWatch<FieldValues>;
}

export const AskTextarea = (props: InputProps) => {
  const commaFormat = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Wrapper>
      <Textarea
        placeholder={`문의 내용을 작성해주세요.\n최선을 다해 답변해드리겠습니다!:)`}
        maxLength={3000}
        {...props.register('askContent')}
        defaultValue={''}
      />
      {props.errors['askContent'] && (
        <Error>
          <Typography size="16">에러Textarea</Typography>
        </Error>
      )}
      <MaxLength>
        <Typography size="12" color="gray" letterSpacing="-0.5px">
          {props.watch('askContent') === undefined
            ? 0
            : commaFormat(props.watch('askContent').length)}
          &nbsp;/&nbsp;{commaFormat(3000)}
        </Typography>
      </MaxLength>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  position: relative;
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
const Error = styled.span``;
const MaxLength = styled.span`
  position: absolute;
  bottom: 20px;
  right: 24px;
  pointer-events: none;
`;
