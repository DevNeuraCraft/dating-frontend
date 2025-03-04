import clsx from "clsx";

interface FormInputProps {
  placeholder?: string;
  minLength: number;
  maxLength: number;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export default function FormInput({
  placeholder = "",
  minLength,
  maxLength,
  value = "",
  onChange,
  name,
  error = false,
}: FormInputProps) {
  return (
    <input
      name={name}
      className={clsx(
        "w-full rounded-xl py-2.5 px-4 placeholder:tg-hint-color text-base bg-tg-section-bg-color box-border focus:outline-none text-tg-text-color",
        error ? "ring-1 ring-red-600" : ""
      )}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    ></input>
  );
}
