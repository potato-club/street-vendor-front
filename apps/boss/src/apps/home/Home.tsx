import {
  AppBarLayout,
  CustomModal,
  MarkerMap,
  NavigationDrawer,
} from '@street-vendor/core';
import { useCallback, useState } from 'react';
import { sessionService } from '../../libs/sessionService';
import { useMyProfile } from '../../hooks/useMyProfile';
import { useRouter } from 'next/router';

export const Home = () => {
  const { resetProfile } = useMyProfile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const onLogout = useCallback(() => {
    setIsModalOpen(false);
    sessionService.resetIdSession();
    resetProfile();
    router.push('/');
  }, [resetProfile, router]);

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
        title="송도풍림아이원3단지"
        titleAlign="center"
        search
        notice
        drawer={
          <NavigationDrawer
            isBoss
            items={[
              { title: '주문내역', url: '/order-history' },
              { title: '마이페이지', url: '/my-page' },
              { title: '공지사항', url: '/notice' },
              { title: '고객센터', url: '/ask' },
              { title: '손 안의 노점 소개', url: '' },
            ]}
            nickname={'손안의 노점'}
            profileImage={''}
            onLogout={() => setIsModalOpen(true)}
          />
        }
      >
        <MarkerMap></MarkerMap>
      </AppBarLayout>
    </>
  );
};
export { AppBarLayout };
