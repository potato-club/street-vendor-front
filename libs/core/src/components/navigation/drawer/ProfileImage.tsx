import { customColor } from 'libs/core/src/constants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface ProfileImagePros {
  src?: string;
}

export const ProfileImage: React.FC<ProfileImagePros> = (props) => {
  return (
    <Container>
      <Image src={props.src ?? ''} alt={''} priority={true} fill />
    </Container>
  );
};

const Container = styled.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background-color: ${customColor.white};
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.16) inset;
  position: relative;
`;
