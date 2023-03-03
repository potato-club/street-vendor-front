import { customColor, CustomInput, Typography } from '@street-vendor/core';
import { useMyProfile } from 'apps/customer/src/hooks/useMyProfile';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useQueryEditMyNickname } from '../../../hooks/query/my-page/useQueryEditMyNickname';

export const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit } = useForm();
  const { mutate } = useQueryEditMyNickname();
  const { nickname, email, changeNickname } = useMyProfile();

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  if (!editMode) {
    return (
      <Container>
        <TextBox label="이메일" value={email} />
        <TextBox label="닉네임" value={nickname} />

        <Button onClick={handleEditMode}>
          <Typography size="16" color="white">
            수정
          </Typography>
        </Button>
      </Container>
    );
  }
  return (
    <form
      onSubmit={handleSubmit((data) => {
        mutate(data.nickname, {
          onSuccess: () => {
            handleEditMode();
            changeNickname(data.nickname);
          },
        });
      })}
    >
      <Container>
        <TextBox label="이메일" value={email} />
        <CustomInput
          name="nickname"
          register={register}
          errors={undefined}
          placeholder="손안의 노점에서 사용할 닉네임 입력"
          label="닉네임"
          value={nickname}
        />
        <Button type="submit">
          <Typography size="16" color="white">
            수정완료
          </Typography>
        </Button>
      </Container>
    </form>
  );
};

type TextBoxProps = {
  label: string;
  value: string;
};
const TextBox = ({ label, value }: TextBoxProps) => {
  return (
    <TextBoxContainer>
      <Label>
        <Typography size="16" letterSpacing="-0.5px">
          {label}
        </Typography>
      </Label>
      <TextBoxWrapper>{value}</TextBoxWrapper>
    </TextBoxContainer>
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

const TextBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const TextBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Label = styled.label`
  margin-bottom: 12px;
`;
