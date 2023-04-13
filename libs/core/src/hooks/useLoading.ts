import { atom } from 'recoil';
import { useRecoilState } from 'recoil';

const loadingValue = atom<boolean>({
  key: 'loadingValue',
  default: false,
});

export const useLoading = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingValue);

  const loadingOn = () => {
    setIsLoading(true);
  };

  const loadingOff = () => {
    setIsLoading(false);
  };

  return { isLoading, loadingOff, loadingOn };
};
