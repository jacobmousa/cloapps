import { Metadata } from "next";
import Link from "next/link";
import PageTemplate from "../components/Template/pageTemplate";
import OurServices from "../index/ourServices";

export const metadata: Metadata = {
  title: "CloApps - Services",
  description:
    "Explore CloApps services: websites, e‑commerce, web apps, SEO, cloud hosting, and ongoing support."
};

export default function Services() {
  return (
    <PageTemplate>
      <section className="container-fluid bg-light py-5">
        <div className="col-md-8 m-auto text-center">
          <h1 className="h1 mb-3">Our Services</h1>
          <p className="mb-0">
            End‑to‑end solutions to plan, build, launch, and grow your digital products.
          </p>
        </div>
      </section>

      {/* Web Applications detail (linked from footer: /services#web-app) */}
      <section id="web-app" className="container py-5">
        <div className="row g-4">
          <div className="col-12">
            <h2 className="h3 mb-3">Web Applications</h2>
            <p className="text-muted">
              We design and build robust web applications with clean architecture, secure authentication, and scalable data models.
              Frontend and backend communicate via well‑documented REST APIs for reliable integrations and future‑proof extensibility.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 border rounded-3 h-100">
              <h3 className="h5 mb-3">How we build</h3>
              <ul className="mb-0">
                <li><strong>Frontend:</strong> Next.js + React + TypeScript for performance, accessibility, and SEO.</li>
                <li><strong>Backend:</strong> .NET 8 (ASP.NET Core) exposing REST APIs with OpenAPI/Swagger docs.</li>
                <li><strong>Data:</strong> SQL Server/PostgreSQL with EF Core; Redis for caching where needed.</li>
                <li><strong>Integrations:</strong> Payments, email, analytics, and third‑party APIs.</li>
                <li><strong>Security:</strong> Auth (JWT/OAuth), ASP.NET Core Identity/RBAC, validation, and rate limiting.</li>
                <li><strong>DevOps:</strong> CI/CD, Docker, env configs, monitoring, and logging.</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 border rounded-3 h-100">
              <h3 className="h5 mb-3">AI‑assisted delivery & quality</h3>
              <ul className="mb-0">
                <li><strong>AI‑assisted development:</strong> accelerates boilerplate, refactors, and documentation.</li>
                <li><strong>API design with AI:</strong> draft endpoints, schemas, and examples for faster reviews.</li>
                <li><strong>Testing strategy:</strong> unit (xUnit/Jest), integration (ASP.NET Core TestServer + HttpClient), and E2E (Playwright/Cypress).</li>
                <li><strong>Contract tests:</strong> OpenAPI‑backed contracts to keep clients and servers in sync.</li>
                <li><strong>Static checks:</strong> TypeScript strict mode, ESLint, Prettier, and security linters.</li>
                <li><strong>Performance:</strong> Lighthouse/Core Web Vitals tracking and regression guards.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps detail (linked from /services#mobile-app) */}
      <section id="mobile-app" className="container pb-5">
        <div className="row g-4">
          <div className="col-12">
            <h2 className="h3 mb-3">Mobile Applications</h2>
            <p className="text-muted">
              Build native‑quality mobile apps for iOS and Android that reuse your REST API and business logic.
              We focus on smooth UX, offline‑first patterns, and secure authentication to deliver an app your customers will love.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 border rounded-3 h-100">
              <h3 className="h5 mb-3">What you get</h3>
              <ul className="mb-0">
                <li>React Native frontends consuming the same REST APIs.</li>
                <li>Push notifications, deep links, and secure auth flows.</li>
                <li>Offline sync, caching, and background tasks.</li>
                <li>App Store and Play Store release management.</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 border rounded-3 h-100">
              <h3 className="h5 mb-3">Quality & automation</h3>
              <ul className="mb-0">
                <li>Automated builds, signing, and distribution with CI/CD.</li>
                <li>E2E testing on real devices/emulators (Playwright/Cypress/Detox).</li>
                <li>Crash reporting and analytics wired from day one.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}