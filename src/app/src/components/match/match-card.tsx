import { useCallback } from 'react';

import ExploreCardButtonContainer from '@components/explore/explore-card-buttons-container';
import ExploreCardDescription from '@components/explore/explore-card-description';
import ExploreCardMediaContainer from '@components/explore/explore-card-media-container';

import { fetchData } from '@utils/api/fetch-data';
import { SwipeStatus } from '@utils/consts';
import { ENDPOINTS, METHODS } from '@utils/endpoints';

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

  const reactToProfile = useCallback(
    async (status: SwipeStatus) => {
      if (currentUserId) {
        removeExplore(_id);
        try {
          await fetchData(
            ENDPOINTS.BACKEND.SWIPE.BASE,
            METHODS.PUT,
            {},
            { swiper_id: _id, swiped_id: currentUserId, status: status },
          );
        } catch (err) {
          console.error(err);
        }
      }
    },
    [_id, currentUserId, removeExplore],
  );

  return (
    <div>
      <ExploreCardMediaContainer mediasUrl={images} />
      <ExploreCardDescription name={name} age={age} about={about} city={city} />
      <ExploreCardButtonContainer removeExplore={reactToProfile} />
    </div>
  );
}
