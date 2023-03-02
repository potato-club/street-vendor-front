import styled from 'styled-components';
import { Typography } from '../Typography';
import { FieldErrorsImpl } from 'react-hook-form';
import { AddPhotoButton } from '../button/AddPhotoButton';
import { AddedPhotoButton } from '../button/AddedPhotoButton';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  errors: Partial<FieldErrorsImpl>;
}

export const FormPhoto = (props: InputProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
      </Label>
      <Images>
        <AddedPhotoButton src={''} errors={props.errors} />
        <AddPhotoButton errors={props.errors} />
      </Images>
      <Typography size="12" color="darkGray" letterSpacing="-0.5px">
        {props.placeholder}
      </Typography>
      {props.errors[props.value] && (
        <Error>
          <Typography size="16">에러Photo</Typography>
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
