import { customColor } from 'libs/core/src/constants';
import {
  AppBarLayout,
  LoadingContainer,
  Typography,
} from 'libs/core/src/components';
import styled from 'styled-components';
import { DetailNoticeType } from 'libs/core/src/types';

type Props = {
  data: DetailNoticeType;
  isLoading: boolean;
};
export const DetailNoticeContainer = ({ data, isLoading }: Props) => {
  if (isLoading || data === undefined) {
    return (
      <AppBarLayout title="공지사항" home>
        <LoadingContainer />
      </AppBarLayout>
    );
  }

  return (
    <AppBarLayout title="공지사항" home>
      <Container>
        <Header>
          <Tag>안내</Tag>
          <Typography size="16" color="black" letterSpacing="-1px">
            {data.title}
          </Typography>
        </Header>
        <Body>
          <Typography
            size="20"
            color="black"
            letterSpacing="-1px"
            fontWeight="600"
            textAlign="center"
          >
            {data.title}
          </Typography>
          {data.imageUrl !== null && <ImageBox src={data.imageUrl} alt="" />}
          <Typography size="16" color="darkGray" letterSpacing="-1px">
            {data.content}
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

const ImageBox = styled.img`
  width: 100%;
  background-color: ${customColor.white};
  height: 300px;
  border-radius: 23px;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;
