import styled from 'styled-components';
import {
  AppBarLayout,
  CardOrderHistory,
  LoadingContainer,
} from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';
import { useQueryGetMyOrderHistoryList } from 'apps/customer/src/hooks/query/order-history/useQueryGetMyOrderHistoryList';

const ORDER_HISTORY_DETAIL_PATH_NAME = pathName.ORDER_HISTORY.DETAIL;

export const ListOrderHistory = () => {
  const { data, isLoading } = useQueryGetMyOrderHistoryList();
  if (isLoading) {
    return (
      <AppBarLayout title="주문내역" home>
        <LoadingContainer />
      </AppBarLayout>
    );
  }

  return (
    <AppBarLayout title="주문내역" home>
      <Container>
        <ListWrapper>
          {data.map((item) => (
            <CardOrderHistory
              detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME}
              orderHistoryInfo={item}
              key={item.orderId}
            />
          ))}
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
