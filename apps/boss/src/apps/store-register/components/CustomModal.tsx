import Category_Modal from 'react-modal';
import { customColor } from '@street-vendor/core';
import { CategoryModal } from './modalContent/CategoryModal';
import { AccountModal } from './modalContent/AccountModal';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  modalContent: string;
}

export const CustomModal = ({
  isModalOpen,
  closeModal,
  modalContent,
}: ModalProps) => {
  Category_Modal.setAppElement('#__next');
  return (
    <Category_Modal
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      isOpen={isModalOpen}
      style={{
        overlay: {
          display: `${isModalOpen ? 'flex' : 'none'}`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `${customColor.black + '88'}`,
          zIndex: 2000,
          height: '100%',
          width: '100%',
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          padding: '0px',
          width: '100%',
          height: '80%',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -100%)',
          backgroundColor: `${customColor.white}`,
          borderBottomRightRadius: '0px',
          borderBottomLeftRadius: '0px',
          borderTopRightRadius: '24px',
          borderTopLeftRadius: '24px',
          overflow: 'hidden',
        },
      }}
    >
      {modalContent === 'category' && <CategoryModal />}
      {modalContent === 'account' && <AccountModal />}
    </Category_Modal>
  );
};
