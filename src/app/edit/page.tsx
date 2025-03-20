"use client";

import Edit from "@components/edit-profile/edit-profile";
import PageWrapper from "@components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper back hideTabBar>
      <Edit />
    </PageWrapper>
  );
}
