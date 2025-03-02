import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const swiperConfig: SwiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1,
  allowTouchMove: false,
  modules: [Pagination],
  pagination: false,
};