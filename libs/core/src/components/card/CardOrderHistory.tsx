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
            <Typography size="20" color="black" fontWeight="bold">
              서윤보경이네 떡볶이
            </Typography>
          </Store>
          <RightWrapper>
            <OrderStatus>
              <Typography size="12" color="orange2">
                주문상세
              </Typography>
            </OrderStatus>
          </RightWrapper>
        </Headers>
        <Typography size="14" color="gray">
          2022-09-26 오후 09:18
        </Typography>
        <Typography size="14" color="orange2" fontWeight="bold">
          주문 완료
        </Typography>
        <MenuInfo>
          <Row>
            <Label>
              <Typography size="12" color="darkGray">
                메뉴
              </Typography>
            </Label>
            <Typography size="12" color="darkGray">
              서윤이의 떡볶이 외 3개
            </Typography>
          </Row>
          <Row>
            <Label>
              <Typography size="12" color="darkGray">
                결제 금액
              </Typography>
            </Label>
            <Typography size="12" color="darkGray">
              23,000원
            </Typography>
          </Row>
          <Row>
            <Label>
              <Typography size="12" color="darkGray">
                결제 방법
              </Typography>
            </Label>
            <Typography size="12" color="darkGray">
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
  padding: 20px 16px;
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
  width: 100%;
  height: 11px;
  background-color: ${customColor.beige};
`;
const Store = styled.div``;

const RightWrapper = styled.div`
  padding-left: 10px;
`;
const OrderStatus = styled.div`
  background-color: #fbdca0;
  border-radius: 999px;
  padding: 5px 11px;
`;
