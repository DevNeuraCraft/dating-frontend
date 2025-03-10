"use client";

import PageWrapper from "@components/page-wrapper";
import Explore from "@components/explore/explore";

export default function Home() {
  return (
    <PageWrapper back={false}>
      <Explore />
    </PageWrapper>
  );
}
