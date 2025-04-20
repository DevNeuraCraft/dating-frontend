import Media from "@components/media/media";

interface MediaFormProps {
    images: (File | string | null)[];
    handleImageChange: (index: number, file: File) => void;
    disableLabel?: boolean;
}

export default function MediaForm({
                                      handleImageChange,
                                      images,
                                      disableLabel = false,
                                  }: MediaFormProps) {
    return (
        <div className="grid gap-2">
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
            {!disableLabel && (
                <p className="text-tg-subtitle-text-color text-xs ml-4">
                    Добавтье 3 фотографии, чтобы продолжить
                </p>
            )}
        </div>
    );
}
