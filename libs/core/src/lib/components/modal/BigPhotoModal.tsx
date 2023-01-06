import styled from 'styled-components';
import ReactModal from 'react-modal';
import Image from 'next/image';

interface ModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
  src: string;
}

export const BigPhotoModal = (props: ModalProps) => {
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
        },
        content: {
          display: 'flex',
          WebkitOverflowScrolling: 'touch',
          background: 'red',
          border: 'none',
          overflow: 'hidden',
          margin: '0 auto',
          height: 'calc(100% - 48px)',
          width: 'calc(100% - 48px)',
          inset: '0px',
          padding: '0',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Image
        src={`/img/${props.src}.jpg`}
        alt={props.src}
        fill
        style={{ objectFit: 'contain' }}
      />
    </ReactModal>
  );
};
