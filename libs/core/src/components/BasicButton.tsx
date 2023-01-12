import styled, { CSSProperties } from 'styled-components';
import { customColorType } from '../constants/customColor';
import { handleColor } from './Typography';

type ButtonStyle = {
  backgroundColor: keyof customColorType;
  padding?: number;
  maxWidth?: number;
  flexGrow?: number;
  height?: number;
  style?: CSSProperties;
  children: React.ReactNode;
};
export const BasicButton = (props: ButtonStyle) => {
  return <Container style={props.style} {...props}>{props.children}</Container>;
};

const Container = styled.div<ButtonStyle>`
  background-color: ${({ backgroundColor }) => handleColor(backgroundColor)};
  flex-grow: ${({ flexGrow }) => flexGrow ? `${flexGrow}` : ''};
  height: ${({ height }) => (height ? `${height}px` : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '')};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => (padding ? `${padding}px` : '12px')};
`;
