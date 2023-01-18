import Router from 'next/router';
import styled from 'styled-components';
import { AskSelectButton } from '../../button/AskSelectButton';
import { AskForm } from './askSetting/AskForm';

interface Props {
  pathName: string;
}

export const AskContainer = (props: Props) => {
  const handleRouter = () => {
    Router.push(props.pathName);
  };
  return (
    <Container>
      <ContainerInner>
        <TopBar>
          <AskSelectButton content="1:1 문의" isSelected={true} />
          <AskSelectButton
            content="나의 문의내역"
            isSelected={false}
            onClick={handleRouter}
          />
        </TopBar>
      </ContainerInner>
      <AskForm />
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
