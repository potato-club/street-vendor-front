import { useEffect, useState } from 'react';
import { Position, clearWatch, watchPosition } from '../utils';

export const usePosition = () => {
  const [position, setPosition] = useState<Position>({
    latitude: 37.3468471,
    longitude: 126.9524528,
  });

  useEffect(() => {
    const watchId = watchPosition(
      (position) => {
        setPosition(position);
      },
      (error) => {
        throw error;
      }
    );

    return () => {
      clearWatch(watchId);
    };
  }, []);

  return { position };
};
