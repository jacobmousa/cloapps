import { Metadata } from "next";
import PageTemplate from "../components/Template/pageTemplate";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "CloApps - Contact Us",
  description: "Contact the CloApps Team for any questions or service inquiries."
};

export default function ContactUs() {
  return (
    <>
      <PageTemplate>
        <div className="container-fluid bg-light py-5">
          <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Contact Us</h1>
            <p>
              We at CloApps are here to help! Feel free to contact us with any questions about our services or products.
            </p>
          </div>
        </div>
        <ContactForm />
      </PageTemplate>
    </>
  );
}