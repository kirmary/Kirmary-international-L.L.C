import { ArrowRight } from "lucide-react";

import productValves from "@/assets/product-valves.jpg";
import productHydrant from "@/assets/product-hydrant.jpg";
import productCabinets from "@/assets/product-cabinets.jpg";

const PRODUCTS = [
  {
    title: "Kirmary Valves",
    image: productValves,
    alt: "Kirmary industrial gate valves product photo",
    description:
      "UL&FM certified.",
  },
  {
    title: "Kirmary Hydrant",
    image: productHydrant,
    alt: "Kirmary fire hydrant product photo",
    description:
      "UL&FM certified.",
  },
  {
    title: "Kirmary Cabinets",
    image: productCabinets,
    alt: "Kirmary safety storage cabinet product photo",
    description:
      "UL&FM certified.",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-steel-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-safety-500" />
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-steel-500">
              Our Products
            </p>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight text-navy-950 sm:text-5xl">
            Industrial Equipment &amp; Safety Solutions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-600">
            Three core product lines built to keep industrial operations
            flowing, protected, and organized.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-navy-800/30 hover:shadow-xl hover:shadow-navy-950/10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 hazard-stripe transition-transform duration-300 group-hover:scale-x-100" />
              
              {/* تم تعديل حاوية الصورة وإضافة خلفية بيضاء/خفيفة مع object-contain لتظهر الصورة كاملة */}
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-steel-50 p-4">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy-950">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
                  {product.description}
                </p>
              
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}