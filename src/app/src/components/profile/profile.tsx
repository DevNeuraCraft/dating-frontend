import ProfileContainer from "@components/profile/profile-container";

import userStore from "@store/user-store";

export default function Profile() {
  const { user } = userStore();
  if (!user) return <p className="bg-tg-text-color">loading</p>;
  return <ProfileContainer user={user} />;
}
