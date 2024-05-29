
import Head from "next/head";
import PageTemplate from "./components/Template/pageTemplate";
import IndexCarousel from "./index/indexCarousel";
import OurServices from "./index/ourServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloApps - Site Expert, eCommerse Shop, WebApplication",
  description: "Optimize your online presence with our expert services in site development, e-commerce solutions, and web application development. Our team's expertise ensures top-notch SEO strategies tailored to enhance your digital footprint and drive traffic to your site.", 
};

export default function Index() {
    return (
      <>
       <PageTemplate>
          <IndexCarousel />
          <OurServices />
        </PageTemplate>
      </>
    );

}