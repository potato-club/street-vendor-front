import Router from 'next/router';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { customColor } from '../../constants';
import { Typography } from '../Typography';
import { CustomModal } from '../modal/CustomModal';
import { useState } from 'react';

type Props = {
  detailPathName: string;
};
export const CardOrderHistory = ({ detailPathName }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        content="선택한 주문내역을 삭제하시겠습니까?"
        button1Label="예"
        button2Label="아니요"
        isTwoButtons={true}
        onClickButton1={() => setIsModalOpen(false)}
        onClickButton2={() => setIsModalOpen(false)}
      />
      <InfoContainer
        onClick={() => {
          Router.push(`${detailPathName}/1`);
        }}
      >
        <Headers>
          <Store>
            <Typography
              size="20"
              color="black"
              fontWeight="bold"
              letterSpacing="-1.5px"
            >
              서윤보경이네 떡볶이
            </Typography>
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24194 11.833L6.99994 6.66602L1.24194 1.5"
                stroke="#FF8B00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Store>
          <RightWrapper>
            <OrderStatus>
              <Typography size="12" color="orange2" letterSpacing="-1.0px">
                주문상세
              </Typography>
            </OrderStatus>
            <CloseButton
              onClick={(e) => {
                setIsModalOpen(true);
                e.stopPropagation();
              }}
            >
              <TfiClose />
            </CloseButton>
          </RightWrapper>
        </Headers>
        <Typography size="14" color="gray">
          2022-09-26 오후 09:18
        </Typography>
        <Typography
          size="14"
          color="orange2"
          fontWeight="bold"
          letterSpacing="-1.0px"
        >
          주문 완료
        </Typography>
        <MenuInfo>
          <Row>
            <Label>
              <Typography size="12" color="darkGray" letterSpacing="-1.0px">
                메뉴
              </Typography>
            </Label>
            <Typography size="12" color="darkGray" letterSpacing="-1.0px">
              서윤이의 떡볶이 외 3개
            </Typography>
          </Row>
          <Row>
            <Label>
              <Typography size="12" color="darkGray" letterSpacing="-1.0px">
                결제 금액
              </Typography>
            </Label>
            <Typography size="12" color="darkGray">
              23,000원
            </Typography>
          </Row>
          <Row>
            <Label>
              <Typography size="12" color="darkGray" letterSpacing="-1.0px">
                결제 방법
              </Typography>
            </Label>
            <Typography size="12" color="darkGray" letterSpacing="-1.0px">
              계좌이체
            </Typography>
          </Row>
        </MenuInfo>
      </InfoContainer>
      <BottomBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  transition: 0.5s;
  :active {
    background-color: #e2e2e2;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px 7%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const Headers = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;
const MenuInfo = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  flex-direction: column;
  padding-top: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 23px;
`;
const Label = styled.div`
  min-width: 53px;
`;

const BottomBar = styled.div`
  width: 100vw;
  height: 11px;
  background-color: ${customColor.beige};
`;
const Store = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 12px;
`;

const RightWrapper = styled.div`
  display: flex;
  padding-left: 10px;
  gap: 0 12px;
`;
const OrderStatus = styled.button`
  background-color: #fbdca0;
  border-radius: 999px;
  padding: 5px 11px;
`;
const CloseButton = styled.button`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  color: ${customColor.lightGray};
  font-size: 14px;
`;
