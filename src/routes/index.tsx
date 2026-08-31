import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/kirmary/SiteHeader";
import { Hero } from "@/components/kirmary/Hero";
import { Chairman } from "@/components/kirmary/Chairman";
import { Products } from "@/components/kirmary/Products";
import { Gallery } from "@/components/kirmary/Gallery";
import { Contact } from "@/components/kirmary/Contact";
import { Footer } from "@/components/kirmary/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "KIRMARY International L.L.C. | Industrial Equipment & Safety",
      },
      {
        name: "description",
        content:
          "KIRMARY International L.L.C. supplies industrial valves, fire hydrants and safety cabinets from our New Jersey office. Call +1 551 755 3043.",
      },
      {
        property: "og:title",
        content: "KIRMARY International L.L.C. | Industrial Equipment & Safety",
      },
      {
        property: "og:description",
        content:
          "Precision valves, fire hydrants and safety cabinets for industry — supplied across the USA from KIRMARY's New Jersey office.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "KIRMARY International L.L.C." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-steel-100 font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Chairman />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}