import Likes from "@components/likes/likes";
import PageWrapper from "@components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper back hideTabBar>
      <Likes />
    </PageWrapper>
  );
}
