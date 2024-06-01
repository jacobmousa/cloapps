import { Metadata } from "next";
import PageTemplate from "../components/Template/pageTemplate";
import AboutusDetail from "./aboutusDetail";
import OurServices from "./ourServices";

export const metadata: Metadata = {
  title: "CloApps - About Us",
  description: "General introduction to CloApps Company and its services.", 
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