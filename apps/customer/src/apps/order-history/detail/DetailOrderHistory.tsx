import { customColor } from '@street-vendor/core';
import styled from 'styled-components';
import { ButtonAgainOrder } from './components/ButtonAgainOrder';
import { OrderList } from './components/OrderList';
import { Payment } from './components/Payment';
import { SummaryOrder } from './components/SummaryOrder';
import { TotalPrice } from './components/TotalPrice';

export const DetailOrderHistory = () => {
  return (
    <Container>
      <Wrapper>
        <SummaryOrder />
        <OrderList />
        <Payment />
        <TotalPrice />
        <ButtonAgainOrder />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${customColor.beige};
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 11px;
`;
