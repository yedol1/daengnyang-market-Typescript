/* 회원가입시 body 타입 */
export interface JoinMembershipType {
  user: {
    username: string;
    email: string;
    password: string;
    accountname: string;
    intro: string;
    image: string;
  };
}

/* 로그인시 body 타입 */
export interface LoginType {
  user: {
    email: string;
    password: string;
  };
}

/* 프로필 정보 타입 */
export interface MyProfileResType {
  user: {
    _id: string;
    username: string;
    accountname: string;
    image: string;
    isfollow: boolean;
    following: string[];
    follower: string[];
    followerCount: number;
    followingCount: number;
  };
}

/* 이메일 타입 검증 */
export interface EmailVaildateType {
  user: {
    email: string;
  };
}

/* 계정 타입 검증 */
export interface AccountNameVaildateType {
  user: {
    accountname: string;
  };
}
