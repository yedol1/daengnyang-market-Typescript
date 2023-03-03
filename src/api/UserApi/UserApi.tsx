import { EmailVaildateType, JoinMembershipType, LoginType, MyProfileResType, AccountNameVaildateType } from './Types';
import { AxiosPromise } from 'axios';
import { userApiInstance } from '../CustomAxios';

/* 회원가입 */
export const postJoinMembership = (joinUserData: JoinMembershipType): AxiosPromise => {
  return userApiInstance.post('', joinUserData);
};

/* 로그인 */
export const postLogin = (loginData: LoginType): AxiosPromise => {
  return userApiInstance.post('/login', loginData);
};

/* 내 프로필 정보 불러오기 */
export const getMyProfInfo = (): AxiosPromise<{ data: MyProfileResType[] }> => {
  return userApiInstance.get('/myinfo');
};

/* 이메일 검증 */
export const postValidateEmail = (vaildateData: EmailVaildateType): AxiosPromise => {
  return userApiInstance.post('/emailvalid', vaildateData);
};

/* 계정 검증 */
export const postAccountNameVaildate = (validateData: AccountNameVaildateType): AxiosPromise => {
  return userApiInstance.post('/accountnamevalid', validateData);
};
