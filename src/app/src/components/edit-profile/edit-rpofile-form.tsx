import { City } from "@app/src/types/data-interfaces";
import RegistartionForm from "@components/registration/registration-form";
import MediaForm from "@components/registration/registration-media.form";
import { UseRegistrationFormReturnType } from "@hooks/use-form";
import { mainButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

interface EditProfileformProps {
  cities: City[];
  form: UseRegistrationFormReturnType;
}

export default function EditProfileForm({
  cities,
  form,
}: EditProfileformProps) {
  useEffect(() => {
    mainButton.setParams({ isVisible: true, text: "Сохарнить" });
    return () => {
      mainButton.setParams({ isVisible: false });
    };
  }, []);

  return (
    <div className="grid gap-5 pb-20">
      <MediaForm
        images={form.images}
        handleImageChange={form.handleImageChange}
      />
      <RegistartionForm cities={cities} form={form} disableToggleBackbutton />
    </div>
  );
}
