/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NextButton, Typography } from '@street-vendor/core';
import { atomStoreRegisterSchedule } from 'apps/boss/src/recoil/atoms/atomStoreRegister';
import { pathName } from 'apps/boss/src/configs/pathName';
import Router from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { QuestionLabel } from '../components/QuestionLabel';
import { DaySchedule } from './components/DayScheduler';
import { StoreRegisterTimePickerModal } from './components/StoreRegisterTimePickerModal';

export const StoreRegisterSchedule = () => {
  const scheduleValue = useRecoilValue(atomStoreRegisterSchedule);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    Router.push(pathName.STORE_REGISTER.MENU);
  };
  return (
    <Container>
      <StoreRegisterTimePickerModal
        isOpen={isModalOpen}
        handleCloseModal={() => setIsModalOpen(false)}
      />
      <Form>
        <FormInner>
          <QuestionLabel label="영업 시간과 마감 시간을 설정해주세요">
            <Scheduler>
              {scheduleValue.map((i, id) => (
                <DaySchedule
                  key={i.day}
                  index={id}
                  handleOpenModal={() => setIsModalOpen(true)}
                />
              ))}
            </Scheduler>
          </QuestionLabel>
          <Button>
            <NextButton background="orange4" type="button" onClick={handleNext}>
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
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
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
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 7%;
`;
const Scheduler = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 18px;
`;
const Button = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 54px;
  padding-top: 44px;
  justify-content: center;
`;
