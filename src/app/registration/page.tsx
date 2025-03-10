import PageWrapper from "../src/components/page-wrapper";
import Registration from "../src/components/registration/registration";

const Page = () => {
  return (
    <PageWrapper back={false} hideTabBar>
      <Registration />
    </PageWrapper>
  );
};

export default Page;
