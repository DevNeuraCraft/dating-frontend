import FormInput from "../input/form-input";
import RadioButton from "../radio/radio";

export default function RegistartionForm() {
  return (
    <div>
      <form action="">
        <div className="grid gap-2 mb-7">
          <FormInput placeholder="Имя:" minLenght={1} maxLenght={15} />
          <FormInput placeholder="О себе:" minLenght={30} maxLenght={120} />
          <p className="text-tg-subtitle-text-color text-xs ml-4">
            Пример: Дизайнер из Дубая. Люблю сёрфинг.
            <br />
            Макс. 120 символов
          </p>
        </div>
        <div className="grid gap-2 mb-7">
          <FormInput placeholder="Дата рождения" minLenght={1} maxLenght={15} />
          <FormInput placeholder="Ваш город" minLenght={1} maxLenght={15} />
        </div>
        <div>
          <h3 className="pb-1 pl-4 uppercase text-small text-tg-subtitle-text-color">
            Пол
          </h3>
          <div className="flex justify-between grow gap-2">
            <RadioButton label="Парень" />
            <RadioButton label="Девушка" />
          </div>
        </div>
      </form>
    </div>
  );
}
