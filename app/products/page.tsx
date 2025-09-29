import { Metadata } from "next";
import Link from "next/link";
import PageTemplate from "../components/Template/pageTemplate";

export const metadata: Metadata = {
  title: "CloApps - Products",
  description:
    "Ready-made products from CloApps: Starter Website, E-commerce, Booking, SEO Booster, and Analytics Dashboard."
};

type Product = {
  id: string;
  title: string;
  blurb: string;
  features: string[];
};

const products: Product[] = [
  {
    id: "starter-website",
    title: "Starter Website",
    blurb:
      "Launch a fast, mobile‑friendly site with essential pages and SEO built-in.",
    features: [
      "Up to 5 pages (Home, About, Services, Blog, Contact)",
      "Responsive design and accessibility",
      "Basic on‑page SEO and analytics setup",
      "Contact form and lead capture"
    ]
  },
  {
    id: "ecommerce",
    title: "E‑commerce Store",
    blurb:
      "Everything you need to sell online with secure checkout and inventory. Based on Bagisto OpenSource for flexibility and scalability.",
    features: [
      "Product catalog, variants, coupons",
      "Payments (Stripe/PayPal) and taxes",
      "Orders, shipping, and emails",
      "Basic reports and dashboards"
    ]
  },
  {
    id: "booking-app",
    title: "Booking & Appointment",
    blurb:
      "Accept bookings, manage slots, and send reminders to reduce no‑shows.",
    features: [
      "Calendar with availability",
      "Email/SMS reminders",
      "Payments and deposits",
      "Admin dashboard"
    ]
  }
];

export default function Products() {
  return (
    <PageTemplate>
      <section className="container-fluid bg-light py-5">
        <div className="col-md-8 m-auto text-center">
          <h1 className="h1 mb-3">Products</h1>
          <p className="mb-0">
            Ready-to-use solutions to launch and grow faster. Pick a package and we’ll tailor it to your needs.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((p) => (
            <div className="col" key={p.id} id={p.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="text-muted mb-2">{p.blurb}</p>
                  <p className="fw-semibold mb-3">
                    <span className="badge bg-success me-2">Special offer</span>
                    <span>Talk to us to get the price</span>
                  </p>
                  <ul className="list-unstyled small mb-4">
                    {p.features.map((f, i) => (
                      <li key={i} className="mb-1">
                        <i className="fa-solid fa-check text-success me-2" aria-hidden="true"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={`/contactus?product=${encodeURIComponent(p.title)}`}
                      className="btn btn-primary w-100"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 p-md-5 bg-dark text-white rounded-3 text-center">
              <h2 className="h3 mb-3">Not sure which product fits?</h2>
              <p className="mb-4">Tell us about your goals and budget. We’ll recommend the best option.</p>
              <Link href="/contactus" className="btn btn-outline-light btn-lg">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}