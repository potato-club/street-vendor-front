import Router from 'next/router';
import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

type Props = {
  detailPathName: string;
};
export const CardOrderHistory = ({ detailPathName }: Props) => {
  return (
    <Container>
      <InfoContainer onClick={() => Router.push(`${detailPathName}/1`)}>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Store>
          <RightWrapper>
            <OrderStatus>
              <Typography size="12" color="orange2" letterSpacing="-1.0px">
                주문상세
              </Typography>
            </OrderStatus>
            <MoreButton>
              <svg
                width="2"
                height="12"
                viewBox="0 0 2 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12C1.55228 12 2 11.5523 2 11C2 10.4477 1.55228 10 1 10Z"
                  fill="black"
                />
                <path
                  d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7C1.55228 7 2 6.55228 2 6C2 5.44772 1.55228 5 1 5Z"
                  fill="black"
                />
                <path
                  d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0Z"
                  fill="black"
                />
              </svg>
            </MoreButton>
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
  gap: 10px;
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
const Store = styled.div`
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
const MoreButton = styled.button`
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;
