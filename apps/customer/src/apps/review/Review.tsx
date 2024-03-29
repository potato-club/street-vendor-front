import {
  FormPhoto,
  FormSubmit,
  FormTextarea,
  SpoonRatingForm,
  Typography,
  AppBarLayout,
} from '@street-vendor/core';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';
import { useQueryPostReview } from '../../hooks/query/review/useQueryPostReview';

export const Review = () => {
  const { register, watch, control, handleSubmit } = useForm<FieldValues>();

  const { mutate } = useQueryPostReview();

  const submit = async (data: FieldValues) => {
    const formData = new FormData();
    data.images.pop();
    for (let i = 0; i < data.images.length; i++) {
      formData.append('images', data.images[i][0]);
    }
    delete data.images;
    data.orderId = 2;
    formData.append(
      'request',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );
    mutate(formData);
  };

  const handleErrors = () => {
    return toast.error('내용을 모두 입력해 주세요');
  };

  return (
    <Container>
      <AppBarLayout title="리뷰 쓰기" search home>
        <ContainerInner onSubmit={handleSubmit(submit, handleErrors)}>
          <Content>
            <Spoon>
              <SpoonText>
                <Typography size="16" fontWeight="bold" letterSpacing="-0.9px">
                  맛숟가락
                </Typography>
                <Typography size="12" color="darkGray" letterSpacing="-0.6px">
                  맛있으셨나요? 맛있었던만큼 숟가락 갯수를 선택해주세요.
                </Typography>
                <SpoonRatingForm name="rate" control={control} />
              </SpoonText>
            </Spoon>
            <ReviewText>
              <FormTextarea
                label="리뷰하기"
                placeholder="리뷰 내용을 작성해주세요:)"
                value="comment"
                register={register}
                watch={watch}
              />
            </ReviewText>
            <ReviewPhoto>
              <FormPhoto
                label="첨부 사진"
                value="images"
                placeholder="사진은 최대 3장까지 등록 가능합니다."
                watch={watch}
                register={register}
              />
            </ReviewPhoto>
          </Content>
          <ReviewRegister>
            <FormSubmit
              isAgreeChecked={true}
              onClick={() => {
                console.log();
              }}
            />
          </ReviewRegister>
        </ContainerInner>
      </AppBarLayout>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  justify-content: space-between;
  margin: 0 auto;
`;
const Content = styled.div``;
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
  width: 100%;
  padding: 0 7%;
`;
