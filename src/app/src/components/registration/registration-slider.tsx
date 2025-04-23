import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import RegistartionForm from '@components/registration/registration-form';
import MediaForm from '@components/registration/registration-media.form';
import RegistrationSlideContainter from '@components/registration/registration-slide-container';
import { swiperRegistrationConfig } from '@/app/src/utils/swiper-configs';
import { showWrongImagesPopup, useTelegramMainButton } from '@utils/telegram';
import { backButton, mainButton } from '@telegram-apps/sdk-react';
import { City } from '../../types/data-interfaces';

import { uploadData } from '../../utils/api/upload-data';
import { AppRoute } from '@utils/consts';
import userStore from '@store/user-store';
import { UseRegistrationFormReturnType } from '@hooks/use-form';
import { useSwiperInit } from '@hooks/use-swiper-init';

import style from '@components/registration/registration-slider.module.css';
import { ENDPOINTS, METHODS } from '@utils/endpoints';

interface RegistrationSliderProps {
  cities: City[];
  form: UseRegistrationFormReturnType;
}

export default function RegistrationSlider({
                                             cities,
                                             form,
                                           }: RegistrationSliderProps) {
  const router = useRouter();
  const { setUser } = userStore();
  useTelegramMainButton({ isVisible: true, text: 'Продолжить' });

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
      showWrongImagesPopup();
      return;
    }
    try {
      const { user } = await uploadData(
        ENDPOINTS.BACKEND.USER.BASE,
        form.formState,
        form.images as File[],
        METHODS.POST,
      );
      setUser(user);
      mainButton.setParams({ isVisible: false });
      router.push(AppRoute.EXPLORE);
    } catch (err) {
      console.error(err);
    }
  }, [form, router, setUser]);

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
        {...swiperRegistrationConfig}
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
        <SwiperSlide className="h-[95vh]">
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
