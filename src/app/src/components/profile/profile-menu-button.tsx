import { JSX } from "react";
import clsx from "clsx";
import Link from "next/link";

import ProfileMenuButtonIconContainter from "@components/profile/profile-menu-button-icon-container";
import { chevron } from "@icons/icons";
import { popup } from "@telegram-apps/sdk-react";

interface ProfileMenuButton {
  icon: () => JSX.Element;
  disabled?: boolean;
  iconBackgroundColor: string;
  title: string;
}

export default function ProfileMenuButton({
  icon,
  title,
  disabled = false,
  iconBackgroundColor,
}: ProfileMenuButton) {
  return (
    <Link
      href="#"
      className={clsx(
        "flex items-center gap-3 bg-tg-section-bg-color rounded-xl py-2 px-2",
        "active:opacity-50",
        disabled ? "opacity-50" : ""
      )}
      onClick={(event) => {
        event.preventDefault();
        if (!popup.isOpened()) {
          popup.open({
            title: "asd",
            message: "asd",
            buttons: [{ id: "asd", text: "asd", type: "default" }],
          });
        }
      }}
    >
      <ProfileMenuButtonIconContainter color={iconBackgroundColor}>
        {icon()}
      </ProfileMenuButtonIconContainter>

      <div
        className={clsx(
          "flex items-center justify-between w-full h-full pe-2 "
        )}
      >
        <span className="text-tg-text-color text-sm font-normal select-none">
          {title}
        </span>
        {chevron()}
      </div>
    </Link>
  );
}
