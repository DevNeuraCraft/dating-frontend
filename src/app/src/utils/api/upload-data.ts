import axios from "axios";
import { UserResponse } from "../../types/data-interfaces";
import { ENDPOINTS } from "../endpoints";
import { RegistrationUserForm } from "../../types/client-interfaces";

export const uploadData = async (
  fromData: RegistrationUserForm,
  images: File[]
) => {
  const formData = new FormData();

  // Добавляем данные формы
  Object.entries(fromData).forEach(([key, value]) => {
    formData.append(key, value.toString());
  });

  // Добавляем изображения
  images.forEach((image, index) => {
    if (image) {
      formData.append(`image${index + 1}`, image);
    }
  });
  try {
    const response = await axios.post<UserResponse>(ENDPOINTS.BACKEND.USER, 
        formData
    );
    return response.data
  } catch (error) {
    console.error(`Ошибка при регистрации ${error}`)
    throw error
  }
};
