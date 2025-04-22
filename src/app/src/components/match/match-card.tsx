import { useCallback, useState } from 'react';
import ExploreCardDescription from '@components/explore/explore-card-description';
import ExploreCardMediaContainer from '@components/explore/explore-card-media-container';

import { fetchData } from '@utils/api/fetch-data';
import { CardButtonType, IconDefinition, SwipeStatus } from '@utils/consts';
import { ENDPOINTS, METHODS } from '@utils/endpoints';
import MathCardButtonContainer from '@components/match/match-card-button-container';
import CardButton from '@components/buttons/card-button';
import { postEvent } from '@telegram-apps/sdk-react';
import MatchRejectField from '@components/match/match-reject-field';

interface MathCardProps {
  currentUserId?: string;
  _id: string;
  name: string;
  age: number;
  city: string;
  about: string;
  images: string[];
  status: SwipeStatus;
  username?: string;
}

export default function MathCard({
                                   currentUserId,
                                   _id,
                                   name,
                                   age,
                                   city,
                                   about,
                                   images,
                                   status,
                                   username,
                                 }: MathCardProps) {

  const [currentStatus, setCurrentStatus] = useState<SwipeStatus>(status);

  const reactToProfile = useCallback(
    async (newStatus: SwipeStatus) => {
      if (currentUserId) {
        try {
          await fetchData(
            ENDPOINTS.BACKEND.SWIPE.BASE,
            METHODS.PUT,
            {},
            { swiper_id: _id, swiped_id: currentUserId, status: newStatus },
          );
          setCurrentStatus(newStatus);
        } catch (err) {
          console.error(err);
        }
      }
    },
    [_id, currentUserId],
  );

  const handleContact = () => {
    console.log(ENDPOINTS.TG.USER_CHAT(username || ''));
    postEvent('web_app_open_tg_link', {
      path_full: ENDPOINTS.TG.USER_CHAT(username || ''),
    });
  };

  const button = {
    [SwipeStatus.IGNORED]: <MathCardButtonContainer reactToProfile={reactToProfile} />,
    [SwipeStatus.ACCEPTED]: <CardButton onClick={handleContact} icon={IconDefinition.PLANE}
                                        type={CardButtonType.POSITIVE} text={'Написать'} />,
    [SwipeStatus.REJECTED]: <MatchRejectField />,
  };

  return (
    <div>
      <ExploreCardMediaContainer mediasUrl={images} />
      <ExploreCardDescription name={name} age={age} about={about} city={city} />
      {button[currentStatus]}
    </div>
  );
}
