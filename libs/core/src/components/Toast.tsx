import { Toaster } from 'react-hot-toast';
import { customColor } from '../constants';

const SUCCESS_COLOR = customColor.orange3;
const ERROR_COLOR = '#FF5500';

export const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          borderRadius: '999px',
          minWidth: '200px',
          wordBreak: 'keep-all',
        },

        success: {
          duration: 3000,
          style: {
            color: SUCCESS_COLOR,
            border: `1px solid ${SUCCESS_COLOR}`,
            borderRadius: '999px',
          },
          iconTheme: {
            primary: SUCCESS_COLOR,
            secondary: '#fff',
          },
        },
        error: {
          style: {
            color: ERROR_COLOR,
            border: `1px solid ${ERROR_COLOR}`,
            borderRadius: '999px',
          },
          iconTheme: {
            primary: ERROR_COLOR,
            secondary: '#fff',
          },
        },
      }}
    />
  );
};
