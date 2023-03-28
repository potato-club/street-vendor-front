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

interface Props {
  mutate: UseMutateFunction<any, unknown, FieldValues, unknown>;
}

export const AskForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  const isFilled =
    getValues('askSelect') !== '' &&
    getValues('askInput') !== '' &&
    getValues('askTextarea') !== '';

  const submit = (data: FieldValues) => {
    if (isAgreeChecked && isFilled) {
      data.askPhoto.pop();
      props.mutate(data);
    } else {
      if (!isAgreeChecked) {
        toast.error('약관동의를 해주세요');
      } else {
        toast.error('내용을 모두 입력해주세요');
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormInner>
        <AskType>
          <FormSelect
            label="문의 유형"
            placeholder="유형을 선택해주세요."
            value="askSelect"
            options={[
              { name: '조금주', value: 'human' },
              { name: '조흥', value: 'dog' },
            ]}
            register={register}
            errors={errors}
          />
        </AskType>
        <AskContents>
          <FormContent
            label="문의 내용"
            type="text"
            placeholderInput="제목을 작성해주세요."
            valueInput="askInput"
            placeholderText={`문의 내용을 작성해주세요.\n최선을 다해 답변해드리겠습니다!:)`}
            valueText="askTextarea"
            register={register}
            errors={errors}
            watch={watch}
          />
        </AskContents>
        <AskImg>
          <FormPhoto
            label="첨부 사진"
            placeholder="사진은 최대 3장까지 등록 가능합니다."
            value="askPhoto"
            errors={errors}
            register={register}
            watch={watch}
          />
        </AskImg>
        <AskCheck>
          <FormAgree
            isAgreeChecked={isAgreeChecked}
            onClickAgreeContent={() => {}}
            onClickCheckBox={() => {
              setIsAgreeChecked((prev) => !prev);
            }}
          />
          <FormSubmit isAgreeChecked={isFilled && isAgreeChecked} />
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
