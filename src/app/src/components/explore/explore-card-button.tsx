import { ExploreCardButtonType } from "@utils/consts";
import clsx from "clsx";

interface ExploreCardButtonProps {
  type: ExploreCardButtonType;
}

export default function ExploreCardButton({ type }: ExploreCardButtonProps) {
  const classes = {
    [ExploreCardButtonType.ACCEPT]: "text-white bg-tg-button-color",
    [ExploreCardButtonType.REJECT]:
      "border-tg-button-color border-[0.1rem] text-tg-button-color",
  };
  return (
    <div
      className={clsx(
        "flex items-center justify-center p-3 rounded-xl w-full",
        classes[type]
      )}
    >
      YES
    </div>
  );
}
