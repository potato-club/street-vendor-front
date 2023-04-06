import { customColor } from 'libs/core/src/constants';
import { type } from 'os';
import styled from 'styled-components';
import { Typography } from '../../../Typography';

interface AlarmProps {
  content: string;
  time: string;
  type: 'time' | 'order' | 'event';
}

export const NewAlarmBar = (props: AlarmProps) => {
  return (
    <Wrapper>
      <WrapperInner>
        <Content>
          <Typography size="16" letterSpacing="-1.2px" fontWeight="bold">
            {props.content}
          </Typography>
          <Typography size="12" letterSpacing="-0.6px">
            {props.time}
          </Typography>
        </Content>
        <Icon>
          {props.type === 'time' && (
            <svg
              width="28"
              height="39"
              viewBox="0 0 28 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.439 2.02194C14.439 2.02194 6.93897 0.841936 8.58597 15.9349"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M14.439 2.02194C14.439 2.02194 21.939 0.841936 20.292 15.9349"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M0.829956 11H27.83V25.5C27.83 29.0804 26.4076 32.5142 23.8759 35.0459C21.3442 37.5777 17.9104 39 14.33 39C10.7495 39 7.31576 37.5777 4.78401 35.0459C2.25227 32.5142 0.829956 29.0804 0.829956 25.5L0.829956 11Z"
                fill={customColor.orange2}
              />
            </svg>
          )}
          {props.type === 'event' && (
            <svg
              width="28"
              height="35"
              viewBox="0 0 28 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.83 35H5.82996C4.50436 34.9984 3.2336 34.471 2.29626 33.5337C1.35893 32.5964 0.831544 31.3256 0.829956 30V9C0.831544 7.67441 1.35893 6.40365 2.29626 5.46631C3.2336 4.52897 4.50436 4.00159 5.82996 4H22.83C24.1556 4.00159 25.4263 4.52897 26.3636 5.46631C27.301 6.40365 27.8284 7.67441 27.83 9V30C27.8284 31.3256 27.301 32.5964 26.3636 33.5337C25.4263 34.471 24.1556 34.9984 22.83 35ZM5.82996 26.25C5.49869 26.2505 5.18105 26.3824 4.9469 26.6167C4.71275 26.851 4.5812 27.1687 4.58093 27.5C4.5812 27.8313 4.71275 28.149 4.9469 28.3833C5.18105 28.6176 5.49869 28.7495 5.82996 28.75H22.83C23.1613 28.7495 23.479 28.6176 23.7133 28.3833C23.9476 28.149 24.0794 27.8314 24.08 27.5C24.0797 27.1686 23.9479 26.8508 23.7135 26.6165C23.4791 26.3821 23.1614 26.2503 22.83 26.25H5.82996ZM5.82996 18.25C5.49869 18.2505 5.18105 18.3824 4.9469 18.6167C4.71275 18.851 4.5812 19.1687 4.58093 19.5C4.58146 19.8311 4.71327 20.1485 4.94739 20.3826C5.18151 20.6167 5.49886 20.7485 5.82996 20.749H22.83C23.1612 20.7488 23.4789 20.6172 23.7133 20.3831C23.9476 20.1489 24.0794 19.8313 24.08 19.5C24.0794 19.1686 23.9476 18.851 23.7133 18.6167C23.479 18.3824 23.1613 18.2505 22.83 18.25H5.82996ZM5.82996 10.25C5.49869 10.2505 5.18105 10.3824 4.9469 10.6167C4.71275 10.851 4.5812 11.1687 4.58093 11.5C4.5812 11.8313 4.71275 12.149 4.9469 12.3833C5.18105 12.6176 5.49869 12.7495 5.82996 12.75H22.83C23.1613 12.7495 23.479 12.6176 23.7133 12.3833C23.9476 12.149 24.0794 11.8314 24.08 11.5C24.0794 11.1686 23.9476 10.851 23.7133 10.6167C23.479 10.3824 23.1613 10.2505 22.83 10.25H5.82996Z"
                fill={customColor.orange2}
              />
              <path
                d="M6.32996 8.75C7.5726 8.75 8.57996 7.07107 8.57996 5C8.57996 2.92893 7.5726 1.25 6.32996 1.25C5.08732 1.25 4.07996 2.92893 4.07996 5C4.07996 7.07107 5.08732 8.75 6.32996 8.75Z"
                stroke={customColor.orange2}
                strokeWidth="2.5"
              />
              <path
                d="M10.33 8.75C11.5726 8.75 12.58 7.07107 12.58 5C12.58 2.92893 11.5726 1.25 10.33 1.25C9.08732 1.25 8.07996 2.92893 8.07996 5C8.07996 7.07107 9.08732 8.75 10.33 8.75Z"
                stroke={customColor.orange2}
                strokeWidth="2.5"
              />
              <path
                d="M18.33 8.75C19.5726 8.75 20.58 7.07107 20.58 5C20.58 2.92893 19.5726 1.25 18.33 1.25C17.0873 1.25 16.08 2.92893 16.08 5C16.08 7.07107 17.0873 8.75 18.33 8.75Z"
                stroke={customColor.orange2}
                strokeWidth="2.5"
              />
              <path
                d="M14.33 8.75C15.5726 8.75 16.58 7.07107 16.58 5C16.58 2.92893 15.5726 1.25 14.33 1.25C13.0873 1.25 12.08 2.92893 12.08 5C12.08 7.07107 13.0873 8.75 14.33 8.75Z"
                stroke={customColor.orange2}
                strokeWidth="2.5"
              />
              <path
                d="M22.33 8.75C23.5726 8.75 24.58 7.07107 24.58 5C24.58 2.92893 23.5726 1.25 22.33 1.25C21.0873 1.25 20.08 2.92893 20.08 5C20.08 7.07107 21.0873 8.75 22.33 8.75Z"
                stroke={customColor.orange2}
                strokeWidth="2.5"
              />
            </svg>
          )}
          {props.type === 'order' && (
            <svg
              width="31"
              height="39"
              viewBox="0 0 31 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.088 6.7239C16.088 6.7239 5.48803 6.4359 5.48803 19.4959C5.48803 19.4959 4.733 28.3959 1.849 31.4649C1.8412 31.4736 1.83615 31.4844 1.83441 31.496C1.83267 31.5075 1.83434 31.5194 1.83923 31.53C1.84412 31.5406 1.85196 31.5496 1.86187 31.5558C1.87179 31.562 1.88333 31.5651 1.89502 31.5649H16.086"
                fill={customColor.orange2}
              />
              <path
                d="M16.088 6.7239C16.088 6.7239 5.48803 6.4359 5.48803 19.4959C5.48803 19.4959 4.733 28.3959 1.849 31.4649C1.8412 31.4736 1.83615 31.4844 1.83441 31.496C1.83267 31.5075 1.83434 31.5194 1.83923 31.53C1.84412 31.5406 1.85196 31.5496 1.86187 31.5558C1.87179 31.562 1.88333 31.5651 1.89502 31.5649H16.086"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M14.984 6.7239C14.984 6.7239 25.584 6.4359 25.584 19.4959C25.584 19.4959 26.339 28.3959 29.223 31.4649C29.2308 31.4736 29.2359 31.4844 29.2376 31.496C29.2394 31.5075 29.2377 31.5194 29.2328 31.53C29.2279 31.5406 29.2201 31.5496 29.2101 31.5558C29.2002 31.562 29.1887 31.5651 29.177 31.5649H14.984"
                fill={customColor.orange2}
              />
              <path
                d="M14.984 6.7239C14.984 6.7239 25.584 6.4359 25.584 19.4959C25.584 19.4959 26.339 28.3959 29.223 31.4649C29.2308 31.4736 29.2359 31.4844 29.2376 31.496C29.2394 31.5075 29.2377 31.5194 29.2328 31.53C29.2279 31.5406 29.2201 31.5496 29.2101 31.5558C29.2002 31.562 29.1887 31.5651 29.177 31.5649H14.984"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M15.8211 2.01996C15.8211 2.01996 11.343 1.41996 12.346 6.71996"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M15.092 2.01996C15.092 2.01996 19.5711 1.41996 18.5671 6.71996"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M15.8409 36.8439C15.8409 36.8439 10.8979 37.2169 10.8979 31.2849"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M15.7109 36.8439C15.7109 36.8439 20.6539 37.2169 20.6539 31.2849"
                stroke={customColor.orange2}
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          )}
        </Icon>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  height: 75px;
  background: ${customColor.orange4};
  box-shadow: 0px 3px 6px 0px #00000025;
  justify-content: center;
`;
const WrapperInner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 400px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 6%;
  align-items: flex-start;
  justify-content: center;
  gap: 8px 0;
`;
const Icon = styled.div`
  display: flex;
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translate(0, -50%);
`;
