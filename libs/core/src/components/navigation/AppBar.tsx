import styled from 'styled-components';
import { Typography } from '../Typography';
import { NavigationDrawer } from './drawer/NavigationDrawer';
import { NavigationButton } from './NavigationButton';
import { useState } from 'react';

export const AppBar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <Wrapper>
      {isOpenDrawer ? <NavigationDrawer /> : undefined}
      <Container>
        <NavigationButton onClick={() => setIsOpenDrawer((value) => !value)} />
        <Typography size="14" fontWeight="bold">
          송도풍림아이원3단지
        </Typography>
        <Action>
          <svg
            id="Group_104"
            data-name="Group 104"
            xmlns="http://www.w3.org/2000/svg"
            width="23.621"
            height="22.621"
            viewBox="0 0 23.621 22.621"
          >
            <g
              id="Ellipse_40"
              data-name="Ellipse 40"
              fill="none"
              stroke="#ff8b00"
              stroke-width="3"
            >
              <circle cx="9.5" cy="9.5" r="9.5" stroke="none" />
              <circle cx="9.5" cy="9.5" r="8" fill="none" />
            </g>
            <line
              id="Line_6"
              data-name="Line 6"
              x2="5"
              y2="5"
              transform="translate(16.5 15.5)"
              fill="none"
              stroke="#ff8b00"
              stroke-linecap="round"
              stroke-width="3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.974"
            height="24.686"
            viewBox="0 0 19.974 24.686"
          >
            <g
              id="Group_259"
              data-name="Group 259"
              transform="translate(-604.812 -118.664)"
            >
              <path
                id="Path_110"
                data-name="Path 110"
                d="M614.953,125.273s-6.6-.179-6.6,7.949c0,0-.47,5.541-2.265,7.449a.037.037,0,0,0,.028.063h8.832"
                transform="translate(0 -2.41)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
              <path
                id="Path_111"
                data-name="Path 111"
                d="M620,125.273s6.6-.179,6.6,7.949c0,0,.47,5.541,2.265,7.449a.037.037,0,0,1-.028.063H620"
                transform="translate(-5.355 -2.41)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
              <path
                id="Path_112"
                data-name="Path 112"
                d="M619.091,118.935s-2.787-.373-2.163,2.927"
                transform="translate(-4.138 1)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
              <path
                id="Path_113"
                data-name="Path 113"
                d="M619.837,118.935s2.787-.373,2.163,2.927"
                transform="translate(-5.292 1)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
              <path
                id="Path_114"
                data-name="Path 114"
                d="M618.576,154.362s-3.076.232-3.076-3.46"
                transform="translate(-3.623 -12.27)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
              <path
                id="Path_115"
                data-name="Path 115"
                d="M620.5,154.362s3.077.232,3.077-3.46"
                transform="translate(-5.547 -12.27)"
                fill="none"
                stroke="#ff8b00"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2.5"
              />
            </g>
          </svg>
        </Action>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1000;
`;

const Container = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  border-radius: 0px 0px 24px 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: white;
`;

const Action = styled.div`
  display: flex;
  gap: 20px;
`;
