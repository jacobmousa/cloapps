import { Metadata } from "next";
import PageTemplate from "../components/Template/pageTemplate";
import AboutusDetail from "./aboutusDetail";
import OurServices from "./ourServices";

export const metadata: Metadata = {
  title: "CloApps - About Us",
  description: "General infroduction about CloApps Company and its services that covers.", 
};

export default function Aboutus() {
    return (
        <>
        <PageTemplate>
         <AboutusDetail />
         <OurServices />
        </PageTemplate>
      </>
    );

}