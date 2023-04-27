import { customColor, Typography } from '@street-vendor/core';
import styled from 'styled-components';
import { CategoryButton } from './CategoryButton';

export const CategoryModal = () => {
  return (
    <ModalWrapper>
      <TopBar />
      <Title>
        <Typography size="24" letterSpacing="-2.0px">
          종류 선택
        </Typography>
        <Typography size="16" color="gray" letterSpacing="-1.5px">
          카테고리를 선택해주세요
        </Typography>
        <OpacityBox />
      </Title>
      <Categories>
        <CategoryButton name="떡볶이" />
        <CategoryButton name="타코야끼" />
        <CategoryButton name="붕어빵" />
        <CategoryButton name="호떡" />
        <CategoryButton name="계란빵" />
        <CategoryButton name="순대" />
        <CategoryButton name="핫도그" />
        <CategoryButton name="기타 후식류" />
        <CategoryButton name="기타 식사류" />
      </Categories>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background: none;
  border: none;
  position: relative;
`;
const TopBar = styled.div`
  height: 3px;
  width: 46px;
  background: ${customColor.darkGray};
  opacity: 0.3;
  border-radius: 3px;
  margin-top: 28px;
`;
const OpacityBox = styled.div`
  display: flex;
  position: absolute;
  height: 20px;
  width: 240px;
  background: linear-gradient(
    to bottom,
    ${customColor.white},
    ${customColor.white + '00'}
  );
  bottom: 1px;
  transform: translate(0, 100%);
  z-index: 1;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 34px;
  width: 100%;
  align-items: center;
  gap: 18px;
`;
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  gap: 24px;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding-bottom: 24px;
`;
