import {
  AppBarLayout,
  CustomModal,
  LoadingContainer,
  MarkerMap,
  NavigationDrawer,
  StoreMarker,
  Typography,
} from '@street-vendor/core';
import { useQueryGetMyInfo } from '../../hooks/query/my-page/useQueryGetMyInfo';
import { useCallback, useEffect, useState } from 'react';
import { sessionService } from '../../libs/sessionService';
import { useMyProfile } from '../../hooks/useMyProfile';
import { useRouter } from 'next/router';
import {
  StoreInfoResponse,
  StoreResponse,
} from '../../apis/controller/store.api.type';
import { storeApi } from '../../apis/controller/store.api';
import { StorePreview } from '../../components';

export const Home = () => {
  const { isLoading, data } = useQueryGetMyInfo();
  const { resetProfile } = useMyProfile();
  const [title, setTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stores, setStores] = useState<StoreResponse[]>([]);
  const [selectStore, setSelectStore] = useState<StoreInfoResponse>();
  const [selectStoreId, setSelectStoreId] = useState<number>();

  useEffect(() => {
    (async () => {
      setStores(await storeApi.getStores());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!selectStoreId) {
        return;
      }

      setSelectStore(await storeApi.getStore(selectStoreId));
    })();
  }, [selectStoreId]);

  const router = useRouter();

  const onLogout = useCallback(() => {
    setIsModalOpen(false);
    sessionService.resetIdSession();
    resetProfile();
    router.push('/');
  }, [resetProfile, router]);

  if (isLoading) {
    return <LoadingContainer />;
  }

  return (
    <>
      <CustomModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        content="로그아웃 하시겠습니까?"
        button1Label="예"
        button2Label="아니요"
        isTwoButtons={true}
        onClickButton1={onLogout}
        onClickButton2={() => setIsModalOpen(false)}
      />
      <AppBarLayout
        title={title}
        titleAlign="center"
        search
        notice
        drawer={
          <NavigationDrawer
            items={[
              { title: '주문내역', url: '/order-history' },
              { title: '마이페이지', url: '/my-page' },
              { title: '즐겨찾기', url: '/favorites' },
              { title: '공지사항', url: '/notice' },
              { title: '고객센터', url: '/ask' },
              { title: '손 안의 노점 소개', url: '' },
            ]}
            nickname={data.nickname}
            profileImage={data.profileUrl}
            onLogout={() => setIsModalOpen(true)}
          />
        }
      >
        <MarkerMap
          preview={
            selectStoreId &&
            (selectStore ? (
              <StorePreview
                id={selectStore.storeId}
                name={selectStore.storeName}
                category={selectStore.storeCategory}
                locationDescription={selectStore.locationDescription}
                salesStatus={selectStore.salesStatus}
                reviews={selectStore.reviews}
                distance={1}
                spoon={selectStore.spoon}
              />
            ) : (
              <Typography size="80" textAlign="center" style={{ height: 260 }}>
                로딩 중
              </Typography>
            ))
          }
          onClick={() => setSelectStoreId(undefined)}
          onChangeGeocode={(center) => {
            if (!center.address) {
              setTitle('정보 없음');
              return;
            }

            const addressArray = center.address.split(' ').slice(2);


            setTitle(addressArray.join(' '));
          }}
        >
          {stores.map((value) => (
            <StoreMarker
              key={value.storeId}
              position={value.location}
              onClick={() => {
                setSelectStoreId(value.storeId);
              }}
            />
          ))}
        </MarkerMap>
      </AppBarLayout>
    </>
  );
};
export { AppBarLayout };
