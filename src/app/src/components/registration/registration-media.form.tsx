import Media from "@components/media/media";

interface MediaFormProps {
  images: (File | string | null)[];
  handleImageChange: (index: number, file: File) => void;
}

export default function MediaForm({
  handleImageChange,
  images,
}: MediaFormProps) {
  return (
    <div className="grid grid-cols-2 h-[441px]  md:h-[441px] gap-px">
      <Media
        image={images[0]}
        index={0}
        classes="rounded-s-xl"
        handleImageChange={handleImageChange}
      />
      <div className="grid gap-px">
        <Media
          image={images[1]}
          index={1}
          classes="h-[220px] rounded-tr-xl"
          handleImageChange={handleImageChange}
        />
        <Media
          image={images[2]}
          index={2}
          classes="h-[220px] rounded-br-xl"
          handleImageChange={handleImageChange}
        />
      </div>
    </div>

    // <div className="grid gap-7">
    //   <div className="h-[421px] grid grid-cols-2 gap-px">
    //     <Media
    //       image={images[0]}
    //       index={0}
    //       classes="rounded-l-[10px]"
    //       handleImageChange={handleImageChange}
    //     />
    //     <div className="grid gap-px">
    //       <Media
    //         image={images[1]}
    //         index={1}
    //         classes="max-xs-h:h-[150px] h-[220px] rounded-tr-xl"
    //         handleImageChange={handleImageChange}
    //       />
    //       <Media
    //         image={images[2]}
    //         index={2}
    //         classes="max-xs-h:h-[150px] h-[220px] rounded-br-xl"
    //         handleImageChange={handleImageChange}
    //       />
    //     </div>
    //   </div>
    //   <p className="text-tg-subtitle-text-color text-xs ml-4">
    //     Добавтье 3 фотографии, чтобы продолжить
    //   </p>
    // </div>
  );
}
