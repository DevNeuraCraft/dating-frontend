import { location } from "@icons/icons";

interface ExploreCardDescriptionProps {
  name: string;
  age: number;
  city: string;
  about: string;
}

export default function ExploreCardDescription({
  name,
  age,
  city,
  about,
}: ExploreCardDescriptionProps) {
  return (
    <div className="flex flex-col px-4 py-3 gap-2">
      <p className="text-tg-text-color text-2xl font-medium">
        {name}, {age}
      </p>
      <div className="flex gap-2 flex-col text-tg-subtitle-text-color text-lg leading-tight">
        <p className="flex gap-2 items-center">
          {location()}
          {city}
        </p>
        <p className="break-all">{about}</p>
      </div>
    </div>
  );
}
