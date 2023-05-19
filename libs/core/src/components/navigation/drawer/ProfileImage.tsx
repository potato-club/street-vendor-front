import { customColor } from 'libs/core/src/constants';
import Image from 'next/image';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import ProfileImageDefault from '../../../assets/imgs/profile_img_default.png';
export interface ProfileImagePros {
  src?: string;
}

export const ProfileImage: React.FC<ProfileImagePros> = (props) => {
  const checkSrcAvailable = useMemo(
    () =>
      props.src
        ? props.src.includes('http')
          ? props.src
          : ProfileImageDefault
        : ProfileImageDefault,
    [props.src]
  );
  return (
    <Container>
      <Image
        src={checkSrcAvailable}
        alt={''}
        priority={true}
        fill
        style={{ objectFit: 'cover' }}
      />
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
  overflow: hidden;
`;
