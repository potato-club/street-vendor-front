import styled from 'styled-components';
import Image from 'next/image';
import { customColor } from '../../constants';

interface ButtonProps {
  src: string;
  onClick?: () => void;
}

export const AddedPhotoButton = (props: ButtonProps) => {
  return (
    <Button onClick={props.onClick} type="button">
      <Image
        src={props.src}
        alt="photo"
        fill
        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
      />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  position: relative;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background: none;
  position: relative;
  background: ${customColor.beige};
  border-radius: 12px;
`;
