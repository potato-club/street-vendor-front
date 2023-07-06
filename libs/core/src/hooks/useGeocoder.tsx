import { useCallback } from 'react';
import { useNavermaps } from 'react-naver-maps';
import { MapPosition, Position, toMapPosition } from '../utils';

export type GeocoderResult = {
  address: string;
  position: MapPosition;
};

export const useGeocoder = () => {
  const navermaps = useNavermaps();

  const fromAddress = useCallback(
    (address: string): Promise<GeocoderResult[]> => {
      return new Promise((resolve, reject) => {
        navermaps.Service.geocode(
          {
            query: address,
            orders: naver.maps.Service.OrderType.ROAD_ADDR,
          },
          (status, response) => {
            if (status === naver.maps.Service.Status.ERROR) {
              return reject(response.v2.errorMessage);
            }

            resolve(
              response.v2.addresses.map((value) => ({
                address: value.roadAddress,
                position: { lat: Number(value.x), lng: Number(value.y) },
              }))
            );
          }
        );
      });
    },
    [navermaps.Service]
  );

  const fromMapPosition = useCallback(
    (position: MapPosition): Promise<GeocoderResult> => {
      return new Promise((resolve, reject) => {
        navermaps.Service.reverseGeocode(
          {
            coords: new naver.maps.LatLng(position.lat, position.lng),
            orders: naver.maps.Service.OrderType.ROAD_ADDR,
          },
          (status, response) => {
            if (status === naver.maps.Service.Status.ERROR) {
              return reject(response.v2.status.message);
            }

            resolve({ address: response.v2.address.roadAddress, position });
          }
        );
      });
    },
    [navermaps.Service]
  );

  const fromPosition = useCallback(
    async (position: Position) => {
      return await fromMapPosition(toMapPosition(position));
    },
    [fromMapPosition]
  );

  return {
    fromAddress,
    fromMapPosition,
    fromPosition,
  };
};
