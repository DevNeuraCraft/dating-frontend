import Image from "next/image";

interface ProfileImageSlideProps {
  imageUrl: string;
}

export default function ProfileImageSlide({
  imageUrl,
}: ProfileImageSlideProps) {
  return (
    <Image
      src={imageUrl}
      alt="Profile image"
      fill
      className="object-cover rounded-t-xl"
      unoptimized={true}
    />
  );
}
