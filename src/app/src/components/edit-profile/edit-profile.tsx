import Loading from "@components/loading/loading";
import userStore from "@store/user-store";
import EditProfileform from "@components/edit-profile/edit-rpofile-form";
import { City } from "@app/src/types/data-interfaces";
import { fetchData } from "@utils/api/fetch-data";
import { ENDPOINTS, METHODS } from "@utils/endpoints";
import { useState, useEffect } from "react";

export default function Edit() {
  const { user, setUser } = userStore();
  const [cities, setCitites] = useState<City[]>([]);

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

  if (!user || cities.length === 0) return <Loading />;
  return <EditProfileform cities={cities} user={user} setUser={setUser}/>;
}
