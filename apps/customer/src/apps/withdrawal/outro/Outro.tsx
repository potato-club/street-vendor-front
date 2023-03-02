import { customColor, Typography } from '@street-vendor/core';
import { pathName } from '../../../configs/pathName';
import router from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import Logo_Big from '../../../../public/img/logo/logo_big.png';
export const Outro = () => {
  return (
    <Container>
      <EndButton />
      <Title>
        <Typography size="32" color="orange2" fontWeight="bold">
          다음에 또 만나요!
        </Typography>
      </Title>

      <Image src={Logo_Big} width={174} height={187} alt={''} />
      <Content>
        <TopContent>
          <Typography size="16">
            그동안 앱을 이용해주셔서 감사합니다.
          </Typography>
          <Typography size="16">저희는 항상 여기에 있어요.</Typography>
        </TopContent>
        <Typography size="16">다음에 또 만나요!</Typography>
      </Content>
    </Container>
  );
};

const EndButton = () => {
  return (
    <Button onClick={() => router.push(pathName.INDEX)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.304"
        height="20.561"
        viewBox="0 0 20.304 20.561"
      >
        <g id="그룹_346" data-name="그룹 346" transform="translate(-2352 444)">
          <g
            id="그룹_329"
            data-name="그룹 329"
            transform="translate(2370.804 -424.937) rotate(180)"
          >
            <path
              id="패스_82"
              data-name="패스 82"
              d="M292.794,48.01a4.707,4.707,0,0,1-.654-.043,1.324,1.324,0,1,1,.369-2.623,7.275,7.275,0,0,0,4.791-1.927,7.475,7.475,0,0,0,2.594-5.823,7.257,7.257,0,0,0-2.446-5.726,6.888,6.888,0,0,0-4.933-1.739,1.324,1.324,0,1,1-.382-2.621,9.451,9.451,0,0,1,7.047,2.356,9.832,9.832,0,0,1,3.362,7.729,10.056,10.056,0,0,1-3.505,7.822,11.188,11.188,0,0,1-3.6,2.094A8.181,8.181,0,0,1,292.794,48.01Z"
              transform="translate(-283.738 -28.946)"
              fill="#ff8b00"
            />
            <path
              id="패스_97"
              data-name="패스 97"
              d="M17.48,1.148H-.176A1.324,1.324,0,0,1-1.5-.176,1.324,1.324,0,0,1-.176-1.5H17.48A1.324,1.324,0,0,1,18.8-.176,1.324,1.324,0,0,1,17.48,1.148Z"
              transform="translate(0 8.958)"
              fill="#ff8b00"
            />
          </g>
        </g>
      </svg>
    </Button>
  );
};
const Button = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 24px;
  left: 22px;
`;
const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 122px;
  padding: 55px 17px;
  height: 100vh;
  background-color: ${customColor.beige};
`;
