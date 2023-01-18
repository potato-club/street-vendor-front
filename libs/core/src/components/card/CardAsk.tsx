import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface Props {
  onClick: () => void;
}

export const CardAsk = (props: Props) => {
  return (
    <Container>
      <ContainerInner onClick={props.onClick}>
        <Title>
          <State>
            <Typography
              size="16"
              fontWeight="bold"
              color="orange2"
              letterSpacing="-1.0px"
            >
              답변 대기
            </Typography>
          </State>
          <Type>
            <Typography
              size="16"
              fontWeight="bold"
              color="gray"
              letterSpacing="-1.0px"
            >
              결제/환불
            </Typography>
          </Type>
        </Title>
        <Body>
          <Typography size="16" letterSpacing="-1.0px">
            환불이 안돼요ㅜㅜㅜ
          </Typography>
        </Body>
        <Date>
          <Typography size="12" letterSpacing="-0.5px">
            2022년 12월 1일
          </Typography>
        </Date>
        <ArrowIcon>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.8479 11.5269C6.74746 11.5175 6.64988 11.4882 6.56104 11.4405C6.47219 11.3927 6.39379 11.3277 6.33057 11.249C6.26735 11.1704 6.22073 11.08 6.19312 10.9829C6.1655 10.8859 6.15758 10.7842 6.16992 10.6841C6.21116 10.4821 6.32874 10.3034 6.49829 10.1861C6.66784 10.0687 6.87619 10.0217 7.07983 10.0542C8.16265 10.109 9.22743 9.76092 10.0688 9.07717C10.8619 8.4465 11.3775 7.53097 11.5059 6.5259H1.65479C1.45022 6.53267 1.25144 6.45826 1.10156 6.31887C0.951681 6.17948 0.863056 5.98677 0.85498 5.78225C0.862799 5.57755 0.951164 5.38426 1.10107 5.24465C1.25098 5.10505 1.45005 5.03038 1.65479 5.03713H11.4758C11.2886 4.06484 10.7558 3.19307 9.97583 2.58303C9.1628 1.89871 8.1385 1.51614 7.07593 1.50002C6.87218 1.53159 6.6641 1.48338 6.49512 1.36526C6.32613 1.24714 6.2093 1.06843 6.16895 0.866236C6.15733 0.766012 6.16586 0.664271 6.19409 0.567408C6.22233 0.470544 6.2696 0.380065 6.33325 0.301783C6.3969 0.2235 6.47563 0.158754 6.5647 0.111353C6.65376 0.0639516 6.75132 0.0349749 6.85181 0.0259037C6.98444 0.00871664 7.11821 0.000462552 7.25195 0.00100132C7.79656 0.0118906 8.33608 0.10692 8.85181 0.282251C9.6436 0.540406 10.3826 0.938866 11.033 1.45901C11.6862 1.96737 12.2163 2.61666 12.5837 3.35842C12.9512 4.10019 13.1463 4.91546 13.1548 5.74319C13.1548 5.75619 13.1548 5.76925 13.1548 5.78225C13.1548 5.79525 13.1548 5.79481 13.1548 5.80081C13.1548 5.80681 13.1548 5.83896 13.1548 5.85696C13.1752 6.68967 13.0019 7.51582 12.6484 8.27004C12.2949 9.02427 11.771 9.68611 11.1179 10.2031C10.0516 11.0543 8.73495 11.5314 7.37085 11.5611C7.19595 11.5615 7.02127 11.5499 6.8479 11.5269Z"
              fill="#FF8B00"
            />
          </svg>
        </ArrowIcon>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  width: 100%;
`;
const ContainerInner = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${customColor.beige};
  width: 100%;
  border-radius: 12px;
  padding: 16px 18px;
  gap: 12px 0;
  border: none;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 4px;
`;
const State = styled.span`
  display: flex;
`;
const Type = styled.span`
  display: flex;
`;
const Body = styled.span`
  display: flex;
`;
const Date = styled.span`
  display: flex;
`;
const ArrowIcon = styled.div`
  display: flex;
  position: absolute;
  right: 18px;
  top: 16px;
  transform: translate(0, 50%);
`;
