import { City, User } from "@app/src/types/data-interfaces";
import RegistartionForm from "@components/registration/registration-form";
import MediaForm from "@components/registration/registration-media.form";
import { useRegistrationForm } from "@hooks/use-form";
import { mainButton } from "@telegram-apps/sdk-react";
import { uploadData } from "@utils/api/upload-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { useCallback, useEffect } from "react";

interface EditProfileformProps {
  cities: City[];
  user: User;
  setUser: (user: User | null) => void;
}

export default function EditProfileForm({
  cities,
  user,
  setUser,
}: EditProfileformProps) {
  const form = useRegistrationForm(user);

  const handleSubmit = useCallback(async () => {
    if (form.validateForm()) {
      try {
        const { user: newUser } = await uploadData(
          ENDPOINTS.BACKEND.USER.UPDATE(user._id),
          form.formState,
          form.images as string[] | File[],
          METHODS.PUT
        );
        setUser(newUser);
      } catch (err) {
        console.error(err);
      }
    }
  }, [form, setUser, user._id]);

  useEffect(() => {
    mainButton.onClick(handleSubmit);
    return () => {
      mainButton.offClick(handleSubmit);
    };
  }, [handleSubmit]);

  useEffect(() => {
    mainButton.setParams({ isVisible: true, text: "Сохарнить" });
    return () => {
      mainButton.setParams({ isVisible: false });
    };
  }, []);

  return (
    <div className="grid gap-5 pb-20">
      <MediaForm
        disableLabel
        images={form.images}
        handleImageChange={form.handleImageChange}
      />
      <RegistartionForm
        cities={cities}
        form={form}
        disableToggleBackbutton
        offcanvasCloseButton
      />
    </div>
  );
}
