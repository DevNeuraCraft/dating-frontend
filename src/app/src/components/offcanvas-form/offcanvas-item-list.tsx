import OffcanvasItem from './offcanvas-item';
import { City } from '../../types/data-interfaces';

interface OffcanvasItemListProps {
  cities: City[];
  setCity: (city: string) => void;
}

export default function OffcanvasItemList({
                                            cities,
                                            setCity,
                                          }: OffcanvasItemListProps) {
  return (
    <div className="flex flex-col gap-1 mt-5 mb-7 h-[95vh] overflow-y-auto">
      {cities.map((city) => (
        <OffcanvasItem
          key={city._id}
          title={city.name}
          toggleOpen={() => {
            setCity(city.name);
          }}
        />
      ))}
    </div>
  );
}
