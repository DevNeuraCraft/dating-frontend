import { mainButton } from "@telegram-apps/sdk-react";
import { useEffect, RefObject } from "react";
import { Swiper as SwiperType } from "swiper";
import { PaginationOptions } from "swiper/types";

export const useSwiperInit = (
  swiperRef: RefObject<SwiperType | null>,
  paginationRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const swiper = swiperRef.current;
    const paginationElement = paginationRef.current;

    if (swiper && paginationElement) {
      const paginationOptions = swiper.params.pagination as PaginationOptions;

      if (paginationOptions) {
        paginationOptions.el = paginationElement;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }
    }

    return () => {
      mainButton.setParams({ isVisible: false });
    };
  }, [swiperRef, paginationRef]);
};
