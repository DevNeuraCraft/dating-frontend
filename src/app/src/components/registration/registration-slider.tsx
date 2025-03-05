import { useRef, useState, useEffect, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import RegistartionForm from "@components/registration/registration-form";
import MediaForm from "@components/registration/registration-media.form";
import RegistrationSlideContainter from "@components/registration/registration-slide-container";
import { backButton, mainButton, popup } from "@telegram-apps/sdk-react";
import { City } from "../../types/data-interfaces";

import { swiperConfig } from "@utils/swiper-comfig";
import { useTelegramMainButton } from "@utils/telegram-ui";
import { UseRegistrationFormReturnType } from "@hooks/use-form";
import { useSwiperInit } from "@hooks/use-swiper-init";

import style from "@components/registration/registration-slider.module.css";
import { uploadData } from "../../utils/api/upload-data";

interface RegistrationSliderProps {
  cities: City[];
  form: UseRegistrationFormReturnType;
}

export default function RegistrationSlider({
  cities,
  form,
}: RegistrationSliderProps) {
  useTelegramMainButton({ isVisible: true, text: "Продолжить" });

  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useSwiperInit(swiperRef, paginationRef);

  const handleNext = useCallback(() => {
    if (swiperRef.current && form.validateForm()) {
      swiperRef.current.slideNext();
    }
  }, [form]);

  const hadleRegister = useCallback(async () => {
    if (!form.validateImages()) {
      if (!popup.isOpened())
        popup.open({
          title: "Загрузи три фото",
          message: "asd",
          buttons: [{ id: "my-id", type: "default", text: "Default text" }],
        });
        return;
    }
    await uploadData(form.formState, form.images as File[])
  }, [form]);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    backButton.onClick(handlePrev);

    if (isEnd) {
      backButton.show();
    } else {
      backButton.hide();
    }

    return () => {
      backButton.offClick(handlePrev);
    };
  }, [isEnd]);

  useEffect(() => {
    if (isBeginning) {
      mainButton.onClick(handleNext);
      mainButton.offClick(hadleRegister);
    } else {
      mainButton.offClick(handleNext);
      mainButton.onClick(hadleRegister);
    }

    return () => {
      mainButton.offClick(handleNext);
      mainButton.offClick(hadleRegister);
    };
  }, [hadleRegister, handleNext, isBeginning]);

  return (
    <>
      <div
        ref={paginationRef}
        className={`${style.paginationContainer} flex-row justify-between flex gap-2`}
      ></div>

      <Swiper
        {...swiperConfig}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        <SwiperSlide className="h-auto">
          <RegistrationSlideContainter title="Создание профиля">
            <RegistartionForm cities={cities} form={form} />
          </RegistrationSlideContainter>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <RegistrationSlideContainter title="Фотографии профиля">
            <MediaForm
              handleImageChange={form.handleImageChange}
              images={form.images}
            />
          </RegistrationSlideContainter>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
