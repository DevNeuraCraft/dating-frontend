"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { backButton } from "@telegram-apps/sdk-react";

export default function PageWrapper({
  children,
  // hideTitle = false,
  // hideTabBar = false,
  back = true,
}: React.PropsWithChildren<{
  className?: string;
  // hideTitle?: boolean;
  // hideTabBar?: boolean;
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
    <main className="p-2">
      <div style={{ height: "100px" }}></div>
      {children}
    </main>
  );
}
