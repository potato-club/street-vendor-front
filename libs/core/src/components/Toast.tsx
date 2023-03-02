import { Toaster } from 'react-hot-toast';

export const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          background: '#ffffff',
          color: '#363636',
        },

        success: {
          duration: 3000,
          style: {
            border: '1px solid #FFCD69',
          },
        },
        error: {
          style: {
            color: '#ff4b4b',
            border: '1px solid #ff4b4b',
          },
        },
      }}
    />
  );
};
