import styled from 'styled-components';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  FormAgree,
  FormContent,
  FormPhoto,
  FormSelect,
  FormSubmit,
} from '@street-vendor/core';
import { toast } from 'react-hot-toast';
import { UseMutateFunction } from 'react-query';
import { AskAgreeModal } from './AskAgreeModal';

interface Props {
  mutate: UseMutateFunction<any, unknown, FieldValues, unknown>;
}

export const AskForm = ({ mutate }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    setValue,
    getValues,
  } = useForm();

  const [isAskAgreeModalOpen, setIsAskAgreeModalOpen] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const submit = (data: FieldValues) => {
    if (isAgreeChecked && isValid) {
      data.images[data.images.length - 1].length === 0 && data.images.pop();
      const formDataImages = new FormData();
      for (let i = 0; i < data.images.length; i++) {
        formDataImages.append('imageFiles', data.images[i][0]);
      }
      delete data.images;
      mutate({ images: formDataImages, request: data });
      // delete data.images;
      // formData.append(
      //   'request',
      //   new Blob([JSON.stringify(data)], { type: 'application/json' })
      // );
      // mutateQuestion(formData);
    } else {
      if (!isValid) {
        toast.error('내용을 모두 입력해주세요');
      } else {
        toast.error('약관동의를 해주세요');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <AskAgreeModal
        closeModal={() => setIsAskAgreeModalOpen(false)}
        isModalOpen={isAskAgreeModalOpen}
      />
      <FormInner>
        <AskType>
          <FormSelect
            label="문의 유형"
            placeholder="유형을 선택해주세요."
            value="type"
            options={[
              { name: '주문', value: 'ORDER' },
              { name: '리뷰', value: 'REVIEW' },
              { name: '계정', value: 'ACCOUNT' },
              { name: '기타', value: 'ETC' },
            ]}
            register={register}
          />
        </AskType>
        <AskContents>
          <FormContent
            label="문의 내용"
            type="text"
            placeholderInput="제목을 작성해주세요."
            valueInput="title"
            placeholderText={`문의 내용을 작성해주세요.\n최선을 다해 답변해드리겠습니다!:)`}
            valueText="content"
            register={register}
            watch={watch}
          />
        </AskContents>
        <AskImg>
          <FormPhoto
            label="첨부 사진"
            placeholder="사진은 최대 3장까지 등록 가능합니다."
            value="images"
            register={register}
            watch={watch}
            setValue={setValue}
            getValues={getValues}
          />
        </AskImg>
        <AskCheck>
          <FormAgree
            isAgreeChecked={isAgreeChecked}
            onClickAgreeContent={() => setIsAskAgreeModalOpen(true)}
            onClickCheckBox={() => {
              setIsAgreeChecked((prev) => !prev);
            }}
          />
          <FormSubmit isAgreeChecked={isValid && isAgreeChecked} />
        </AskCheck>
      </FormInner>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow-y: scroll;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  gap: 26px 0;
`;
const AskType = styled.div`
  display: flex;
  width: 100%;
  padding: 0 7%;
`;
const AskContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px 24px;
  padding: 0 7%;
`;
const AskImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;
  padding: 0 7%;
`;
const AskCheck = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 26px 0;
  padding: 0 7%;
`;
