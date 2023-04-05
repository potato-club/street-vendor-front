import dynamic from 'next/dynamic';
import Script from 'next/script';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReloadButton } from './ReloadButton';
import { ResetButton } from './ResetButton';

const NaverMap = dynamic(
  () => import('react-naver-maps').then((mod) => mod.NaverMap),
  { ssr: false }
) as any;

const Marker = dynamic(
  () => import('react-naver-maps').then((mod) => mod.Marker),
  { ssr: false }
) as any;

export type Location = {
  lat: number;
  lng: number;
};

export type Point = {
  x: number;
  y: number;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MarkerMapProps {}

export const MarkerMap = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [myLocation, setMyLocation] = useState<Location>({
    lat: 37.359,
    lng: 127.1045,
  });
  const [center, setCenter] = useState<Location>(myLocation);

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      {/* <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: customColor.white,
          display: 'flex',
          zIndex: 900,
          flexDirection: 'column',
        }}
      >
        <Typography size="20" fontWeight="500">
          서윤보경이네 떡볶이집
        </Typography>
        <Typography size="16" fontWeight="300">
          떡볶이+분식
        </Typography>
      </div> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          position: 'absolute',
          zIndex: 500,
          bottom: 20,
          right: 20,
        }}
      >
        <ReloadButton
          onClick={() => {
            setCenter(myLocation);
          }}
        />
        <ResetButton
          onClick={() => {
            setCenter(myLocation);
          }}
        />
      </div>
      <Container>
        <Script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          onLoad={() => setIsLoad(true)}
        />
        {isLoad ? (
          <NaverMap
            style={{
              width: '100%',
              height: '100%',
            }}
            mapDataControl={false}
            center={center}
            onCenterChanged={(center) => setCenter(center)}
            defaultZoom={17}
          >
            <Marker
              position={myLocation}
              icon={{
                content: myIcon,
                size: { width: 34, height: 34 },
                anchor: { x: 17, y: 17 },
              }}
            />
            <Marker
              position={{ lat: 37.3595704, lng: 127.105399 }}
              icon={{
                content: markerIcon,
                size: { width: 46, height: 62 },
                anchor: { x: 23, y: 62 },
              }}
            />
          </NaverMap>
        ) : undefined}
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;

  // 하단 로고 지우기
  #react-naver-map > div:nth-child(2) {
    display: none;
  }
`;

const myIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="34"
    height="34"
    viewBox="0 0 34 34"
  >
    <defs>
      <filter
        id="Union_12"
        x="0"
        y="0"
        width="34"
        height="34"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feFlood flood-opacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Group_665"
      data-name="Group 665"
      transform="translate(-170.5 -535.5)"
    >
      <g transform="matrix(1, 0, 0, 1, 170.5, 535.5)" filter="url(#Union_12)">
        <path
          id="Union_12-2"
          data-name="Union 12"
          d="M12.5,0A12.5,12.5,0,1,1,0,12.5,12.5,12.5,0,0,1,12.5,0Z"
          transform="translate(4.5 1.5)"
          fill="#ff8b00"
        />
      </g>
      <g
        id="Group_661"
        data-name="Group 661"
        transform="translate(177.518 539.518)"
      >
        <path
          id="타원_90"
          data-name="타원 90"
          d="M10.073,1.889A8.184,8.184,0,0,0,4.286,15.86,8.184,8.184,0,0,0,15.86,4.286a8.131,8.131,0,0,0-5.787-2.4m0-1.889A10.073,10.073,0,1,1,0,10.073,10.073,10.073,0,0,1,10.073,0Z"
          fill="#f6f1ec"
        />
      </g>
    </g>
  </svg>
`;

const markerIcon = `
  <svg
    width="46"
    height="62"
    viewBox="0 0 46 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_238_2753)">
      <path
        d="M6.42898 31.272H6.47708C4.20596 27.9522 2.99368 24.0223 3.00002 20C3.00002 14.6957 5.10721 9.60859 8.85793 5.85786C12.6087 2.10714 17.6957 0 23 0C28.3044 0 33.3914 2.10714 37.1421 5.85786C40.8928 9.60859 43 14.6957 43 20C43.0066 24.0227 41.7943 27.9529 39.523 31.273H39.5711L23 55.122L6.42898 31.272Z"
        fill="#FFAF3A"
      />
    </g>
    <path
      d="M23 34.5C31.0081 34.5 37.5 28.0081 37.5 20C37.5 11.9919 31.0081 5.5 23 5.5C14.9919 5.5 8.5 11.9919 8.5 20C8.5 28.0081 14.9919 34.5 23 34.5Z"
      stroke="#F6F1EC"
      stroke-width="3"
    />
    <path
      d="M25.5969 14.295L17.6035 23.1726"
      stroke="#F6F1EC"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M22.5029 11.509L14.5095 20.3866"
      stroke="#F6F1EC"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M28.6909 17.08L20.6975 25.9576"
      stroke="#F6F1EC"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M31.7839 19.866L23.7905 28.7436"
      stroke="#F6F1EC"
      stroke-width="3"
      stroke-linecap="round"
    />
    <defs>
      <filter
        id="filter0_d_238_2753"
        x="0"
        y="0"
        width="46"
        height="61.122"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_238_2753"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_238_2753"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
`;
