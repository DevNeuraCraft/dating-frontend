"use client";

import HeartBeat from "../src/components/heart-beat/heart-beat";
import PageWrapper from "../src/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper back={false}>
      <HeartBeat />
    </PageWrapper>
  );
}
