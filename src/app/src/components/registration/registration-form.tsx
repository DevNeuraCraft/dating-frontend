import { useEffect, useState } from "react";

import FormInput from "@components/input/form-input";
import Offcanvas from "@components/offcanvas-form/offcanvas";
import OffcanvasInput from "@components/offcanvas-form/offcanvas-input";
import RadioButton from "@components/radio/radio";
import Select from "@components/select/select";
import { backButton, mainButton } from "@telegram-apps/sdk-react";
import { City } from "../../types/data-interfaces";

import { getYears } from "@utils/get-year-list";
import { UseRegistrationFormReturnType } from "@hooks/use-form";

interface RegistartionFormProps {
  cities: City[];
  form: UseRegistrationFormReturnType;
}

export default function RegistartionForm({
  cities,
  form,
}: RegistartionFormProps) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState<boolean>(false);

  const toggleOffCanvas = () => {
    setIsOffcanvasOpen((prev) => !prev);
  };

  useEffect(() => {
    mainButton.setParams({ isVisible: !isOffcanvasOpen });

    if (isOffcanvasOpen) {
      backButton.show();
      backButton.onClick(toggleOffCanvas);
    } else {
      backButton.hide();
    }
    return () => {
      backButton.offClick(toggleOffCanvas);
    };
  }, [isOffcanvasOpen]);

  return (
    <>
      <div>
        <form action="">
          <div className="grid gap-2 mb-7">
            <FormInput
              name="name"
              placeholder="Имя:"
              minLength={1}
              maxLength={15}
              value={form.formState.name}
              onChange={form.handleInputChange}
              error={form.errors.name}
            />
            <FormInput
              name="about"
              placeholder="О себе:"
              minLength={30}
              maxLength={120}
              value={form.formState.about}
              onChange={form.handleInputChange}
              error={form.errors.about}
            />
            <p className="text-tg-subtitle-text-color text-xs ml-4">
              Пример: Дизайнер из Дубая. Люблю сёрфинг.
              <br />
              Макс. 120 символов
            </p>
          </div>
          <div className="grid gap-2 mb-7">
            <Select
              onChange={form.handleNumberInputChange}
              name="birthYear"
              defaultOptionTitle="Год рождения"
              defaultValue={0}
              optionList={getYears()}
              error={form.errors.birthYear}
            />
            <OffcanvasInput
              error={form.errors.city}
              toggleOpen={setIsOffcanvasOpen}
              value={form.formState.city}
              title="Город"
            />
          </div>
          <div>
            <h3 className="pb-1 pl-4 uppercase text-small text-tg-subtitle-text-color">
              Пол
            </h3>
            <div className="flex justify-between grow gap-2">
              <RadioButton
                label="Парень"
                isChecked={form.formState.gender === "male"}
                onChange={() => form.handleGenderChange("male")}
              />
              <RadioButton
                label="Девушка"
                isChecked={form.formState.gender === "female"}
                onChange={() => form.handleGenderChange("female")}
              />
            </div>
          </div>
        </form>
      </div>
      <Offcanvas
        setCity={form.handleCityChange}
        isOpen={isOffcanvasOpen}
        toggleOpen={toggleOffCanvas}
        cities={cities}
      />
    </>
  );
}
