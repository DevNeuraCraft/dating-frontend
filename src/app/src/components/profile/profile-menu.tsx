import ProfileMenuButton from "@components/profile/profile-menu-button";

import {
  AppRoute,
  IconDefinition,
  ProfileMenuButtonTitle,
} from "@utils/consts";

export default function ProfileMenu() {
  return (
    <div className="mt-4 grid gap-2 pt-2">
      <ProfileMenuButton
        icon={IconDefinition.PEN}
        iconBackgroundColor="bg-menu-edit"
        title={ProfileMenuButtonTitle.EDIT_PROFILE}
      />
      <ProfileMenuButton
        disabled
        icon={IconDefinition.SLIDERS}
        iconBackgroundColor="bg-menu-filters"
        title={ProfileMenuButtonTitle.FILTERS}
      />
      <ProfileMenuButton
        href={AppRoute.LIKES}
        icon={IconDefinition.HEART}
        iconBackgroundColor="bg-menu-likes"
        title={ProfileMenuButtonTitle.LIKES}
      />
    </div>
  );
}
