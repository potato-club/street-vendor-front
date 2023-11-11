import { animated, useSpring } from '@react-spring/web';
import { customColor } from '@street-vendor/core';
import styled from 'styled-components';
import { OrderDataStateType, StepProps } from '../DetailStore';
import { Info, Menu } from '../components';
import { StoreImage } from '../components/StoreImage';

const StoreInfo = ({ setStep, setOrderData }: StepProps & OrderDataStateType) => {
  const springAnimation = useSpring({
    from: { y: -10 },
    to: { y: -40 },
    config: {
      tension: 100,
    },
  });

  return (
    <>
      <StoreImage />
      <ContentWrapper style={springAnimation}>
        <Info />
        <Line />
        <Menu setStep={setStep} setOrderData={setOrderData} />
      </ContentWrapper>
    </>
  );
};

export default StoreInfo;

const ContentWrapper = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${customColor.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Line = styled.hr`
  width: 100%;
  border: solid 6px ${customColor.beige};
`;
