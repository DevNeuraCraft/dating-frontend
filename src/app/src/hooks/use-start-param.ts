import { useRouter, useSearchParams } from 'next/navigation';
import userStore from '@store/user-store';
import { AppRoute } from '@utils/consts';
import { useEffect } from 'react';

export default function useStartParam() {
  const { user } = userStore();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const userId = searchParams.get('tgWebAppStartParam');
    if (user && userId) {
      router.push(`${AppRoute.MATCH}/${userId}/`);
    }
  }, [user, searchParams, router]);
}
