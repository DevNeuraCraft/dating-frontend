interface RadioButtonProps {
  label: string;
}

export default function RadioButton({ label }: RadioButtonProps) {
  return (
    <div className="bg-tg-section-bg-color text-tg-text-color py-2.5 flex flex-1 rounded-xl px-4 select-none items-center">
      <input type="radio" className="hidden" />
      <span className="inline-block w-5 h-5 bg-tg-button-color rounded-full"></span>
      {label}
    </div>
  );
}
