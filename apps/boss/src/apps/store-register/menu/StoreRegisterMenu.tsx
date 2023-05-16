/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { AppBarLayout, NextButton, Typography } from '@street-vendor/core';
import { pathName } from 'apps/boss/src/configs/pathName';
import { atomStoreRegisterMenu } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { QuestionLabel } from '../components/QuestionLabel';
import { AddButton } from './components/AddButton';
import { AddMenu } from './components/AddMenu';

export interface MenuProps {
  image: File;
  name: string;
  price: string;
  weight: string;
}

export const StoreRegisterMenu = () => {
  const [menuArray, setMenuArray] = useRecoilState(atomStoreRegisterMenu);
  const handleSetMenuArray = (index: number, value: MenuProps) => {
    setMenuArray(menuArray.map((i, id) => (id === index ? value : i)));
  };

  const handleNext = () => {
    if (
      menuArray[0].image !== null &&
      menuArray[0].name !== '' &&
      menuArray[0].price !== '' &&
      menuArray[0].weight !== ''
    ) {
      Router.push(pathName.STORE_REGISTER.PHOTO);
    } else {
      toast.error('정보를 모두 입력해 주세요');
    }
  };
  return (
    <Container>
      <AppBarLayout title="메뉴 설정" titleAlign="center">
        <Form>
          <FormInner>
            <QuestionLabel label="이름과 가격, 용량/개수를 적어주세요">
              <MenuBox>
                {menuArray.map((i, id) => (
                  <AddMenu
                    key={id}
                    id={id}
                    handleSetMenuArray={handleSetMenuArray}
                  />
                ))}
                <AddButton />
              </MenuBox>
            </QuestionLabel>
            <Button>
              <NextButton
                background="orange4"
                type="button"
                onClick={handleNext}
              >
                <Typography
                  color="black"
                  fontWeight="bold"
                  size="16"
                  letterSpacing="-1.5px"
                  textAlign="center"
                >
                  다음으로
                </Typography>
              </NextButton>
            </Button>
          </FormInner>
        </Form>
      </AppBarLayout>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow: auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-items: center;
  padding-top: 33px;
  margin: 0 auto;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
`;
const Button = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 54px;
  padding-top: 44px;
  justify-content: center;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
`;
