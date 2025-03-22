import Icon from "@icons/icons";
import { postEvent } from "@telegram-apps/sdk-react";

import { IconDefinition } from "@utils/consts";

interface RadioButtonProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

export default function RadioButton({
  label,
  isChecked,
  onChange,
}: RadioButtonProps) {
  const icon = isChecked
    ? Icon({
        iconDefinition: IconDefinition.CIRCLE_CHECK,
        size: "lg",
        classes: "text-tg-button-color",
      })
    : Icon({
        iconDefinition: IconDefinition.CIRCLE,
        size: "lg",
        classes: "text-tg-text-color",
      });

  return (
    <div
      className="bg-tg-section-bg-color text-tg-text-color py-2.5 flex flex-1 rounded-xl px-4 select-none items-center gap-2.5 cursor-pointer"
      onClick={onChange}
      onMouseDown={() => {
        postEvent("web_app_trigger_haptic_feedback", {
          type: "selection_change",
        });
      }}
    >
      <input
        type="radio"
        className="hidden"
        checked={isChecked}
        onChange={onChange}
      />
      {icon}
      {label}
    </div>
  );
}
