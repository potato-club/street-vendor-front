import styled from 'styled-components';
import { AskSelect } from '../../../form/AskSelect';
import { useForm } from 'react-hook-form';
import { AskInput } from '../../../form/AskInput';
import { AskTextarea } from '../../../form/AskTextarea';
import { AskPhoto } from '../../../form/AskPhoto';
import { AskEmail } from '../../../form/AskEmail';

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
          register={register}
          errors={errors}
        />
        <AskTextarea
          register={register}
          errors={errors}
          watch={watch}
        />
      </AskContent>
      <AskImg>
        <AskPhoto 
          register={register}
          errors={errors}/>
      </AskImg>
      <AskConnect>
        <AskEmail
          register={register}
          errors={errors}/>
      </AskConnect>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px 0;
  width: 100%;
  padding:0 7%;
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
const AskConnect = styled.div`
  display: flex;
  width: 100%;
`;
