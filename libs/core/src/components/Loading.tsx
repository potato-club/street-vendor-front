import { useLoading } from '../hooks';
import { LoadingContainer } from './containers/loading/LoadingContainer';

export const Loading = () => {
  const { isLoading } = useLoading();
  return isLoading && <LoadingContainer />;
};
