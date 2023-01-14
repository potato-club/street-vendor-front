import styled from 'styled-components';
import { AskSelectButton } from '../../../button/AskSelectButton';
import { useState } from 'react';
import { AskForm } from '../askSetting/AskForm';
import { MyAsk } from '../askSetting/MyAsk';

export const AskContainer = () => {
  const [isAskForm, setIsAskForm] = useState(true);
  return (
    <Container>
      <ContainerInner>
        <TopBar>
          <AskSelectButton
            content="이메일 문의"
            isSelected={isAskForm}
            onClick={() => {
              setIsAskForm(true);
            }}
          />
          <AskSelectButton
            content="나의 문의내역"
            isSelected={!isAskForm}
            onClick={() => {
              setIsAskForm(false);
            }}
          />
        </TopBar>
        {isAskForm ? <AskForm /> : <MyAsk />}
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 24px 0;
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 0 8%;
  padding: 0 7%;
`;
