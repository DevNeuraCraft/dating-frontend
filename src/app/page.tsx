"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppRoute, productionMode } from "@utils/consts";
import PageWrapper from "./src/components/page-wrapper";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (productionMode) {
      router.push(AppRoute.REGISTRATION);
    } else {router.push(AppRoute.HEART_BEAT)}
  }, [router]);

  return (
    <PageWrapper>
      <div></div>
    </PageWrapper>
  );
}
