import clsx from "clsx";
import Image from "next/image";

interface ExploreCardMediaProps {
  mediaUrl: string;
  classes?: string;
}

export default function ExploreCardMedia({
  mediaUrl,
  classes,
}: ExploreCardMediaProps) {
  return (
    <div className={clsx(classes, "relative")}>
      <Image
        className={clsx(classes, "w-full h-full object-cover object-center")}
        src={mediaUrl}
        alt="Profile media"
        fill
      />
    </div>
  );
}
