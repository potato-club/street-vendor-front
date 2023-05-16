import { customColor, Typography } from '@street-vendor/core';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  item: {
    image: File | null;
    name: string;
    price: number;
    weight: string;
  };
}

export const CustomMenuBox = ({ item }: Props) => {
  const imageUrl = URL.createObjectURL(item.image);
  return (
    <Wrapper>
      <MenuImage>
        <Image
          src={imageUrl}
          fill
          alt={imageUrl}
          style={{ objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </MenuImage>
      <Typography size="12" letterSpacing="-0.5px">
        {item.name}
      </Typography>
      <Typography size="12" letterSpacing="-0.5px">
        {item.price}원
      </Typography>
      <Typography size="12" letterSpacing="-0.5px">
        {item.weight}
      </Typography>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${customColor.beige};
  padding: 20px 16px;
  border-radius: 24px;
  gap: 8px;
`;
const MenuImage = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;
