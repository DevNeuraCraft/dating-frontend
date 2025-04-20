import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import RegistartionForm from "@components/registration/registration-form";
import MediaForm from "@components/registration/registration-media.form";
import { City, User } from "@app/src/types/data-interfaces";
import { mainButton, popup } from "@telegram-apps/sdk-react";

import { uploadData } from "@utils/api/upload-data";
import { AppRoute } from "@utils/consts";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import exploresStore from "@store/explores-store";
import { useRegistrationForm } from "@hooks/use-form";

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
  const { setExplores } = exploresStore();
  const router = useRouter();
  const form = useRegistrationForm(user);

  const handleSubmit = useCallback(async () => {
    if (form.validateForm()) {
      if (!popup.isOpened()) {
        try {
          const { user: newUser } = await uploadData(
            ENDPOINTS.BACKEND.USER.UPDATE(user._id),
            form.formState,
            form.images as string[] | File[],
            METHODS.PUT
          );
          setUser(newUser);
          setExplores([]);
          await popup.open({
            message: "Анкета успешно обновлена",
          });
          router.push(AppRoute.PROFILE);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }, [form, router, setExplores, setUser, user._id]);

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