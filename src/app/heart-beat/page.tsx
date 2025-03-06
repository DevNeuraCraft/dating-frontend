import PageWrapper from "@components/page-wrapper";
import HeartBeat from "@components/heart-beat/heart-beat";

export default function Page() {
  return (
    <PageWrapper back={false}>
      <HeartBeat />
    </PageWrapper>
  );
}
