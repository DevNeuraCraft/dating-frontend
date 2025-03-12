import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

import Icon from "@components/icons/icons";

import { IconDefinition } from "@utils/consts";

interface OffcanvasInputProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  value: string;
  error?: boolean;
}

export default function OffcanvasInput({
  toggleOpen,
  title,
  value,
  error = false,
}: OffcanvasInputProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-xl py-2.5 px-4",
        "placeholder:tg-hint-color text-base bg-tg-section-bg-color",
        "box-border focus:outline-none text-tg-text-color flex justify-between select-none",
        error ? "ring-1 ring-red-500" : ""
      )}
      onClick={() => {
        toggleOpen((prev) => !prev);
      }}
    >
      <input className="hidden" />
      <span>{title}</span>
      <span className="text-tg-button-color flex items-center gap-2">
        {value || "Выбрать"}
        {Icon({
          iconDefinition: IconDefinition.CHEVRON_CIRCLE,
          classes: "text-tg-button-color",
        })}
      </span>
    </div>
  );
}
