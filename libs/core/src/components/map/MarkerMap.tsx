import React, { ReactNode, useState } from 'react';
import { Listener, Container as MapDiv, NaverMap } from 'react-naver-maps';
import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';

import { customColor } from '../../constants';
import { usePosition } from '../../hooks/usePosition';
import { MapPosition, Position, toMapPosition } from '../../utils';
import { ReloadButton } from '../button/map/ReloadButton';
import { ResetButton } from '../button/map/ResetButton';
import { MyPositionMarker } from './MyPositionMarker';
import { GeocoderResult, useGeocoder } from '../../hooks/useGeocoder';

export interface MarkerMapProps extends React.PropsWithChildren {
  preview?: ReactNode;
  centerMarker?: boolean;
  onClick?: VoidFunction;
  onReload?: VoidFunction;
  onSelectStore?: (storeID: number) => void;
  onChangeCenter?: (center: GeocoderResult) => void;
}

export const MarkerMap: React.FC<MarkerMapProps> = (props) => {
  const { position } = usePosition();
  const { fromMapPosition } = useGeocoder();

  const changeCenter = async (position: Position) => {
    const mapPosition = toMapPosition(position);

    const address = (await fromMapPosition(mapPosition)).address;

    props.onChangeCenter?.({ address, position: mapPosition });
  };

  const [center, setCenter] = useState<MapPosition>(() => {
    changeCenter(position);

    return toMapPosition(position);
  });

  const [ref, bounds] = useMeasure();

  const previewStyles = useSpring({
    height: bounds.height,
  });

  const buttonStyles = useSpring({
    bottom: 20 + bounds.height,
  });

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <animated.div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: customColor.white,
          display: 'flex',
          zIndex: 900,
          flexDirection: 'column',
          borderRadius: '20px 20px 0px 0px',
          overflow: 'hidden',
          boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.16)',
          ...previewStyles,
        }}
      >
        <div ref={ref}>{props.preview}</div>
      </animated.div>
      <animated.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          position: 'absolute',
          zIndex: 500,
          right: 20,
          ...buttonStyles,
        }}
      >
        {props.onReload && <ReloadButton onClick={props.onReload} />}
        <ResetButton
          onClick={() => {
            if (!position) {
              return;
            }

            changeCenter(position);
            setCenter(toMapPosition(position));
          }}
        />
      </animated.div>
      {/* 라이브러리 문제로 스타일을 따로 적용해줘야 함. */}
      <Container style={{ height: '100vh', position: 'fixed' }}>
        {props.centerMarker && (
          <CenterMarker>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                fill={customColor.orange3}
                d="m15.43,36.15h.05c-2.27-3.32-3.48-7.25-3.48-11.27,0-11.05,8.95-20,20-20s20,8.95,20,20c0,4.02-1.21,7.95-3.48,11.27h.05l-16.57,23.85-16.57-23.85Z"
              />
              <path
                fill={customColor.beige}
                d="m32,8.23c-8.82,0-16,7.18-16,16s7.18,16,16,16,16-7.18,16-16-7.18-16-16-16Zm0,29c-7.17,0-13-5.83-13-13s5.83-13,13-13,13,5.83,13,13-5.83,13-13,13Z"
              />
              <path
                fill={customColor.beige}
                d="m35.6,17.41c-.62-.55-1.56-.5-2.12.11l-7.99,8.88c-.55.62-.5,1.56.11,2.12.29.26.65.39,1,.39.41,0,.82-.17,1.12-.5l7.99-8.88c.55-.62.5-1.56-.11-2.12Z"
              />
              <path
                fill={customColor.beige}
                d="m32.51,14.62c-.62-.55-1.56-.5-2.12.11l-7.99,8.88c-.55.62-.5,1.56.11,2.12.29.26.65.39,1,.39.41,0,.82-.17,1.12-.5l7.99-8.88c.55-.62.5-1.56-.11-2.12Z"
              />
              <path
                fill={customColor.beige}
                d="m38.69,20.19c-.62-.55-1.56-.5-2.12.11l-7.99,8.88c-.55.62-.5,1.56.11,2.12.29.26.65.39,1,.39.41,0,.82-.17,1.12-.5l7.99-8.88c.55-.62.5-1.56-.11-2.12Z"
              />
              <path
                fill={customColor.beige}
                d="m41.79,22.98c-.62-.55-1.56-.5-2.12.11l-7.99,8.88c-.55.62-.5,1.56.11,2.12.29.26.65.39,1,.39.41,0,.82-.17,1.12-.5l7.99-8.88c.55-.62.5-1.56-.11-2.12Z"
              />
            </svg>
          </CenterMarker>
        )}
        <NaverMap
          mapDataControl={false}
          center={center}
          onCenterChanged={(center) => {
            const position = {
              lat: center.y,
              lng: center.x,
              latitude: center.y,
              longitude: center.x,
            };

            changeCenter(position);
            setCenter(position);
          }}
          defaultZoom={17}
        >
          {props.onClick && <Listener type="click" listener={props.onClick} />}
          <MyPositionMarker position={position} />
          {props.children}
        </NaverMap>
      </Container>
    </div>
  );
};

const Container = styled(MapDiv)`
  width: 100%;
  top: 0px;
`;

const CenterMarker = styled.div`
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 900;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-100% + 4px));
  svg {
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  }
`;
