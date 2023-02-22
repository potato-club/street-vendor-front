import { customColor, NextButton, Typography } from '@street-vendor/core';
import styled from 'styled-components';
import Image from 'next/image';
import Logo_Big from '../../../../public/img/logo/logo_big.png';

export const StartStoreRegister = () => {
  return (
    <Container>
      <BackIcon>
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7479 -0.00103378C10.9666 -0.00191307 11.1851 0.0124531 11.4019 0.0419655C11.5741 0.0661945 11.7399 0.124109 11.8897 0.212402C12.0396 0.300695 12.1706 0.417641 12.2752 0.556557C12.3799 0.695473 12.4561 0.85364 12.4996 1.02203C12.5432 1.19042 12.5531 1.36574 12.5289 1.53796C12.5047 1.71019 12.4467 1.87596 12.3584 2.02581C12.2701 2.17566 12.1532 2.30664 12.0143 2.4113C11.8754 2.51595 11.7172 2.59221 11.5488 2.63574C11.3804 2.67926 11.2051 2.68919 11.0329 2.66496C9.25397 2.69981 7.54952 3.38537 6.24189 4.59196C5.407 5.31133 4.7415 6.2064 4.29304 7.21308C3.84459 8.21977 3.62426 9.31316 3.64787 10.415C3.60515 11.4911 3.8025 12.5632 4.22557 13.5536C4.64864 14.544 5.28684 15.4278 6.09388 16.141C7.4456 17.3467 9.21784 17.9715 11.0269 17.88C11.199 17.8549 11.3743 17.8639 11.5429 17.9066C11.7115 17.9493 11.8701 18.0248 12.0095 18.1287C12.1489 18.2327 12.2665 18.3631 12.3555 18.5125C12.4446 18.6619 12.5033 18.8274 12.5284 18.9995C12.5535 19.1716 12.5444 19.3469 12.5017 19.5155C12.459 19.6841 12.3836 19.8426 12.2796 19.9821C12.1757 20.1215 12.0453 20.2391 11.8959 20.3281C11.7465 20.4171 11.581 20.4759 11.4089 20.501C10.136 20.6048 8.85534 20.4495 7.64415 20.0446C6.43296 19.6396 5.31639 18.9934 4.36189 18.145C3.26358 17.1865 2.39215 15.9957 1.81068 14.659C1.22922 13.3222 0.952265 11.8729 0.99989 10.416C0.971738 8.93446 1.27132 7.46504 1.87724 6.11282C2.48316 4.7606 3.38046 3.559 4.5049 2.59396C5.56326 1.6768 6.78439 0.966496 8.10487 0.499966C8.95219 0.188272 9.84527 0.0189857 10.7479 -0.00103378Z"
            fill="white"
          />
          <path
            d="M2.32396 8.95698L19.98 8.95698C20.3311 8.95698 20.6679 9.09647 20.9162 9.34477C21.1645 9.59307 21.304 9.92983 21.304 10.281C21.304 10.6321 21.1645 10.9689 20.9162 11.2172C20.6679 11.4655 20.3311 11.605 19.98 11.605L2.32396 11.605C1.9735 11.6039 1.63777 11.464 1.39033 11.2158C1.1429 10.9676 1.00395 10.6314 1.00396 10.281C1.00395 9.93053 1.1429 9.59437 1.39033 9.34618C1.63777 9.098 1.9735 8.95804 2.32396 8.95698Z"
            fill="white"
          />
        </svg>
      </BackIcon>
      <ContainerInner>
        <Content>
          <Title>
            <Typography
              color="white"
              fontWeight="bold"
              size="28"
              letterSpacing="-2.0px"
              textAlign="center"
            >
              나의 가게 시작하기
            </Typography>
            <Typography
              color="black"
              fontWeight="bold"
              size="20"
              letterSpacing="-2.0px"
              textAlign="center"
              fontHeight="32px"
            >
              사장님,
              <br />손 안의 노점이 처음이신가요?
            </Typography>
          </Title>
          <Image src={Logo_Big} width={174} height={187} alt={''} />
          <Typography
            color="black"
            size="16"
            letterSpacing="-1.5px"
            textAlign="center"
            fontHeight="24px"
          >
            다음으로 버튼을 눌러주세요
            <br />
            가게 만드는 방법을 알려드릴게요
          </Typography>
        </Content>
      </ContainerInner>
      <Button>
        <NextButton background="white">
          <Typography
            color="black"
            fontWeight="bold"
            size="16"
            letterSpacing="-1.5px"
            textAlign="center"
          >
            다음으로
          </Typography>
        </NextButton>
      </Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  position: relative;
  background: ${customColor.orange3};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  padding: 14% 7%;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 58px;
`;
const BackIcon = styled.div`
  display: flex;
  position: absolute;
  top: 24px;
  left: 7%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 8%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px 0;
`;
const Button = styled.div`
  display: flex;
  position: absolute;
  bottom: 54px;
`;
