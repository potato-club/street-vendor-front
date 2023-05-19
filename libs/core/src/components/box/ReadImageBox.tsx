import { customColor } from '../../constants';
import { Typography } from '../Typography';
import styled from 'styled-components';
import Image from 'next/image';

interface ImageProps {
  imageUrl: string;
}
interface BoxProps {
  label: string;
  images: ImageProps[];
}

export const ReadImageBox = (props: BoxProps) => {
  return (
    <Wrapper>
      <Label>
        <Typography size="16" fontWeight="bold" letterSpacing="-0.5px">
          {props.label}
        </Typography>
      </Label>
      <Box>
        {props.images.map((item, id) => (
          <ImageBox key={id}>
            <Image
              src={item.imageUrl}
              alt={item.imageUrl}
              fill
              style={{ objectFit: 'cover', borderRadius: 'inherit' }}
            />
          </ImageBox>
        ))}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px 0;
`;
const Label = styled.span`
  display: flex;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 18px;
`;
const ImageBox = styled.div`
  display: flex;
  position: relative;
  width: 64px;
  height: 64px;
  background: ${customColor.beige};
  border-radius: 12px;
`;
