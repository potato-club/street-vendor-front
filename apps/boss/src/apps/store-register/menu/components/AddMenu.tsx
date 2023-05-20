import { customColor } from '@street-vendor/core';
import styled from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';
import { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  id: number;

  value: MenuType;
  handleSetMenuArray: (id: number, value: MenuType) => void;
}
interface MenuType {
  image: File;
  name: string;
  price: string;
  weight: string;
}

export const AddMenu = ({ id, handleSetMenuArray, value }: Props) => {
  const [image, setImage] = useState<string>(
    value.image ? URL.createObjectURL(value.image) : ''
  );
  const [file, setFile] = useState<File>(value.image);
  const [menuName, setMenuName] = useState<string>(value.name);
  const [menuPrice, setMenuPrice] = useState<string>(value.price);
  const [menuWeight, setMenuWeight] = useState<string>(value.weight);
  const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files![0]);
      fileReader.onload = () => {
        setImage(String(fileReader.result!));
      };
      setFile(e.target.files[0]);
    }
  };
  useEffect(() => {
    file &&
      menuName &&
      menuPrice &&
      menuWeight &&
      handleSetMenuArray(id, {
        image: file,
        name: menuName,
        price: menuPrice,
        weight: menuWeight,
      });
  }, [file, menuName, menuPrice, menuWeight]);

  return (
    <Wrapper>
      <ImageBox>
        {image === '' ? (
          <FileInput type="file" onChange={handleAddImage} />
        ) : (
          <Image
            src={image}
            alt="thumbnail"
            fill
            style={{ objectFit: 'cover', borderRadius: 'inherit' }}
            onClick={() => setImage('')}
          />
        )}
        {image === '' && <ImagePlusIcon />}
      </ImageBox>
      <Info>
        <Input
          type="text"
          placeholder="예) 메뉴이름"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="예) 가격"
          value={menuPrice}
          pattern="[0-9]*"
          onChange={(e) => setMenuPrice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="예) 용량/개수"
          value={menuWeight}
          onChange={(e) => setMenuWeight(e.target.value)}
        />
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  overflow: auto;
  background: ${customColor.beige};
  box-shadow: 0px 3px 6px 0px ${customColor.black + '25'};
  padding: 32px 5%;
  border-radius: 16px;
  gap: 4%;
`;
const ImageBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 12px;
  background: ${customColor.white};
  height: 116px;
  width: 116px;
  min-width: 96px;
  align-items: center;
  justify-content: center;
`;
const FileInput = styled.input`
  display: flex;
  background: inherit;
  border-radius: inherit;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 0;
  &::file-selector-button {
    display: none;
  }
`;
const ImagePlusIcon = styled(HiOutlinePlus)`
  display: flex;
  position: absolute;
  font-size: 46px;
  color: ${customColor.orange2};
  pointer-events: none;
`;
const Info = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  display: flex;
  background: white;
  width: 100%;
  height: 34px;
  border-radius: 12px;
  align-items: center;
  padding: 0 18px;
  letter-spacing: -1px;
  font-size: 12px;
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
