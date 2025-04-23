'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { backButton } from '@telegram-apps/sdk-react';
import BottomBar from './bottom-bar/bottom.bar';
import { AppRoute } from '@utils/consts';

export default function PageWrapper({
                                      children,
                                      hideTabBar = false,
                                      back = true,
                                      forceBack = false,
                                    }: React.PropsWithChildren<{
  className?: string;
  hideTabBar?: boolean;
  removePadding?: boolean;
  back?: boolean;
  forceBack?: boolean;
}>) {
  const router = useRouter();

  useEffect(() => {
    const handleBack = () => {
      if (!forceBack)
        router.back();
      else
        router.push(AppRoute.EXPLORE);
    };
    if (back) {
      backButton.show();
      backButton.onClick(handleBack);
    } else {
      backButton.hide();
    }
    return () => {
      backButton.offClick(handleBack);
    };
  }, [back, forceBack, router]);

  return (
    <main>
      <div className="p-2">{children}</div>
      {!hideTabBar && <BottomBar />}
    </main>
  );
}
