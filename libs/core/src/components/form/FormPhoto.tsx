import styled from 'styled-components';
import { Typography } from '../Typography';
import { FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { AddPhotoButton } from '../button/AddPhotoButton';
import { AddedPhotoButton } from '../button/AddedPhotoButton';
import { useState } from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const FormPhoto = (props: InputProps) => {
  const [images, setImages] = useState<string[]>([]);
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
      </Label>
      <Images>
        {images.map((i, id) => (
          <AddedPhotoButton key={id + 1} src={i} />
        ))}
        {images.length < 3 && (
          <AddPhotoButton
            key={images.length}
            value={`${props.value}.${images.length}`}
            register={props.register}
            setImages={(image: string) => {
              setImages((prev) => [...prev, image]);
            }}
          />
        )}
      </Images>
      <Typography size="12" color="darkGray" letterSpacing="-0.5px">
        {props.placeholder}
      </Typography>
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
