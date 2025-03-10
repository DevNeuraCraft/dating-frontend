interface ProfileDescriptionProps {
  name: string;
  age: number;
  about: string;
}

export default function ProfileDescription({
  name,
  age,
  about,
}: ProfileDescriptionProps) {
  return (
    <div className="bg-color flex flex-col gap-1">
      <div className="bg-tg-section-bg-color flex flex-col p-2 rounded-b-xl">
        <p className="text-tg-text-color text-2xl px-3">
          {name}, {age}
        </p>
      </div>
      <div className="bg-tg-section-bg-color flex flex-col p-2 rounded-xl">
        <p className="text-tg-text-color text-sm px-1 leading-4 break-all">
          {about}
        </p>
      </div>
    </div>
  );
}
