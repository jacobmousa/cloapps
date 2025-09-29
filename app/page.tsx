import PageTemplate from "./components/Template/pageTemplate";
import IndexCarousel from "./index/indexCarousel";
import OurServices from "./index/ourServices";

export default function Index() {
  return (
    <PageTemplate>
      <IndexCarousel />
      <OurServices />
    </PageTemplate>
  );
}