import styled from 'styled-components';
import { customColor, customColorType } from '../constants/customColor';

export type TypographyProps = React.PropsWithChildren<{
  size:
    | '80'
    | '60'
    | '48'
    | '44'
    | '40'
    | '36'
    | '32'
    | '28'
    | '24'
    | '20'
    | '16'
    | '14'
    | '12'
    | '8'
    | '4';
  color?: keyof customColorType;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
  fontHidden?: boolean;
  letterSpacing?: string;
  underlineColor?: keyof customColorType;
  notBreak?: boolean;
}>;
export const Typography = (props: TypographyProps) => {
  return (
    <TypographyText {...props} defaultColor={customColor.black}>
      {props.children}
    </TypographyText>
  );
};

export const handleColor = (color: keyof customColorType) => {
  for (const keyStore of Object.keys(customColor)) {
    if (keyStore === color) return customColor[keyStore];
  }
};
type typographyDefault = {
  defaultColor: string;
};
const TypographyText = styled.div<TypographyProps & typographyDefault>`
  font-family: 'Noto Sans KR';
  font-size: ${({ size }) => size + 'px'};
  color: ${({ color, defaultColor }) =>
    color ? handleColor(color) : defaultColor};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? 'normal'};
  ${({ fontHeight }) =>
    fontHeight === 'normal' ? '' : `line-height: ${fontHeight};`};
  ${({ fontHidden }) =>
    fontHidden ? 'overflow: hidden;text-overflow: ellipsis;' : ''};

  ${({ underlineColor }) =>
    underlineColor ? `text-decoration: underline; text-underline-position:under; text-decoration-color: ${underlineColor}` : ''};
  
  ${({notBreak}) => 
    notBreak ? `white-space:nowrap;` : ''};
`;
