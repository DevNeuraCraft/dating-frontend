import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import RegistrationSlideContainter from "./registration-slide-container";
import style from "./registration-slider.module.css";
import { useTelegramMainButton } from "../../utils/telegram-ui";
import { backButton, mainButton } from "@telegram-apps/sdk-react";
import { swiperConfig } from "../../utils/swiper-comfig";
import { useSwiperInit } from "../../hooks/use-swiper-init";
import RegistartionForm from "./registration-form";

export default function RegistrationSlider() {
  useTelegramMainButton({ isVisible: true, text: "Продолжить" });

  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useSwiperInit(swiperRef, paginationRef);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

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
    } else {
      mainButton.offClick(handleNext);
    }

    return () => {
      mainButton.offClick(handleNext);
    };
  }, [isBeginning]);

  return (
    <>
      {/* Контейнер для пагинации */}
      <div
        ref={paginationRef}
        className={`${style.paginationContainer} flex-row justify-between flex gap-2`}
      ></div>

      {/* Swiper */}
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
            <RegistartionForm/>
          </RegistrationSlideContainter>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <RegistrationSlideContainter title="Добавление фото">
            <p className="text-tg-text-color">Контент 2</p>
          </RegistrationSlideContainter>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
