"use client";

import HeartBeat from "@components/heart-beat/heart-beat";
import PageWrapper from "@components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper back={false}>
      <HeartBeat />
    </PageWrapper>
  );
}