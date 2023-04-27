export type UserApi = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  followers: number;
  following: number;
  repos: number;
  bio: string;
};

export type UserProfileProps = {
  user: UserApi;
}