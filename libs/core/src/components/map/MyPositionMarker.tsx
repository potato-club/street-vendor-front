import { Marker } from 'react-naver-maps';
import { Position, toMapPosition } from '../../utils';

export interface MyPositionMarkerProps {
  position: Position;
}

export const MyPositionMarker: React.FC<MyPositionMarkerProps> = (props) => {
  return (
    <Marker
      position={toMapPosition(props.position)}
      icon={{
        content: myIcon,
        size: { width: 34, height: 34 },
        anchor: { x: 17, y: 17 },
      }}
    />
  );
};

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
