import { useCallback } from 'react';
import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const loadingValue = atom<boolean>({
  key: 'loadingValue',
  default: false,
});

export const useLoading = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingValue);

  const loadingOn = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  const loadingOff = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return { isLoading, loadingOff, loadingOn };
};
