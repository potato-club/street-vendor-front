import styled from 'styled-components';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { customColor } from '../../constants';
import { ChangeEvent } from 'react';

interface ButtonProps {
  register: UseFormRegister<FieldValues>;
  value: string;
  setImages: (image: string) => void;
}

export const AddPhotoButton = ({ value, register, setImages }: ButtonProps) => {
  const { onChange, ...rest } = register(value, { required: false });

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value[0] && e.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        setImages(String(fileReader.result));
      };
    }
  };

  return (
    <Wrapper>
      <FileButton
        type="file"
        id={value}
        accept="image/*"
        onChange={(e) => {
          addImage(e);
          onChange(e);
        }}
        {...rest}
      />
      <AddIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 12H0V14H25V12Z" fill={customColor.orange2} />
          <path d="M11 0L11 25H13L13 0H11Z" fill={customColor.orange2} />
        </svg>
      </AddIcon>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  position: relative;
`;
const FileButton = styled.input`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: none;
  position: relative;
  background: ${customColor.beige};
  border-radius: 12px;
  font-size: 0;
  &::file-selector-button {
    display: none;
  }
`;
const AddIcon = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
