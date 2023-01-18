import Router from 'next/router';
import styled from 'styled-components';
import { AskSelectButton } from '../../../button/AskSelectButton';
import { AskDetail } from '../askSetting/AskDetail';

interface Props {
  pathName: string;
}

export const AskDetailContainer = (props: Props) => {
  const handleAskRouter = () => {
    Router.push(props.pathName);
  };
  const handleMyRouter = () => {
    Router.push(props.pathName + '/my');
  };
  return (
    <Container>
      <ContainerInner>
        <TopBar>
          <AskSelectButton
            content="1:1 문의"
            isSelected={false}
            onClick={handleAskRouter}
          />
          <AskSelectButton
            content="나의 문의내역"
            isSelected={true}
            onClick={handleMyRouter}
          />
        </TopBar>
      </ContainerInner>
      <AskDetail pathName={props.pathName} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 26px 0;
`;
const ContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 390px;
  align-items: center;
  padding-top: 38px;
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 8%;
  padding: 0 7%;
`;
