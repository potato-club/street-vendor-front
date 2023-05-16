export type Position = {
  latitude: number;
  longitude: number;
};

const options: PositionOptions = {
  enableHighAccuracy: true,
};

export const getPosition = (): Promise<Position> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      options
    );
  });
};

export const watchPosition = (
  successCallback: (position: Position) => void,
  errorCallback?: PositionErrorCallback
): number => {
  return navigator.geolocation.watchPosition((position) => {
    successCallback({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }, errorCallback);
};

export const clearWatch = (watchId: number) => {
  navigator.geolocation.clearWatch(watchId);
};
