"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppRoute } from "./src/utils/consts";
import PageWrapper from "./src/components/page-wrapper";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (true) {
      router.push(AppRoute.REGISTRATION);
    }
  }, [router]);

  return (
    <PageWrapper>
      <div></div>
    </PageWrapper>
  );
}
