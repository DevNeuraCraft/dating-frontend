import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const swiperRegistrationConfig: SwiperOptions = {
  spaceBetween: 10,
  slidesPerView: 1,
  allowTouchMove: false,
  modules: [Pagination],
  pagination: false,
};

export const swiperProfileConfig: SwiperOptions = {
  spaceBetween: 10,
  allowTouchMove: true,
  modules: [Pagination],
  pagination: true,
};
