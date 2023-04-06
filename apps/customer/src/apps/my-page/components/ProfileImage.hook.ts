import { useQueryEditMyProfileImage } from '../../../hooks/query/my-page/useQueryEditMyProfileImage';
import { useRef } from 'react';

export const useProfileImage = () => {
  const { mutate } = useQueryEditMyProfileImage();
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleClickUploadFile = () => {
    fileUploadRef.current?.click();
  };

  const handleChangeInputFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files !== null) {
      console.log('파일명', event.target.files[0].name);
      console.log('파일정보', event.target.files[0]);
      mutate(event.target.files[0]);
      event.target.value = '';
    }
  };

  return { fileUploadRef, handleClickUploadFile, handleChangeInputFile };
};
