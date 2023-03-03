/* 회원가입시 body 타입 */
export interface JoinMembershipType {
  user: {
    username: String;
    email: String;
    password: String;
    accountname: String;
    intro: String;
    image: String; // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
  };
}

/* 로그인시 body 타입 */
export interface LoginType {
  user: {
    email: String;
    password: String;
  };
}

/* 프로필 정보 타입 */
export interface MyProfileResType {
  user: {
    _id: String;
    username: String;
    accountname: String;
    image: String;
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
    email: String;
  };
}

/* 계정 타입 검증 */
export interface AccountNameVaildateType {
  user: {
    accountname: String;
  };
}
