import clsx from "clsx";
import Link from "next/link";

import Icon from "@components/icons/icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { postEvent } from "@telegram-apps/sdk-react";

interface BottomBarButtonProps {
  href: string;
  currentRoute: string;
  title: string;
  icon: IconDefinition;
}

export default function BottomBarButton({
  href,
  icon,
  currentRoute,
  title,
}: BottomBarButtonProps) {
  const active = currentRoute === href;
  const volatileClasses = active
    ? "text-tg-button-color"
    : "text-tg-subtitle-text-color";

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-center flex-col gap-1",
        "py-3 pb-15 min-w-16",
        "bg-tg-secondary-bg-color",
        "transition-all duration-200 ease-out active:scale-90"
      )}
      onMouseDown={() => {
        postEvent("web_app_trigger_haptic_feedback", {
          type: "selection_change",
        });
      }}
    >
      {Icon({ iconDefinition: icon, size: "2x", classes: volatileClasses })}
      <span className={clsx(volatileClasses, "text-sm/10 leading-none")}>
        {title}
      </span>
    </Link>
  );
}
