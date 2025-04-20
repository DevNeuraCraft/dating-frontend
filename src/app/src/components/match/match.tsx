import userStore from '@store/user-store';
import { useEffect, useState } from 'react';
import { Swipe, SwipeResponse } from '@app/src/types/data-interfaces';
import { useParams } from 'next/navigation';
import { ENDPOINTS, METHODS } from '@utils/endpoints';
import { fetchData } from '@utils/api/fetch-data';
import Loading from '@components/loading/loading';

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

  if (!swipe && !loading) {
    return <Loading />;
  }

  return <div><p>{JSON.stringify(swipe)}</p></div>;
}
