import styled from 'styled-components';
import ReactModal from 'react-modal';
import { customColor, Typography } from '@street-vendor/core';

interface ModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
}

export const AskAgreeModal = (props: ModalProps) => {
  ReactModal.setAppElement('#__next');
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
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      }}
    >
      <ModalWrapper>
        <CloseButton onClick={props.closeModal}>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.748 -0.00103378C10.9667 -0.00191307 11.1853 0.0124531 11.402 0.0419655C11.5742 0.0661945 11.74 0.124109 11.8898 0.212402C12.0397 0.300695 12.1707 0.417641 12.2753 0.556557C12.38 0.695473 12.4562 0.85364 12.4998 1.02203C12.5433 1.19042 12.5532 1.36574 12.529 1.53796C12.5048 1.71019 12.4469 1.87596 12.3586 2.02581C12.2703 2.17566 12.1533 2.30664 12.0144 2.4113C11.8755 2.51595 11.7173 2.59221 11.5489 2.63574C11.3805 2.67926 11.2052 2.68919 11.033 2.66496C9.25409 2.69981 7.54964 3.38537 6.24202 4.59196C5.40713 5.31133 4.74162 6.2064 4.29316 7.21308C3.84471 8.21977 3.62438 9.31316 3.64799 10.415C3.60527 11.4911 3.80262 12.5632 4.22569 13.5536C4.64876 14.544 5.28696 15.4278 6.09401 16.141C7.44572 17.3467 9.21797 17.9715 11.027 17.88C11.1991 17.8549 11.3744 17.8639 11.543 17.9066C11.7116 17.9493 11.8702 18.0248 12.0096 18.1287C12.1491 18.2327 12.2666 18.3631 12.3557 18.5125C12.4447 18.6619 12.5034 18.8274 12.5285 18.9995C12.5536 19.1716 12.5445 19.3469 12.5018 19.5155C12.4592 19.6841 12.3837 19.8426 12.2797 19.9821C12.1758 20.1215 12.0454 20.2391 11.896 20.3281C11.7466 20.4171 11.5811 20.4759 11.409 20.501C10.1361 20.6048 8.85546 20.4495 7.64427 20.0446C6.43308 19.6396 5.31652 18.9934 4.36201 18.145C3.2637 17.1865 2.39227 15.9957 1.8108 14.659C1.22934 13.3222 0.952387 11.8729 1.00001 10.416C0.97186 8.93446 1.27144 7.46504 1.87736 6.11282C2.48329 4.7606 3.38058 3.559 4.50502 2.59396C5.56338 1.6768 6.78451 0.966496 8.10499 0.499966C8.95231 0.188272 9.84539 0.0189857 10.748 -0.00103378Z"
              fill="#FF8B00"
            />
            <path
              d="M2.32396 8.95698L19.98 8.95698C20.3311 8.95698 20.6679 9.09647 20.9162 9.34477C21.1645 9.59307 21.304 9.92983 21.304 10.281C21.304 10.6321 21.1645 10.9689 20.9162 11.2172C20.6679 11.4655 20.3311 11.605 19.98 11.605L2.32396 11.605C1.9735 11.6039 1.63777 11.464 1.39033 11.2158C1.1429 10.9676 1.00395 10.6314 1.00396 10.281C1.00395 9.93053 1.1429 9.59437 1.39033 9.34618C1.63777 9.098 1.9735 8.95804 2.32396 8.95698Z"
              fill="#FF8B00"
            />
          </svg>
        </CloseButton>
        <Content>
          <Typography size="12" letterSpacing="-0.5px">
            1. 목적 및 항목: 개인정보 수집 및 이용 목적과 수집하는 개인정보
            항목을 구체적으로 설명해야 합니다. 예를 들어, 회원 가입을 위한
            개인정보 수집 시 "이름, 아이디, 비밀번호, 이메일 주소, 연락처"와
            같은 항목을 수집하며, 이 정보는 회원 가입 승인 및 인증, 서비스 제공,
            고객상담 등의 목적으로 이용됩니다.
          </Typography>
          <Typography size="12" letterSpacing="-0.5px">
            2. 보유 기간: 수집된 개인정보의 보유 기간을 명시해야 합니다.
            이용자가 서비스 이용 중에 개인정보 제공에 동의하지 않아 이용 계약을
            해지하는 경우에도 보유 기간을 준수해야 합니다. 예를 들어, 회원 가입
            정보는 회원 탈퇴 시 즉시 파기되며, 법령에 의한 보존 기간이 있을
            경우에는 그 기간 이후에 파기됩니다.
          </Typography>
          <Typography size="12" letterSpacing="-0.5px">
            3. 제공 및 공유 대상: 수집한 개인정보를 제공하거나 공유할 대상과 그
            목적을 명확하게 밝혀야 합니다. 이용자의 동의 없이 개인정보를
            제3자에게 제공할 수 없으며, 법령에 근거하여 개인정보를 제공하는
            경우에는 그에 대한 이유와 법령을 고지해야 합니다.
          </Typography>
          <Typography size="12" letterSpacing="-0.5px">
            4. 동의 철회 및 열람권 등: 이용자가 개인정보 수집 및 이용에 대한
            동의를 철회할 수 있는 절차와 방법, 그리고 개인정보를 열람하고 수정할
            수 있는 권리와 절차 등을 안내해야 합니다. 또한, 개인정보 보호를 위한
            기술적 및 관리적 대책 등을 안내하는 것이 좋습니다.
          </Typography>
          <Typography size="12" letterSpacing="-0.5px">
            5. 가독성과 이해도: 개인정보 수집 및 이용 동의 페이지는 이용자가
            쉽게 이해할 수 있는 구성과 디자인을 채택해야 합니다. 글자 크기,
            폰트, 색상, 간격 등을 적절하게 조절하여 가독성을 높이고, 전
          </Typography>
        </Content>
      </ModalWrapper>
    </ReactModal>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  background: ${customColor.white};
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 7%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const CloseButton = styled.button`
  display: flex;
  position: fixed;
  top: 3%;
  left: 5%;
`;
