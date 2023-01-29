import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AskSelect,
  AskContent,
  AskPhoto,
  AskAgree,
  AskSubmit,
} from '@street-vendor/core';

export const AskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  return (
    <Form>
      <FormInner>
        <AskType>
          <AskSelect
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
          <AskContent
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
          <AskPhoto
            label="첨부 사진"
            placeholder="사진은 최대 3장까지 등록 가능합니다."
            value="askPhoto"
            errors={errors}
          />
        </AskImg>
        <AskCheck>
          <AskAgree
            isAgreeChecked={isAgreeChecked}
            onClickAgreeContent={() => {}}
            onClickCheckBox={() => {
              setIsAgreeChecked((prev) => !prev);
            }}
          />
          <AskSubmit isAgreeChecked={isAgreeChecked} onClick={() => {}} />
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
