import { useState, useCallback, useRef } from "react";

import { RegistrationUserForm } from "../types/client-interfaces";

interface FormErrors {
  name?: boolean;
  about?: boolean;
  birthYear?: boolean;
  city?: boolean;
}

export interface UseRegistrationFormReturnType {
  errors: FormErrors;
  formState: RegistrationUserForm;
  images: (File | null)[];
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCityChange: (city: string) => void;
  handleImageChange: (index: number, file: File) => void;
  handleGenderChange: (gender: "male" | "female") => void;
  resetForm: () => void;
  validateForm: () => boolean;
  validateImages: () => boolean;
}

export function useRegistrationForm(
  initForm?: RegistrationUserForm
): UseRegistrationFormReturnType {
  const isSubmitted = useRef<boolean>(false);
  const initialState = useRef<RegistrationUserForm>({
    name: initForm?.name || "",
    about: initForm?.about || "",
    birthYear: initForm?.birthYear || 0,
    city: initForm?.city || "",
    gender: initForm?.gender || "male",
  });

  const [formState, setFormState] = useState<RegistrationUserForm>(
    initialState.current
  );
  const [images, setImages] = useState<(File | null)[]>([null, null, null]);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleImageChange = useCallback((index: number, file: File) => {
    setImages((prev) => {
      const newImages = [...prev];
      newImages[index] = file;
      return newImages;
    });
  }, []);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      if (isSubmitted.current) {
        setErrors((prev) => ({ ...prev, [name]: !value.trim() }));
      }
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleNumberInputChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      const numericValue = parseInt(value, 10) || 0;
      if (isSubmitted.current) {
        setErrors((prev) => ({ ...prev, [name]: numericValue === 0 }));
      }
      setFormState((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    },
    []
  );

  const handleCityChange = useCallback((city: string) => {
    setFormState((prev) => ({ ...prev, city }));
    setErrors((prev) => ({ ...prev, city: false }));
  }, []);

  const handleGenderChange = useCallback((gender: "male" | "female") => {
    setFormState((prev) => ({ ...prev, gender }));
  }, []);

  const resetForm = useCallback(() => {
    setFormState(initialState.current);
    setErrors({});
  }, []);

  const validateName = (name: string): boolean => !!name.trim();
  const validateAbout = (about: string): boolean => !!about.trim();
  const validateBirthYear = (birthYear: number): boolean => {
    const currentYear = new Date().getFullYear();
    return !(birthYear < 1900 || birthYear > currentYear);
  };
  const validateCity = (city: string): boolean => !!city.trim();

  const validateImages = useCallback((): boolean => {
    const isValid = images.every((image) => image !== null);
    return isValid;
  }, [images]);

  const validateForm = useCallback((): boolean => {
    isSubmitted.current = true;
    const newErrors: FormErrors = {
      name: !validateName(formState.name),
      about: !validateAbout(formState.about),
      birthYear: !validateBirthYear(formState.birthYear),
      city: !validateCity(formState.city),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }, [formState]);

  return {
    images,
    formState,
    errors,
    handleImageChange,
    handleInputChange,
    handleCityChange,
    handleGenderChange,
    handleNumberInputChange,
    resetForm,
    validateForm,
    validateImages,
  };
}
