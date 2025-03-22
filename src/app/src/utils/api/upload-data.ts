import axios from "axios";
import { AxiosError } from "axios";

import { RegistrationUserForm } from "../../types/client-interfaces";
import { UserResponse } from "../../types/data-interfaces";
import { METHODS } from "@utils/endpoints";
import { getTelegramUserData } from "@utils/telegram";

export const uploadData = async (
  url: string,
  fromData: RegistrationUserForm,
  images: File[] | string[],
  method: METHODS.POST | METHODS.PUT
): Promise<UserResponse> => {
  const user = getTelegramUserData();

  const formData = new FormData();

  formData.append("id", user.id.toString());
  formData.append("first_name", user.firstName || "");
  formData.append("last_name", user.lastName || "");
  formData.append("username", user.username || "");
  formData.append("language_code", user.languageCode || "");

  Object.entries(fromData).forEach(([key, value]) => {
    formData.append(key, value.toString());
  });

  images.forEach((image) => {
    if (image instanceof File) {
      formData.append("images", image);
    }
    if (typeof image === "string") formData.append("existsImages", image);
  });

  try {
    const response = await axios<UserResponse>({
      url,
      method,
      data: formData,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "Ошибка при регистрации:",
        (error as AxiosError).response?.data || (error as AxiosError).message
      );
    } else {
      console.error("Неизвестная ошибка:", error);
    }
    throw error;
  }
};
