import { useCallback, useEffect, useRef, useState } from 'react';

import FormInput from '@components/input/form-input';
import OffcanvasItemList from '@components/offcanvas-form/offcanvas-item-list';
import { City } from '../../types/data-interfaces';
import Icon from '@components/icons/icons';
import { IconDefinition } from '@utils/consts';
import { postEvent } from '@telegram-apps/sdk-react';

interface OffcanvasProps {
  isOpen: boolean;
  toggleOpen: () => void;
  cities: City[];
  setCity: (city: string) => void;
  closeButton?: boolean;
}

export default function Offcanvas({
                                    isOpen,
                                    toggleOpen,
                                    cities,
                                    setCity,
                                    closeButton = false,
                                  }: OffcanvasProps) {
  const offcanvasRef = useRef<HTMLDivElement>(null);

  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState<City[]>(cities);

  // Обработчик выбора города
  const handleCityChange = useCallback(
    (city: string) => {
      toggleOpen();
      setCity(city);
    },
    [setCity, toggleOpen],
  );

  // Обновление отфильтрованных городов при изменении списка городов
  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  // Обработчик изменения поискового запроса
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(e.target.value);

    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(value),
    );
    setFilteredCities(filtered);
  };

  // Анимация открытия/закрытия offcanvas
  useEffect(() => {
    if (offcanvasRef.current) {
      if (isOpen) {
        offcanvasRef.current.style.visibility = 'visible';
        offcanvasRef.current.style.opacity = '1';
      } else {
        offcanvasRef.current.style.opacity = '0';
        setTimeout(() => {
          if (offcanvasRef.current) {
            offcanvasRef.current.style.visibility = 'hidden';
          }
        }, 300);
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={offcanvasRef}
      className="fixed inset-0 z-50 bg-tg-secondary-bg-color transition-opacity duration-300 p-2"
      style={{ visibility: 'hidden', opacity: 0 }}
    >
      {closeButton && (
        <div className="flex justify-end px-1.5">
          <div
            onClick={() => {
              toggleOpen();
            }}
            onMouseDown={() => {
              postEvent('web_app_trigger_haptic_feedback', {
                type: 'selection_change',
              });
            }}
          >
            {Icon({
              iconDefinition: IconDefinition.CROSS,
              classes:
                'text-white bg-tg-subtitle-text-color rounded-full h-3 w-3 p-1',
            })}
          </div>
        </div>
      )}

      <div className="pt-4 h-full">
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
