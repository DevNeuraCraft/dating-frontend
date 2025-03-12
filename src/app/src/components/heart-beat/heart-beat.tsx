import Icon from "@icons/icons";

import { IconDefinition } from "@utils/consts";

export default function HeartBeat() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-1.5">
      {Icon({
        iconDefinition: IconDefinition.HEART,
        classes: "text-tg-subtitle-text-color h-16 heart-beat",
      })}
      <p className="text-tg-subtitle-text-color">Уже скоро...</p>
    </div>
  );
}