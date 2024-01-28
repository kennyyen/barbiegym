import { HeaderSection } from '~/components/home-page/header-section';
import { PageWrapper } from '~/components/home-page/page-wrapper';
import { UsSection } from '~/components/home-page/us-section';

export default async function Home() {
  console.log('Rendering home page');

  return (
    <PageWrapper>
      <HeaderSection />
      <UsSection />
    </PageWrapper>
  );
}
