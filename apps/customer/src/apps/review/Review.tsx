import {
  AskPhoto,
  AskSubmit,
  AskTextarea,
  Typography,
} from '@street-vendor/core';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export const Review = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();
  return (
    <Container>
      <ContainerInner>
        <Spoon>
          <SpoonText>
            <Typography size="16" fontWeight="bold" letterSpacing="-0.9px">
              맛숟가락
            </Typography>
            <Typography size="12" color="darkGray" letterSpacing="-0.6px">
              맛있으셨나요? 맛있었던만큼 숟가락 갯수를 선택해주세요.
            </Typography>
            숟가락
          </SpoonText>
        </Spoon>
        <ReviewText>
          <AskTextarea
            label="리뷰하기"
            placeholder="리뷰 내용을 작성해주세요:)"
            value="reviewContent"
            register={register}
            errors={errors}
            watch={watch}
          />
        </ReviewText>
        <ReviewPhoto>
          <AskPhoto
            label="첨부 사진"
            value="reviewPhoto"
            placeholder="사진은 최대 3장까지 등록 가능합니다."
            errors={errors}
          />
        </ReviewPhoto>
        <ReviewRegister>
          <AskSubmit isAgreeChecked={true} onClick={() => {}} />
        </ReviewRegister>
      </ContainerInner>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;
const ContainerInner = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  min-height: 100%;
  height: 100%;
`;
const Spoon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 24px 0;
  gap: 22px 0;
  padding: 0 7%;
`;
const SpoonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
const ReviewText = styled.div`
  display: flex;
  padding: 0 7%;
`;
const ReviewPhoto = styled.div`
  display: flex;
  padding: 0 7%;
  margin-top: 16px;
`;
const ReviewRegister = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 7%;
`;
