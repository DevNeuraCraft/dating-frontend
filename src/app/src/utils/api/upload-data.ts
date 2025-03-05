import axios from "axios";
import { AxiosError } from "axios";

import { initDataUser } from "@telegram-apps/sdk-react";
import { RegistrationUserForm } from "../../types/client-interfaces";
import { UserResponse } from "../../types/data-interfaces";
import { ENDPOINTS } from "../endpoints";

export const uploadData = async (
  fromData: RegistrationUserForm,
  images: File[]
): Promise<UserResponse> => {
  const user = initDataUser();
  if (!user) {
    throw new Error("Пользователь не определён");
  }

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
    if (image) {
      formData.append("images", image);
    }
  });

  console.log("Данные формы:", Array.from(formData.entries()));

  try {
    const response = await axios.post<UserResponse>(
      ENDPOINTS.BACKEND.USER,
      formData
    );
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