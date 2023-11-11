import {
  AppBarLayout,
  customColor,
  MenuType,
  Typography,
} from '@street-vendor/core';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Title, TotalPrice } from '../../../common';
import { BottomButton } from '../../../common/button/BottomButton';
import { OrderDataStateType, StepProps } from '../../DetailStore';
import { Item } from './components';

const OrderConfirm = ({
  setStep,
  orderData,
  setOrderData,
}: StepProps & OrderDataStateType) => {
  const totalPrice = 
      orderData?.menus.reduce((total, menuItem) => {
        return total + (menuItem.orderCount || 0) * menuItem.menuPrice || 0;
      }, 0)

  const handleOnClick = () => {
    if (totalPrice <= 0) {
      toast.error('선택된 메뉴가 없습니다');
      return;
    }
    setStep('주문하기')
  };

  return (
    <AppBarLayout title="주문확인">
      <Container>
        <Wrapper>
          <Title />
          <ItemWrapper>
            {orderData?.menus?.map((menu: MenuType) => (
              <Item key={menu.menuId} {...menu} orderData={orderData} setOrderData={setOrderData} />
            ))}
          </ItemWrapper>
          {totalPrice === 0 && (
            <Notice>
              <Typography size="16">선택된 메뉴가 없습니다</Typography>
              <Typography size="16">메뉴를 추가해주세요</Typography>
            </Notice>
          )}
          <AddButton
          onClick={() => setStep('가게페이지')}
          >
            <Typography size="20">+ 메뉴 추가하기</Typography>
          </AddButton>
          <TotalPrice totalPrice={totalPrice} />
        </Wrapper>
        <BottomButton buttonText="주문하기" onClick={handleOnClick} />
      </Container>
    </AppBarLayout>
  );
};

export default OrderConfirm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${customColor.beige};
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: ${customColor.white};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const AddButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid ${customColor.gray};
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  border-top: 1px solid ${customColor.gray}60;
  border-bottom: 1px solid ${customColor.gray}60;
`;
