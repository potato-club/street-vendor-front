import styled from 'styled-components';
import { AppBarLayout, CardOrderHistory } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';
import { useQueryGetMyOrderHistoryList } from 'apps/customer/src/hooks/query/order-history/useQueryGetMyOrderHistoryList';

const ORDER_HISTORY_DETAIL_PATH_NAME = pathName.ORDER_HISTORY.DETAIL;

export const ListOrderHistory = () => {
  const { data } = useQueryGetMyOrderHistoryList();
  return (
    <AppBarLayout title="주문내역" home>
      <Container>
        <ListWrapper>
          <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
          <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
          <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
          <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
        </ListWrapper>
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  margin-bottom: 121px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
