import styled from 'styled-components';
import ReactModal from 'react-modal';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  content: string;
}

export const CustomWhiteModal = (props: ModalProps) => {
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
          backgroundColor: `${customColor.black + '88'}`,
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
          width: 'calc(100% - 16px)',
          height: '146px',
          maxWidth: '300px',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          backgroundColor: `${customColor.white}`,
          borderRadius: '24px',
        },
      }}
    >
      <ModalWrapper>
        <Content>
          <Typography letterSpacing="-1.0px" size="16">
            {props.content}
          </Typography>
        </Content>
        <CloseButton onClick={props.closeModal}>
          <Typography letterSpacing="-1.0px" size="16">
            닫기
          </Typography>
        </CloseButton>
      </ModalWrapper>
    </ReactModal>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  position: relative;
  padding: 0 11%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  text-align: center;
`;
const CloseButton = styled.button`
  display: flex;
  background: transparent;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${customColor.gray};
`;
