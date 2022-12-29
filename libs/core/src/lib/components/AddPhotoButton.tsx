import React from 'react';
import styled from 'styled-components';

export const AddPhotoButton = () => {
  return (
    <Button>
      <AddIcon>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25 12H0V14H25V12Z" fill="#FF8B00" />
          <path d="M11 0L11 25H13L13 0H11Z" fill="#FF8B00" />
        </svg>
      </AddIcon>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  position: relative;
  background: #f6f1ec;
  border-radius: 12px;
`;
const AddIcon = styled.div``;
