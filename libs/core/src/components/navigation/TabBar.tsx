import styled from 'styled-components';
import { customColor } from '../../constants';
import { TabBarItem } from './TabBarItem';

export interface TabBarProps {
  selete: string;
  tabs: { id: string; label: string; icon: React.ReactNode }[];
  onChange: (id: string) => void;
}

export const TabBar: React.FC<TabBarProps> = (props) => {
  return (
    <Container>
      {props.tabs.map((value) => (
        <TabBarItem
          key={value.id}
          label={value.label}
          icon={value.icon}
          isSelectd={props.selete === value.id}
          onClick={() => {
            props.onChange(value.id);
          }}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);
  background: ${customColor.white};
`;
