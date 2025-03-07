import { heart } from "@icons/icons";

export default function HeartBeat() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-1.5">
      {heart()}
      <p className="text-tg-subtitle-text-color">Уже скоро...</p>
    </div>
  );
}
