import styled from 'styled-components';
import ReactModal from 'react-modal';
import { customColor } from '../../constants';
import { Typography } from '../Typography';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  content: string;
  button1Label: string;
  button2Label?: string;
  onClickButton1: () => void;
  onClickButton2?: () => void;
  isTwoButtons?: boolean;
}
interface ModalStyle {
  isTwoButtons?: boolean;
}

export const CustomModal = (props: ModalProps) => {
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
          height: '130px',
          maxWidth: '300px',
          overflow: 'hidden',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          backgroundColor: `${customColor.white}`,
          borderRadius: '20px',
        },
      }}
    >
      <ModalWrapper>
        <Content>
          <Typography letterSpacing="-1.0px" size="16">
            {props.content}
          </Typography>
        </Content>
        <ButtonBox>
          <Button1
            type="button"
            onClick={props.onClickButton1}
            isTwoButtons={props.isTwoButtons}
          >
            <Typography letterSpacing="-0.5px" size="12">
              {props.button1Label}
            </Typography>
          </Button1>
          {props.isTwoButtons && (
            <Button2 type="button" onClick={props.onClickButton2}>
              <Typography letterSpacing="-0.5px" size="12">
                {props.button2Label}
              </Typography>
            </Button2>
          )}
        </ButtonBox>
      </ModalWrapper>
    </ReactModal>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  position: relative;
  gap: 24px 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 18px;
`;
const Button1 = styled.button<ModalStyle>`
  display: flex;
  background: ${customColor.white};
  width: 70px;
  height: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 6px 0px ${customColor.black + '25'};
  &:active {
    background: ${customColor.orange4};
    ${(props) => props.isTwoButtons && `background: ${customColor.white};`}
  }
`;
const Button2 = styled.button`
  display: flex;
  background: ${customColor.orange4};
  width: 72px;
  height: 28px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 6px 0px ${customColor.black + '25'};
`;
