import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';
import { AccountButton } from './AccountButton';

export const AccountModal = () => {
  return (
    <ModalWrapper>
      <TopBar />
      <Title>
        <Typography size="24" letterSpacing="-2.0px">
          은행/증권사
        </Typography>
        <OpacityBox />
      </Title>
      <Categories>
        <SubTitle>
          <Typography size="16" color="gray" letterSpacing="-1.5px">
            은행을 선택해주세요
          </Typography>
        </SubTitle>
        <Bank>
          <LeftCategories>
            <AccountButton name="NH농협" src="NH농협" />
            <AccountButton name="카뱅" src="카카오뱅크" />
            <AccountButton name="우리" src="우리" />
            <AccountButton name="하나" src="KEB하나" />
            <AccountButton name="새마을" src="새마을금고" />
            <AccountButton name="대구" src="대구" />
            <AccountButton name="신협" src="신협" />
            <AccountButton name="SC제일" src="SC제일" />
            <AccountButton name="수협" src="수협" />
            <AccountButton name="전북" src="광주전북" />
            <AccountButton name="씨티" src="씨티" />
            <AccountButton name="KDB산업" src="KDB산업" />
            <AccountButton name="산림조합" src="산림조합" />
            <AccountButton name="HSBC" src="HSBC" />
            <AccountButton name="도이치" src="도이치" />
            <AccountButton name="JP모건" src="JP모건" />
            <AccountButton name="중국건설" src="중국건설" />
          </LeftCategories>
          <RightCategories>
            <AccountButton name="KB국민" src="KB국민" />
            <AccountButton name="신한" src="신한제주" />
            <AccountButton name="IBK기업" src="IBK기업" />
            <AccountButton name="토스뱅크" src="토스뱅크" />
            <AccountButton name="부산" src="부산경남" />
            <AccountButton name="케이뱅크" src="케이뱅크" />
            <AccountButton name="우체국" src="우체국" />
            <AccountButton name="경남" src="부산경남" />
            <AccountButton name="광주" src="광주전북" />
            <AccountButton name="저축은행" src="SB저축" />
            <AccountButton name="제주" src="신한제주" />
            <AccountButton name="SBI저축" src="SBI저축" />
            <AccountButton name="BOA" src="BOA" />
            <AccountButton name="중국" src="중국" />
            <AccountButton name="중국공상" src="중국공상" />
            <AccountButton name="BNP파라바" src="BNP파라바" />
          </RightCategories>
        </Bank>
        <SubTitle>
          <Typography size="16" color="gray" letterSpacing="-1.5px">
            증권사를 선택해주세요
          </Typography>
        </SubTitle>
        <Broker>
          <LeftCategories>
            <AccountButton name="NH농협" src="NH농협" />
            <AccountButton name="카뱅" src="카카오뱅크" />
            <AccountButton name="우리" src="우리" />
            <AccountButton name="하나" src="KEB하나" />
            <AccountButton name="새마을" src="새마을금고" />
            <AccountButton name="대구" src="대구" />
            <AccountButton name="신협" src="신협" />
            <AccountButton name="SC제일" src="SC제일" />
            <AccountButton name="수협" src="수협" />
            <AccountButton name="전북" src="광주전북" />
            <AccountButton name="씨티" src="씨티" />
            <AccountButton name="KDB산업" src="KDB산업" />
            <AccountButton name="산림조합" src="산림조합" />
            <AccountButton name="HSBC" src="HSBC" />
            <AccountButton name="도이치" src="도이치" />
            <AccountButton name="JP모건" src="JP모건" />
            <AccountButton name="중국건설" src="중국건설" />
          </LeftCategories>
          <RightCategories>
            <AccountButton name="KB국민" src="KB국민" />
            <AccountButton name="신한" src="신한제주" />
            <AccountButton name="IBK기업" src="IBK기업" />
            <AccountButton name="토스뱅크" src="토스뱅크" />
            <AccountButton name="부산" src="부산경남" />
            <AccountButton name="케이뱅크" src="케이뱅크" />
            <AccountButton name="우체국" src="우체국" />
            <AccountButton name="경남" src="부산경남" />
            <AccountButton name="광주" src="광주전북" />
            <AccountButton name="저축은행" src="SB저축" />
            <AccountButton name="제주" src="신한제주" />
            <AccountButton name="SBI저축" src="SBI저축" />
            <AccountButton name="BOA" src="BOA" />
            <AccountButton name="중국" src="중국" />
            <AccountButton name="중국공상" src="중국공상" />
            <AccountButton name="BNP파라바" src="BNP파라바" />
          </RightCategories>
        </Broker>
      </Categories>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background: none;
  border: none;
  position: relative;
`;
const TopBar = styled.div`
  height: 3px;
  width: 46px;
  background: ${customColor.darkGray};
  opacity: 0.3;
  border-radius: 3px;
  margin-top: 28px;
`;
const OpacityBox = styled.div`
  display: flex;
  position: absolute;
  height: 18px;
  width: calc(100% - 14%);
  background: linear-gradient(
    to bottom,
    ${customColor.white},
    ${customColor.white + '00'}
  );
  bottom: 1px;
  transform: translate(0, 100%);
  z-index: 1;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 34px;
  width: 100%;
  align-items: center;
`;
const SubTitle = styled.div`
  display: flex;
  margin-top: 18px;
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  align-items: center;
`;
const LeftCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 50%;
`;
const RightCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 50%;
`;
const Bank = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 7% 18px;
`;
const Broker = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 7% 18px;
`;
