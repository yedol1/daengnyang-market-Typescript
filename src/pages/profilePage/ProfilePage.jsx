import React from 'react';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContextStore } from '../../context/AuthContext';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

import ContentsLayout from '../../components/layout/ContentsLayout/ContentsLayout';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileProduct from './ProfileProduct/ProfileProduct';
import ProfilePost from './ProfilePost/ProfilePost';
import Loading from '../../components/common/Loading/Loading';

const ProfilePage = () => {
  const navigate = useNavigate();
  // useParams() 사용해서 url 에 있는 파라미터 받아오기
  let { accountName } = useParams();
  // 내 프로필인지 확인 -> 필요할까?
  const [isMyProfile, setMyProfile] = useState(null);
  // 내 프로필 정보 담기
  const [myProfileInfo, setMyProfileInfo] = useState('');
  // 유저의 프로필 정보 담기
  const [userProfileInfo, setUserProfileInfo] = useState('');

  // 일단 해당 데이터로 프로필 전달하기
  const tempToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZiYWY0MTdhZTY2NjU4MWM3MzAyMSIsImV4cCI6MTY3NjcxMTA4NywiaWF0IjoxNjcxNTI3MDg3fQ.GNjuwF4GcX7fQiZtX2I8H3kpgClotfYvwS-_pPyIzRE`;
  const tempAccountName = 'daengnyang';
  const tempMyAccountName = 'rosy';
  const url = `https://mandarin.api.weniv.co.kr`;
  const { userToken, userAccountname } = useContext(AuthContextStore);

  // 나의 정보 불러오기
  const getMyProfileInfo = async () => {
    await axios({
      url: `https://mandarin.api.weniv.co.kr/user/myinfo`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tempToken}`,
      },
    })
      .then((res) => {
        setMyProfileInfo(res.data);
        console.log(myProfileInfo);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMyProfileInfo();
  }, []);

  // token 정보 없으면 login 페이지로 넘어가게
  // if (userToken === null) {
  //   navigate('/login');
  // }

  if (userToken === null) {
    window.location = '/login';
  } else if (!myProfileInfo) {
    return <Loading />;
  } else {
    return (
      <>
        <TopBasicNav />
        <ContentsLayout padding='2rem 0 0 0'>
          <ProfileHeader profileState={isMyProfile} followState={false} profileData={myProfileInfo} />
          <SectionBorder />
          <ProfileProduct />
          <SectionBorder />
          <ProfilePost postState={true} />
        </ContentsLayout>
        <TabMenu currentMenuId={4} />
      </>
    );
  }
};

export default ProfilePage;

const SectionBorder = styled.div`
  height: 6px;
  width: 100%;
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  background-color: var(--chat-bg-color);
`;
