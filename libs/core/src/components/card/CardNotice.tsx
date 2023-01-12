import styled from 'styled-components';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

type Props = {
  onClick: () => void;
};
export const CardNotice = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Tag>안내</Tag>
      <Info>
        <Typography size="12" color="darkGray">
          2022.11.02
        </Typography>
        <ContentWrapper>
          <Typography size="16" color="black" letterSpacing="-1px">
            길거리 노점 서비스 일시 중지 안내
          </Typography>
          <ButtonArrow>
            <svg
              id="그룹_565"
              data-name="그룹 565"
              xmlns="http://www.w3.org/2000/svg"
              width="15.893"
              height="16.095"
              viewBox="0 0 15.893 16.095"
            >
              <g id="그룹_329" data-name="그룹 329" transform="translate(0 0)">
                <path
                  id="패스_82"
                  data-name="패스 82"
                  d="M1.4,0A3.685,3.685,0,0,0,.892.034a1.037,1.037,0,1,0,.289,2.053A5.7,5.7,0,0,1,4.931,3.6,5.851,5.851,0,0,1,6.962,8.154a5.68,5.68,0,0,1-1.915,4.482A5.392,5.392,0,0,1,1.186,14a1.037,1.037,0,1,0-.3,2.051A7.4,7.4,0,0,0,6.4,14.2a7.7,7.7,0,0,0,2.632-6.05A7.871,7.871,0,0,0,6.291,2.031,8.757,8.757,0,0,0,3.475.392,6.4,6.4,0,0,0,1.4,0Z"
                  transform="translate(6.858 0)"
                  fill="#ffaf3a"
                />
                <path
                  id="패스_97"
                  data-name="패스 97"
                  d="M14.857,0H1.037a1.037,1.037,0,0,0,0,2.073h13.82a1.037,1.037,0,0,0,0-2.073Z"
                  transform="translate(0 7.012)"
                  fill="#ffaf3a"
                />
              </g>
            </svg>
          </ButtonArrow>
        </ContentWrapper>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${customColor.beige};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  gap: 16px;
  padding: 20px 16px;
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
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  width: 100%;
  flex: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const ButtonArrow = styled.div``;
