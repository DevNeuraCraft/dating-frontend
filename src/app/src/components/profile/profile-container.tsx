import ProfileDescription from "@/app/src/components/profile/profile-description";
import ProfileMenu from "@components/profile/profile-menu";
import ProfileSlider from "@components/profile/profile-slider";
import { User } from "../../types/data-interfaces";

interface ProfileContainerProps {
  user: User;
}

export default function ProfileContainer({ user }: ProfileContainerProps) {
  return (
    <div className="pb-28">
      <ProfileSlider imagesUrl={user.images} />
      <ProfileDescription name={user.name} age={user.age} about={user.about} />
      <ProfileMenu />
    </div>
  );
}
