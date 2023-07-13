import styled from 'styled-components';
import { customColor, CustomInput, Typography } from '@street-vendor/core';
import { useForm } from 'react-hook-form';
import { useQueryRegister } from '../../hooks/query/register/useQueryRegister';
import { InputPhoneNumber } from '../../components/input/InputPhoneNumber';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  // const { mutate } = useQueryRegister();

  return (
    <Container>
      <Typography size="32" fontWeight="bold" color="orange2">
        회원가입
      </Typography>
      <SubTitle>
        <Typography size="20" fontWeight="bold">
          손안의 노점에서 사용할
        </Typography>

        <Typography size="20" fontWeight="bold">
          사장님의 정보를 등록해 주세요.
        </Typography>
      </SubTitle>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          // mutate({
          //   name: data.name,
          //   nickname: data.nickname,
          //   phoneNumber: data.phoneNumber,
          // });
        })}
      >
        <CustomInput
          name="name"
          register={register}
          errors={undefined}
          placeholder="성명 입력"
          label="이름"
        />
        <CustomInput
          name="nickname"
          register={register}
          errors={undefined}
          placeholder="닉네임 입력"
          label="닉네임"
        />
        <InputPhoneNumber name="phoneNumber" register={register} />
        <Button type="submit">
          <Typography size="16" color="white" fontWeight="bold">
            완료
          </Typography>
        </Button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 18px;
  padding: 0 22px;
  margin-top: 128px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange3};
  padding: 17px 44px;
  margin-top: 20px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 46px;
`;
