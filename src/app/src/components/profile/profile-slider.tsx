import { Swiper, SwiperSlide } from "swiper/react";

import ProfileImageSlide from "@components/profile/profile-image-slide";

import { swiperProfileConfig } from "@utils/swiper-configs";

interface ProfileSliderProps {
  imagesUrl: string[];
}

export default function ProfileSlider({ imagesUrl }: ProfileSliderProps) {
  return (
    <div className="profile-swiper">
      <Swiper {...swiperProfileConfig}>
        {imagesUrl.map((imageUrl, index) => (
          <SwiperSlide className="max-xs-h:h-[12rem] h-[15rem]" key={index}>
            <ProfileImageSlide imageUrl={imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
