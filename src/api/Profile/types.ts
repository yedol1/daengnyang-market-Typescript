/* 프로필 수정시 필요한 데이터 타입 */
export interface EditProfDataType {
  user: {
    username: String;
    accountname: String;
    intro: String;
    image: String;
  };
}

/* 반환되는 유저정보 타입 */
export interface UserProfResType {
  profile: {
    _id: String;
    username: String;
    accountname: String;
    intro: String;
    image: String;
    isfollow: Boolean;
    following: string[];
    follower: string[];
    followerCount: Number;
    followingCount: Number;
  };
}
