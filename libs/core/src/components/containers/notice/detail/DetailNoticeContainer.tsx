import { customColor } from 'libs/core/src/constants';
import { AppBarLayout, Typography } from 'libs/core/src/components';
import styled from 'styled-components';

export const DetailNoticeContainer = () => {
  return (
    <AppBarLayout title="공지사항" home>
      <Container>
        <Header>
          <Tag>안내</Tag>
          <Typography size="16" color="black" letterSpacing="-1px">
            길거리 노점 서비스 일시 중지 안내
          </Typography>
        </Header>
        <Body>
          <Typography
            size="20"
            color="black"
            letterSpacing="-1px"
            fontWeight="600"
          >
            길거리 노점 서비스 일시 중지 안내
          </Typography>
          <ImageBox />
          <Typography size="16" color="darkGray" letterSpacing="-1px">
            공지사항 내용
          </Typography>
        </Body>
      </Container>
    </AppBarLayout>
  );
};

const Container = styled.div`
  background-color: ${customColor.beige};
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 20px 17px;
  background-color: ${customColor.white};
`;

const Tag = styled.div`
  background-color: ${customColor.orange2};
  color: ${customColor.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  padding: 7px 14px;

  white-space: nowrap;
`;

const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 36px 34px;
  max-width: 400px;
  margin: auto;
`;

const ImageBox = styled.div`
  width: 100%;
  background-color: ${customColor.white};
  height: 300px;
  border-radius: 23px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
