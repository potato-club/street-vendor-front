import { customColor, Typography } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { NoticeText } from './dummy/DummyNoticeText';
import { useQueryWithdrawal } from '../../../hooks/query/withdrawal/useQueryWithdrawal';
import { toast } from 'react-hot-toast';
interface ButtonStyledProps {
  isCheck: boolean;
}
export const WithdrawalCheck = () => {
  const [isCheck, setIsCheck] = useState(false);
  const handleClickCheck = () => {
    setIsCheck((prev) => !prev);
  };
  return (
    <Container>
      <NoticeWrapper>
        <Label>
          <Typography size="20" letterSpacing="-0.5px">
            유의사항
          </Typography>
        </Label>
        <NoticeBox>
          <Typography size="14" letterSpacing="-0.5px" color="darkGray">
            {NoticeText}
          </Typography>
        </NoticeBox>
        <CheckBox>
          <CheckButton
            isCheck={isCheck}
            type="button"
            onClick={handleClickCheck}
          >
            {isCheck && (
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07227 8.97119L5.81827 16.0902"
                  stroke="#F6F1EC"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M14.3184 1.99023L5.81836 16.0902"
                  stroke="#F6F1EC"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </CheckButton>
          <Typography size="16" letterSpacing="-1.6px" underlineColor="black">
            유의사항을 모두 확인했습니다.
          </Typography>
        </CheckBox>
      </NoticeWrapper>
      <ButtonWithDrawal isCheck={isCheck} />
    </Container>
  );
};

const ButtonWithDrawal = ({ isCheck }: { isCheck: boolean }) => {
  const { mutate } = useQueryWithdrawal();
  const router = useRouter();
  const handleClickButton = () => {
    if (isCheck) {
      //!! 대충 회원탈퇴하는 로직
      router.push(pathName.WITHDRAWAL.OUTRO);
    } else {
      toast.error('유의사항 확인을 체크해주세요.');
    }
  };
  return (
    <ButtonContainer onClick={handleClickButton}>
      <Typography
        size="16"
        letterSpacing="-1.6px"
        color="orange2"
        fontWeight="bold"
      >
        계정 삭제하기 :(
      </Typography>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  border: none;
  background-color: ${customColor.beige};
  padding: 12px 0px;
  border-radius: 12px;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  gap: 61px;
  padding: 0px 17px;
  padding-top: 55px;
  height: 100vh;
  max-width: 400px;
  margin: auto;
`;
const NoticeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 23px;
`;
const Label = styled.span`
  display: flex;
`;
const NoticeBox = styled.div`
  display: flex;
  width: 100%;
  height: 468px;
  overflow-y: scroll;
  background: ${customColor.beige};
  border-radius: 12px;
  padding: 19px 18px;
  align-items: flex-start;
  white-space: pre-wrap;
`;

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 3%;
`;
const CheckButton = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.isCheck ? customColor.orange3 : 'none')};
  border: 2px solid ${customColor.orange3};
  border-radius: 10px;
`;
