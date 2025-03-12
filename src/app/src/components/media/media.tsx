import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

import Icon from "@icons/icons";

import { IconDefinition } from "@utils/consts";

interface MediaProps {
  classes?: string;
  index: number;
  image: File | null;
  handleImageChange: (index: number, file: File) => void;
}

export default function Media({
  classes = "",
  handleImageChange,
  index,
  image,
}: MediaProps) {
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleImageChange(index, selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    setFile(image);
  }, [image]);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  return (
    <div
      className={clsx(
        "bg-tg-section-bg-color flex justify-center",
        "items-center cursor-pointer hover:bg-tg-hover-color transition-colors",
        classes
      )}
      onClick={() => input.current?.click()}
      role="button"
      aria-label="Выбрать изображение"
      tabIndex={0}
    >
      <input
        ref={input}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      {previewUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={previewUrl}
          alt="Превью выбранного изображения"
          className={clsx("w-full h-full object-cover object-center", classes)}
        />
      ) : (
        Icon({
          iconDefinition: IconDefinition.PLUS,
          size: "xl",
          classes: "text-tg-text-color",
        })
      )}
    </div>
  );
}
