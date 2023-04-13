import { useLoading } from '@street-vendor/core';
import { useQueryEditMyProfileImage } from '../../../hooks/query/my-page/useQueryEditMyProfileImage';
import { useRef } from 'react';

export const useProfileImage = () => {
  const { mutate } = useQueryEditMyProfileImage();
  const { loadingOff, loadingOn } = useLoading();

  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleClickUploadFile = () => {
    fileUploadRef.current?.click();
  };

  const handleChangeInputFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files !== null) {
      loadingOn();
      console.log('파일명', event.target.files[0].name);
      console.log('파일정보', event.target.files[0]);
      mutate(event.target.files[0]);
      event.target.value = '';
      loadingOff();
    }
  };

  return { fileUploadRef, handleClickUploadFile, handleChangeInputFile };
};
