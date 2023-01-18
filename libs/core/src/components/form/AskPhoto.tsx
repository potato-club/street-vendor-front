import styled from 'styled-components';
import { Typography } from '../Typography';
import { FieldErrorsImpl } from 'react-hook-form';
import { AddPhotoButton } from '../button/AddPhotoButton';
import { AddedPhotoButton } from '../button/AddedPhotoButton';

interface InputProps {
  errors: Partial<FieldErrorsImpl>;
}

export const AskPhoto = (props: InputProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          첨부 사진
        </Typography>
      </Label>
      <Images>
        <AddedPhotoButton src={''} errors={props.errors} />
        <AddPhotoButton errors={props.errors} />
      </Images>
      <Typography size="12" color="darkGray" letterSpacing="-0.5px">
        사진은 최대 3장까지 등록 가능합니다.
      </Typography>
      {props.errors['askTitle'] && (
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
  gap: 12px 0;
`;
const Label = styled.label``;
const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 18px;
`;
const Error = styled.span``;
