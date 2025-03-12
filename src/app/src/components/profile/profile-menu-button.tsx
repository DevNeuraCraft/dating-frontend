import clsx from "clsx";
import Link from "next/link";

import ProfileMenuButtonIconContainter from "@components/profile/profile-menu-button-icon-container";
import { IconDefinition as IconType } from "@fortawesome/fontawesome-svg-core";
import Icon from "@icons/icons";
import { popup } from "@telegram-apps/sdk-react";

import { IconDefinition } from "@utils/consts";

interface ProfileMenuButton {
  href?: string;
  icon: IconType;
  disabled?: boolean;
  iconBackgroundColor: string;
  title: string;
}

export default function ProfileMenuButton({
  href = "#",
  icon,
  title,
  disabled = false,
  iconBackgroundColor,
}: ProfileMenuButton) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 bg-tg-section-bg-color rounded-xl py-2 px-2 select-none",
        "active:opacity-50",
        "transition-all duration-200 ease-out active:scale-95",
        disabled ? "opacity-50" : ""
      )}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          if (!popup.isOpened()) {
            popup.open({
              title: "asd",
              message: "asd",
              buttons: [{ id: "asd", text: "asd", type: "default" }],
            });
          }
        }
      }}
    >
      <ProfileMenuButtonIconContainter color={iconBackgroundColor}>
        {Icon({ iconDefinition: icon, classes: "text-white" })}
      </ProfileMenuButtonIconContainter>

      <div
        className={clsx("flex items-center justify-between w-full h-full pe-2")}
      >
        <span className="text-tg-text-color text-sm font-normal">{title}</span>
        {Icon({ iconDefinition: IconDefinition.CHEVRON })}
      </div>
    </Link>
  );
}
