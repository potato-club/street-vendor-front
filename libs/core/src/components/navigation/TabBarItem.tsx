import styled from 'styled-components';
import { customColor } from '../../constants';

export interface TabBarItemProps {
  label: string;
  icon: React.ReactNode;
  isSelectd?: boolean;
  onClick: VoidFunction;
}

export const TabBarItem: React.FC<TabBarItemProps> = (props) => {
  return (
    <Container isSelectd={props.isSelectd} onClick={props.onClick}>
      {[props.icon]}
      <Label>{props.label}</Label>
    </Container>
  );
};

const Container = styled.button<{ isSelectd?: boolean }>`
  background-color: transparent;
  border: 0;
  width: 53px;
  height: 37px;
  fill: ${(props) =>
    props.isSelectd ? customColor.orange2 : customColor.gray};
  color: ${(props) =>
    props.isSelectd ? customColor.orange2 : customColor.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
