import styled from 'styled-components';
import ReactModal from 'react-modal';
import { customColor, Typography } from '@street-vendor/core';

interface ModalProps {
  onClickDirect?: () => void;
  onClickAlbum?: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const GetPhotoModal = (props: ModalProps) => {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={props.closeModal}
      isOpen={true}
      style={{
        overlay: {
          display: `${props.isModalOpen ? 'flex' : 'none'}`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10,
          height: '100%',
          width: '100%',
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          WebkitOverflowScrolling: 'touch',
          background: 'none',
          border: 'none',
          padding: '0px',
          width: 'max-content',
          height: 'max-contnet',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      }}
    >
      <ModalWrapper>
        <Content>
          <Typography size="20" letterSpacing="-0.5px">
            사진 가져오기
          </Typography>
          <Button>
            <GotoDirect onClick={props.onClickDirect}>
              <Typography size="12" letterSpacing="-0.5px">
                직접 찍기
              </Typography>
            </GotoDirect>
            <GotoAlbum onClick={props.onClickAlbum}>
              <Typography size="12" letterSpacing="-0.5px">
                앨범에서 가져오기
              </Typography>
            </GotoAlbum>
          </Button>
        </Content>
        <svg
          width="300"
          height="130"
          viewBox="0 0 300 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M280.292 129.5H20.0001C17.3726 129.507 14.7698 128.993 12.3424 127.988C9.91488 126.982 7.71092 125.505 5.85811 123.642C3.99505 121.789 2.51793 119.585 1.5124 117.158C0.506874 114.73 -0.00712468 112.128 7.4592e-05 109.5V20C-0.00706945 17.3725 0.506999 14.7697 1.51253 12.3422C2.51805 9.91476 3.9951 7.71083 5.85811 5.85801C7.71092 3.995 9.91488 2.51799 12.3424 1.51246C14.7698 0.506938 17.3726 -0.00713163 20.0001 1.24146e-05H280.292C284.429 -0.0094138 288.465 1.27253 291.838 3.66701C295.136 5.9928 297.651 9.26365 299.051 13.048C288.512 27.885 282.708 46.635 282.708 65.848C282.533 84.38 288.036 102.521 298.479 117.832C296.904 121.265 294.39 124.182 291.228 126.248C287.978 128.375 284.176 129.506 280.292 129.5Z"
            fill="white"
          />
        </svg>
      </ModalWrapper>
    </ReactModal>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 36px 25px 29px;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 15px;
  margin-top: 20px;
`;
const GotoAlbum = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 6px 0px #00000025;
  background: ${customColor.orange4};
`;
const GotoDirect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 6px 0px #00000025;
  background: ${customColor.orange3};
`;
