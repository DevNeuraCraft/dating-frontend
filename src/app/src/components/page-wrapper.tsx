"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { backButton } from "@telegram-apps/sdk-react";
import BottomBar from "./bottom-bar/bottom.bar";

export default function PageWrapper({
  children,
  // hideTitle = false,
  hideTabBar = false,
  back = true,
}: React.PropsWithChildren<{
  className?: string;
  // hideTitle?: boolean;
  hideTabBar?: boolean;
  removePadding?: boolean;
  back?: boolean;
}>) {
  const router = useRouter();

  useEffect(() => {
    const handleBack = () => {
      router.back();
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
  }, [back, router]);

  return (
    <main>
      <div className="p-2">{children}</div>
      {!hideTabBar && <BottomBar />}
    </main>
  );
}
