'use client';

import PageWrapper from '@components/page-wrapper';
import Explore from '@components/explore/explore';
import useStartParam from '@hooks/use-start-param';

export default function Home() {
  useStartParam();
  return (
    <PageWrapper back={false}>
      <Explore />
    </PageWrapper>
  );
}
