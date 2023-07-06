import { customColor, NextButton, Typography } from '@street-vendor/core';
import styled from 'styled-components';
import Router from 'next/router';
import { pathName } from '../../../../configs/pathName';

export const LocationUnderBar = () => {
  const handleNext = () => {
    Router.push(pathName.STORE_REGISTER.SCHEDULE);
  };

  return (
    <Background>
      <AdressHeader>
        <Typography size="12">
          인천광역시연수구해돋이로 84번길 29 송도풍림아이원 3단지아파트 304동
        </Typography>
      </AdressHeader>
      <AdressSubHeader>
        <Typography size="12" color="gray">
          지번: 송도동 3-13
        </Typography>
      </AdressSubHeader>
      <SearchInput placeholder="상세주소를 입력하세요(건물명, 동/호수 등)" />
      <Division />
      <NextButton background="orange4" type="button" onClick={handleNext}>
        <Typography
          color="black"
          fontWeight="bold"
          size="18"
          textAlign="center"
        >
          다음으로
        </Typography>
      </NextButton>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-color: white;
  overflow: hidden;
  padding: 22px calc(16px + 4.5%) 54px;
`;
const AdressHeader = styled.div`
  display: flex;
  min-height: 40px;
  align-items: center;
`;
const AdressSubHeader = styled.div`
  display: flex;
  margin-top: 6px;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  min-height: 36px;
  background: ${customColor.beige};
  outline: none;
  margin-top: 2px;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 10px;
  ::placeholder {
    color: ${customColor.gray};
    font-size: 14px;
  }
`;
const Division = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  margin: 12px 0 18px;
  opacity: 0.7;
  background: ${customColor.gray};
`;
