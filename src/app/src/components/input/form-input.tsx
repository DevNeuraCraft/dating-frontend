interface FormInputProps {
  placeholder?: string;
  minLenght: number;
  maxLenght: number;
}

export default function FormInput({
  placeholder = "",
  minLenght,
  maxLenght,
}: FormInputProps) {
  return (
    <input
      className="w-full rounded-xl py-2.5 px-4 placeholder:tg-hint-color text-base bg-tg-section-bg-color box-border focus:outline-none text-tg-text-color"
      placeholder={placeholder}
      minLength={minLenght}
      maxLength={maxLenght}
    ></input>
  );
}
