import { useCallback } from "react";

import ExploreCardButtonContainer from "@components/explore/explore-card-buttons-container";
import ExploreCardDescription from "@components/explore/explore-card-description";
import ExploreCardMediaContainer from "@components/explore/explore-card-media-container";

import { fetchData } from "@utils/api/fetch-data";
import { ExploreCardButtonType } from "@utils/consts";
import { ENDPOINTS, METHODS } from "@utils/endpoints";

interface ExploreCardProps {
  currentUserId?: string;
  _id: string;
  name: string;
  age: number;
  city: string;
  about: string;
  images: string[];
  removeExplore: (id: string) => void;
}

export default function ExploreCard({
  currentUserId,
  _id,
  name,
  age,
  city,
  about,
  images,
  removeExplore,
}: ExploreCardProps) {
  const removeExploreWithId = useCallback(
    async (type: ExploreCardButtonType) => {
      if (currentUserId) {
        removeExplore(_id);
        try {
          await fetchData(
            ENDPOINTS.BACKEND.SWIPE.BASE,
            METHODS.POST,
            {},
            { swiper_id: currentUserId, swiped_id: _id, swipe_type: type }
          );
        } catch (err) {
          console.error(err);
        }
      }
    },
    [_id, currentUserId, removeExplore]
  );
  return (
    <div>
      <ExploreCardMediaContainer mediasUrl={images} />
      <ExploreCardDescription name={name} age={age} about={about} city={city} />
      <ExploreCardButtonContainer removeExplore={removeExploreWithId} />
    </div>
  );
}
