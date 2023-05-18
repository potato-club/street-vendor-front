// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { StartStoreRegister } from 'apps/boss/src/apps/store-register/start/StartStoreRegister';
import type { NextPage } from 'next';

const StartStoreRegisterMainPage: NextPage = () => {
  return <StartStoreRegister />;
};

export default StartStoreRegisterMainPage;
