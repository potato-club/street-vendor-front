import { customColor, Typography } from '@street-vendor/core';
import { useMyProfile } from 'apps/boss/src/hooks/useMyProfile';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
// import { useQueryEditMyNickname } from '../../../hooks/query/my-page/useQueryEditMyNickname';
import { toast } from 'react-hot-toast';

export const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit } = useForm();
  // const { mutate } = useQueryEditMyNickname();
  const { nickname, email, changeNickname } = useMyProfile();

  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  if (!editMode) {
    return (
      <Container>
        <TextBox label="이메일" value={email} />
        <TextBox label="닉네임" value={nickname} />
        <PhoneTextBox label="전화번호" value={nickname} />

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
        if (data.nickname === nickname) {
          handleEditMode();
          return;
        }
        if (data.nickname === '') {
          toast.error('닉네임을 입력해주세요');
          return;
        }
        // mutate(data.nickname, {
        //   onSuccess: () => {
        //     handleEditMode();
        //     changeNickname(data.nickname);
        //   },
        // });
      })}
    >
      <Container>
        <TextBox label="이메일" value={email} />

        <InputWrapper>
          <Label>
            <Typography size="16" letterSpacing="-0.5px">
              닉네임
            </Typography>
          </Label>
          <Input
            placeholder="손안의 노점에서 사용할 닉네임 입력"
            {...register('nickname')}
            defaultValue={nickname}
          />
          <Label>
            <Typography size="16" letterSpacing="-0.5px">
              전화번호
            </Typography>
          </Label>
          <Input
            placeholder="손안의 노점에서 사용할 닉네임 입력"
            {...register('phonenumber')}
            defaultValue={nickname}
          />
        </InputWrapper>
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

type PhoneTextBoxProps = {
  label: string;
  value: string;
};
const PhoneTextBox = ({ label, value }: PhoneTextBoxProps) => {
  return (
    <TextBoxContainer>
      <Label>
        <Typography size="16" letterSpacing="-0.5px">
          {label}
        </Typography>
      </Label>
      <PhoneBoxWrapper>
        <PhonetextLeftBox>010</PhonetextLeftBox>
        <PhonetextRightBox>{value}</PhonetextRightBox>
      </PhoneBoxWrapper>
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
  font-weight: bold;
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

const InputWrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  &::placeholder {
    color: ${customColor.darkGray};
    white-space: pre-wrap;
  }
  :focus {
    outline: 2px solid ${customColor.orange3};
  }
  box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.161);
`;

const PhoneBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 22px;
`;

const PhonetextLeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  font-weight: bold;
`;
const PhonetextRightBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 48px;
  padding: 0px 18px;
  background-color: ${customColor.beige};
  border-radius: 12px;
  font-size: 12px;
  letter-spacing: -0.5px;
  font-family: inherit;
  font-weight: bold;
`;
