import ProfileMenuButton from "@components/profile/profile-menu-button";
import { likes, pen, sliders } from "@icons/icons";

import { ProfileMenuButtonTitle } from "@utils/consts";

export default function ProfileMenu() {
  return (
    <div className="mt-4 grid gap-2 pt-2">
      <ProfileMenuButton
        icon={pen}
        iconBackgroundColor="bg-menu-edit"
        title={ProfileMenuButtonTitle.EDIT_PROFILE}
      />
      <ProfileMenuButton
        disabled
        icon={sliders}
        iconBackgroundColor="bg-menu-filters"
        title={ProfileMenuButtonTitle.FILTERS}
      />
      <ProfileMenuButton
        icon={likes}
        iconBackgroundColor="bg-menu-likes"
        title={ProfileMenuButtonTitle.LIKES}
      />
    </div>
  );
}
