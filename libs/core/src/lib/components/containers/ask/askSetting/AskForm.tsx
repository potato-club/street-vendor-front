import styled from 'styled-components';
import { AskSelect } from '../../../form/AskSelect';
import { useForm } from 'react-hook-form';
import { AskInput } from '../../../form/AskInput';
import { AskTextarea } from '../../../form/AskTextarea';
import { useState } from 'react';
import { Typography } from '../../../Typography';
import { AddPhotoButton } from '../../../button/AddPhotoButton';

export const AskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <Form>
      <AskType>
        <AskSelect
          label="문의 유형"
          placeholder="유형을 선택해주세요."
          options={[
            { name: '조금주', value: 'human' },
            { name: '조흥', value: 'dog' },
          ]}
          register={register}
          errors={errors}
        />
      </AskType>
      <AskContent>
        <AskInput
          label="문의 내용"
          placeholder="제목을 작성해주세요."
          maxLength={32}
          register={register}
          errors={errors}
        />
        <AskTextarea
          placeholder={`문의 내용을 작성해주세요.\n최선을 다해 답변해드리겠습니다:).`}
          maxLength={3000}
          register={register}
          errors={errors}
          watch={watch}
        />
      </AskContent>
      <AskImg>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          첨부 사진
        </Typography>
        <Images>
          <AddPhotoButton errors={errors} />
        </Images>
        <Typography size="12" color="darkGray" letterSpacing="-0.5px">
          사진은 최대 3장까지 등록 가능합니다.
        </Typography>
      </AskImg>
      <AskEmail></AskEmail>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px 0;
  width: 100%;
  overflow-y: auto;
`;
const AskType = styled.div`
  display: flex;
  width: 100%;
`;
const AskContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px 24px;
`;
const AskImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;
`;
const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 18px;
`;
const AskEmail = styled.div`
  display: flex;
  width: 100%;
`;
