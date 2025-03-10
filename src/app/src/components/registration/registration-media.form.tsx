import Media from "@components/media/media";

interface MediaFormProps {
  images: (File | null)[];
  handleImageChange: (index: number, file: File) => void;
}

export default function MediaForm({
  handleImageChange,
  images,
}: MediaFormProps) {
  return (
    <div className="grid gap-1">
      <div className="h-[421px] grid grid-cols-2 gap-px">
        <Media
          image={images[0]}
          index={0}
          classes="rounded-l-[10px]"
          handleImageChange={handleImageChange}
        />
        <div className="grid gap-px">
          <Media
            image={images[1]}
            index={1}
            classes="rounded-tr-[10px] h-[210px]"
            handleImageChange={handleImageChange}
          />
          <Media
            image={images[2]}
            index={2}
            classes="rounded-br-[10px] !h-[210px]"
            handleImageChange={handleImageChange}
          />
        </div>
      </div>
      <p className="text-tg-subtitle-text-color text-xs ml-4">
        Добавтье 3 фотографии, чтобы продолжить
      </p>
    </div>
  );
}
