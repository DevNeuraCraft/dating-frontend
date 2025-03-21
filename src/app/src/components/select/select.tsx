import clsx from "clsx";

interface SelectProps {
  optionList: string[] | number[];
  defaultOptionTitle: string;
  defaultValue?: string | number;
  name: string;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  optionList,
  defaultOptionTitle,
  name,
  defaultValue = "",
  onChange,
  error = false,
}: SelectProps) {
  return (
    <select
      onChange={onChange}
      name={name}
      className={clsx(
        "w-full rounded-xl py-2.5 px-4 placeholder:tg-hint-color text-base bg-tg-section-bg-color box-border focus:outline-none text-tg-text-color appearance-none",
        error ? "ring-1 ring-red-500" : ""
      )}
    >
      <option value={defaultValue}>{defaultOptionTitle}</option>
      {optionList.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
}
