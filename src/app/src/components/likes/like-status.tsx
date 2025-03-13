import Icon from "@components/icons/icons";

import { IconDefinition, SwipeStatus } from "@utils/consts";
import clsx from "clsx";

interface LikeStatusProps {
  status: SwipeStatus;
}

export default function LikeStatus({ status }: LikeStatusProps) {
  const likeStatusData = {
    [SwipeStatus.REJECTED]: {
      icon: IconDefinition.CROSS,
      classes: "bg-tg-destructive-text-color",
    },
    [SwipeStatus.ACCEPTED]: {
      icon: IconDefinition.CHECK,
      classes: "bg-tg-button-color",
    },
    [SwipeStatus.IGNORED]: {
      icon: IconDefinition.DOTS,
      classes: "bg-tg-subtitle-text-color",
    },
  };
  return (
    <div
      className={clsx(
        likeStatusData[status].classes,
        "rounded-full p-2 flex h-9 w-9 justify-center items-center "
      )}
    >
      {Icon({
        iconDefinition: likeStatusData[status].icon,
        size: "xs",
        classes: clsx("rounded-full flex text-white"),
      })}
    </div>
  );
}
