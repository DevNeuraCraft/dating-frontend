import { useCallback, useEffect, useRef, useState } from "react";

import FormInput from "@components/input/form-input";
import OffcanvasItemList from "@components/offcanvas-form/offcanvas-item-list";
import { City } from "../../types/data-interfaces";

interface OffcanvasProps {
  isOpen: boolean;
  toggleOpen: () => void;
  cities: City[];
  setCity: (city: string) => void;
}

export default function Offcanvas({
  isOpen,
  toggleOpen,
  cities,
  setCity,
}: OffcanvasProps) {
  const offcanvasRef = useRef<HTMLDivElement>(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<City[]>(cities);

  const handleCityChange = useCallback(
    (city: string) => {
      toggleOpen();
      setCity(city);
    },
    [setCity, toggleOpen]
  );

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(e.target.value);

    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(value)
    );
    setFilteredCities(filtered);
  };

  useEffect(() => {
    if (offcanvasRef.current) {
      if (isOpen) {
        offcanvasRef.current.style.visibility = "visible";
        offcanvasRef.current.style.opacity = "1";
      } else {
        offcanvasRef.current.style.opacity = "0";
        setTimeout(() => {
          if (offcanvasRef.current) {
            offcanvasRef.current.style.visibility = "hidden";
          }
        }, 300);
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={offcanvasRef}
      className="fixed inset-0 z-50 bg-tg-secondary-bg-color transition-opacity duration-300"
      style={{ visibility: "hidden", opacity: 0 }}
    >
      <div className="pt-4">
        <FormInput
          name="search"
          placeholder="Поиск"
          minLength={1}
          maxLength={15}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <OffcanvasItemList cities={filteredCities} setCity={handleCityChange} />
      </div>
    </div>
  );
}
