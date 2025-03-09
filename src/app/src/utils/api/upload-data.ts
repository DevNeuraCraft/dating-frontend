import axios from "axios";
import { AxiosError } from "axios";

import { RegistrationUserForm } from "../../types/client-interfaces";
import { UserResponse } from "../../types/data-interfaces";
import { ENDPOINTS } from "../endpoints";
import { getTelegramUserData } from "../telegram";

export const uploadData = async (
  fromData: RegistrationUserForm,
  images: File[]
): Promise<UserResponse> => {
  const user = getTelegramUserData()

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

  try {
    const response = await axios.post<UserResponse>(
      ENDPOINTS.BACKEND.USER.BASE,
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