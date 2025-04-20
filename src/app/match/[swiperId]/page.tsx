'use client';
import PageWrapper from '@components/page-wrapper';
import Match from '@components/match/match';

export default function MatchPage() {
  return <PageWrapper hideTabBar back={false}>
    <Match />
  </PageWrapper>;
}
