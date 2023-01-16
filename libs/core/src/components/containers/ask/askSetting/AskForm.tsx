import styled from 'styled-components';
import { AskSelect } from '../../../form/AskSelect';
import { useForm } from 'react-hook-form';
import { AskInput } from '../../../form/AskInput';
import { AskTextarea } from '../../../form/AskTextarea';
import { AskPhoto } from '../../../form/AskPhoto';
import { AskAgree } from '../../../form/AskAgree';
import { useState } from 'react';
import { AskSubmit } from '../../../form/AskSubmit';

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
      <AskType>
        <AskSelect
          options={[
            { name: '조금주', value: 'human' },
            { name: '조흥', value: 'dog' },
          ]}
          register={register}
          errors={errors}
        />
      </AskType>
      <AskContent>
        <AskInput register={register} errors={errors} />
        <AskTextarea register={register} errors={errors} watch={watch} />
      </AskContent>
      <AskImg>
        <AskPhoto errors={errors} />
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
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 26px 0;
  overflow-y: auto;
`;
const AskType = styled.div`
  display: flex;
  width: 100%;
  padding: 0 7%;
`;
const AskContent = styled.div`
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
