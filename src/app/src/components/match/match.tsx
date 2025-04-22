import userStore from '@store/user-store';
import { useEffect, useState } from 'react';
import { Swipe, SwipeResponse } from '@app/src/types/data-interfaces';
import { useParams } from 'next/navigation';
import { ENDPOINTS, METHODS } from '@utils/endpoints';
import { fetchData } from '@utils/api/fetch-data';
import Loading from '@components/loading/loading';
import MathCard from '@components/match/match-card';

export default function Match() {
  const { user } = userStore();
  const { swiperId } = useParams<{ swiperId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [swipe, setSwipe] = useState<Swipe | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (!user) return;
        const { swipe } = await fetchData<SwipeResponse>(
          ENDPOINTS.BACKEND.SWIPE.BASE,
          METHODS.GET,
          { swiperId: swiperId, swipedId: user._id },
        );
        setSwipe(swipe);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [swiperId, user]);

  if (!user || !swipe || loading) {
    return <Loading />;
  }

  return <MathCard currentUserId={user._id} {...swipe.swiper_id} status={swipe.status}
                   username={swipe.swiper_id.username} />;
}
