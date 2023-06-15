import {
  AppBarLayout,
  CategoryButton,
  CategoryName,
  Select,
  getPosition,
  useLoading,
} from '@street-vendor/core';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { storeApi } from '../../apis/controller/store.api';
import { Store } from '../../components/card/Store';
import { StoreInfoResponse } from '../../apis/controller/store.api.type';
import { toast } from 'react-hot-toast';

export interface SearchProps {
  category: string;
}

export const Search: React.FC<SearchProps> = (props) => {
  const [stores, setStores] = useState<StoreInfoResponse[]>([]);
  const { loadingOn, loadingOff } = useLoading();

  const getStores = useCallback(async () => {
    const position = await getPosition();

    try {
      setStores(
        await storeApi.getStoreWithCategory(
          props.category,
          position.latitude,
          position.longitude,
          20,
          1
        )
      );
    } catch (error) {
      toast.error(error.message);
    }
  }, [props.category]);

  useEffect(() => {
    if (!props.category) {
      return;
    }

    loadingOn();

    getStores().then(() => {
      loadingOff();
    });
  }, [getStores, loadingOff, loadingOn, props.category]);

  return (
    <AppBarLayout title={CategoryName[props.category]} search>
      <StoreList>
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: '100%',
          }}
        >
          <Select options={[]} />
          <CategoryButton minimal>떡볶이</CategoryButton>
          <CategoryButton minimal>순대</CategoryButton>
          <CategoryButton minimal>타코야끼</CategoryButton>
        </div>
        {stores.map((store) => (
          <Store
            key={store.storeId}
            id={store.storeId}
            name={store.storeName}
            category={store.storeCategory}
            pictureUrl={store.pictureUrl}
            // description={store.description}
            locationDescription={store.locationDescription}
            salesStatus={store.salesStatus}
            reviews={store.reviews}
            distance={store.distance}
            spoon={store.spoon}
            badge={store.badge}
          />
        ))}
      </StoreList>
    </AppBarLayout>
  );
};

const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow-y: scroll;
`;
