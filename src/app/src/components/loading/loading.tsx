import clsx from "clsx";

import Icon from "@components/icons/icons";

import { IconDefinition } from "@utils/consts";

export default function Loading() {
  const shimmer =
    "before:absolute before:z-10 before:opacity-50 before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-tg-secondary-bg-color before:to-transparent";

  return (
    <div className={clsx("h-[95vh] flex items-center justify-center", shimmer)}>
      {Icon({
        iconDefinition: IconDefinition.HEART,
        classes: `text-tg-subtitle-text-color h-16 heart-beat`,
      })}
    </div>
  );
}
