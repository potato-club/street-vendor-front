import styled from 'styled-components';
import { CardOrderHistory } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';

const ORDER_HISTORY_DETAIL_PATH_NAME = pathName.ORDER_HISTORY.DETAIL;

export const ListOrderHistory = () => {
  return (
    <Container>
      <ListWrapper>
        <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
        <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
        <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
        <CardOrderHistory detailPathName={ORDER_HISTORY_DETAIL_PATH_NAME} />
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 55px;
  margin-bottom: 121px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
