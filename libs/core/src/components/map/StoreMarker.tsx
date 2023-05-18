import React from 'react';
import { Position, toMapPosition } from '../../utils';
import { Marker } from 'react-naver-maps';

export interface StoreMarkerProps {
  position: Position;
  onClick?: VoidFunction;
}

export const StoreMarker: React.FC<StoreMarkerProps> = (props) => {
  return (
    <Marker
      position={toMapPosition(props.position)}
      icon={{
        content: markerIcon,
        size: { width: 46, height: 62 },
        anchor: { x: 23, y: 62 },
      }}
      onClick={props.onClick}
    />
  );
};

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
