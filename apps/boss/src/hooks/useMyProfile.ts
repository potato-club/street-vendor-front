import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { authApi } from '../apis/controller/auth.api';
import {
  atomMyProfileEmail,
  atomMyProfileName,
  atomMyProfileNickname,
  atomMyProfileProfileUrl,
} from '../recoil/atoms/atomMyProfile';
import { Profile } from '../types/user.type';

export const useMyProfile = () => {
  const [email, setEmail] = useRecoilState(atomMyProfileEmail);
  const [name, setName] = useRecoilState(atomMyProfileName);
  const [nickname, setNickname] = useRecoilState(atomMyProfileNickname);
  const [profileUrl, setProfileUrl] = useRecoilState(atomMyProfileProfileUrl);

  const profile: Profile = useMemo(
    () => ({ email, name, nickname, profileUrl }),
    [email, name, nickname, profileUrl]
  );

  const getMyProfile = async () => {
    try {
      // const response = await authApi.myInfo();
      // return response.data;
    } catch (e) {
      //
    } finally {
      //
    }
  };

  const refreshProfile = async () => {
    // const response: Profile = await getMyProfile();
    // changeEmail(response.email);
    // changeName(response.name);
    // changeNickname(response.nickname);
    // changeProfileUrl(response.profileUrl);
  };

  const changeEmail = (value: string) => {
    setEmail(value);
  };
  const changeName = (value: string) => {
    setName(value);
  };
  const changeNickname = (value: string) => {
    setNickname(value);
  };
  const changeProfileUrl = (value: string) => {
    setProfileUrl(value);
  };

  const resetProfile = () => {
    resetEmail();
    resetName();
    resetNickname();
    resetProfileUrl();
  };

  const resetEmail = () => setEmail('');
  const resetName = () => setName('');
  const resetNickname = () => setNickname('');
  const resetProfileUrl = () => setProfileUrl('');
  return {
    profile,
    email,
    name,
    nickname,
    profileUrl,
    changeEmail,
    changeName,
    changeNickname,
    changeProfileUrl,
    resetProfile,
    resetEmail,
    resetName,
    resetNickname,
    resetProfileUrl,
    refreshProfile,
  };
};
