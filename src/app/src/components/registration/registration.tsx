"use client";
import { useEffect, useState } from "react";

import RegistrationSlider from "@components/registration/registration-slider";
import { City } from "../../types/data-interfaces";

import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { useRegistrationForm } from "@hooks/use-form";

export default function Registration() {
  const [cities, setCitites] = useState<City[]>([]);
  const form = useRegistrationForm();

  useEffect(() => {
    (async () => {
      try {
        setCitites(await fetchData<City[]>(ENDPOINTS.BACKEND.CITIES, METHODS.GET));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <RegistrationSlider cities={cities} form={form} />;
}
