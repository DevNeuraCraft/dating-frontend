import Loading from "@components/loading/loading";
import userStore from "@store/user-store";
import EditProfileform from "@components/edit-profile/edit-rpofile-form";
import { City } from "@app/src/types/data-interfaces";
import { useRegistrationForm } from "@hooks/use-form";
import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { useState, useEffect } from "react";

export default function Edit() {
  const { user } = userStore();
  const [cities, setCitites] = useState<City[]>([]);
  const form = useRegistrationForm();

  useEffect(() => {
    (async () => {
      try {
        setCitites(
          await fetchData<City[]>(ENDPOINTS.BACKEND.CITIES, METHODS.GET)
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (!user) return <Loading />;
  return <EditProfileform cities={cities} form={form} />;
}
