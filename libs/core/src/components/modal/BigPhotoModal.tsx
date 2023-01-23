import ReactModal from 'react-modal';
import Image from 'next/image';

interface ModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
  src: string;
  alt?: string;
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
          border: 'none',
          overflow: 'hidden',
          height: 'calc(100% - 16px)',
          width: 'calc(100% - 16px)',
          inset: '0',
          padding: '0',
          pointerEvents: 'none',
          background: 'none',
          margin: 'auto',
        },
      }}
    >
      <Image
        src={props.src}
        alt={props.alt || props.src}
        fill
        style={{ objectFit: 'contain' }}
      />
    </ReactModal>
  );
};
