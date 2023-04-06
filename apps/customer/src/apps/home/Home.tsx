import { AppBarLayout, NavigationDrawer } from '@street-vendor/core';
import { MarkerMap } from './components/MarkerMap';

export const Home = () => {
  return (
    <AppBarLayout
      title="송도풍림아이원3단지"
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
        />
      }
    >
      {/* <MarkerMap /> */}
    </AppBarLayout>
  );
};
export { AppBarLayout };
