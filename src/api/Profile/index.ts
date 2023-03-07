import { AxiosPromise } from 'axios';
import { putUserApiInstance, profileApiInstance } from '../CustomAxios';
import { EditProfDataType, UserProfResType } from './types';

/* 프로필수정 */
export const putEditProfile = (editData: EditProfDataType): AxiosPromise => {
  return putUserApiInstance.put('', editData);
};

/* 유저 프로필 정보 */
export const getUserProfInfo = (accountname: string): AxiosPromise<{ data: UserProfResType[] }> => {
  return profileApiInstance.get(`/myinfo/${accountname}`);
};

/* 팔로우 신청 */
export const postFollow = (accountname: string): AxiosPromise => {
  return profileApiInstance.post(`/${accountname}/follow`);
};

/* 팔로우 취소 */
export const postUnFollow = (accountname: string): AxiosPromise => {
  return profileApiInstance.post(`/${accountname}/unfollow`);
};

/* 팔로잉 리스트 불러오기 */
export const getFollowingList = (
  accountname: string,
  limit?: number,
  skip?: number,
): AxiosPromise<{ data: UserProfResType[] }> => {
  const queryParams = new URLSearchParams(); // URL 쿼리 파라미터 생성

  // limit 파라미터 설정
  if (limit !== undefined) {
    queryParams.append('limit', String(limit));
  } else {
    queryParams.append('limit', String(10));
  }

  // skip 파라미터 설정
  if (skip !== undefined) {
    queryParams.append('skip', String(skip));
  } else {
    queryParams.append('skip', String(0));
  }

  // GET 요청 보내기
  return profileApiInstance.get(`/${accountname}/following?${queryParams.toString()}`);
};

/* 팔로워 리스트 불러오기 */
export const getFollowerList = (
  accountname: string,
  limit?: number,
  skip?: number,
): AxiosPromise<{ data: UserProfResType[] }> => {
  const queryParams = new URLSearchParams(); // URL 쿼리 파라미터 생성

  // limit 파라미터 설정
  if (limit !== undefined) {
    queryParams.append('limit', String(limit));
  } else {
    queryParams.append('limit', String(10));
  }

  // skip 파라미터 설정
  if (skip !== undefined) {
    queryParams.append('skip', String(skip));
  } else {
    queryParams.append('skip', String(0));
  }

  // GET 요청 보내기
  return profileApiInstance.get(`/${accountname}/follower/?${queryParams.toString()}`);
};
