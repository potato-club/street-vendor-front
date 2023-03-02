import { customColor, CustomInput, Typography } from '@street-vendor/core';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useQueryEditMyNickname } from '../../../hooks/query/my-page/useQueryEditMyNickname';

type Props = {
  email: string;
  nickname: string;
};
export const ProfileInfo = ({ email, nickname }: Props) => {
  const { register, handleSubmit } = useForm();
  const { mutate } = useQueryEditMyNickname();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Container>
        <CustomInput
          name="email"
          register={register}
          errors={undefined}
          placeholder="이메일"
          label="이메일"
        />
        <CustomInput
          name="nickName"
          register={register}
          errors={undefined}
          placeholder="손안의 노점에서 사용할 닉네임 입력"
          label="닉네임"
        />
        <Button type="submit">
          <Typography size="16" color="white">
            수정
          </Typography>
        </Button>
      </Container>
    </form>
  );
};
const Button = styled.button`
  border: none;
  border-radius: 999px;
  background-color: ${customColor.orange4};
  padding: 11px 20px;
  width: 132px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
