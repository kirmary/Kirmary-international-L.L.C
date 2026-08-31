import { ChevronDown } from "lucide-react";

import heroImage from "@/assets/hero-industrial.jpg";
// استيراد صور الشهادات
import cert1 from "@/assets/1.jpeg";
import cert2 from "@/assets/2.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-navy-950"
    >
      <img
        src={heroImage}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
      <div className="absolute inset-x-0 bottom-0 h-1.5 hazard-stripe" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-40 lg:px-8">
        {/* استخدام Grid لعرض النصوص في اليسار والصورتين الكبار في أقصى اليمين */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* النصوص في الجهة اليسرى */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2.5 rounded-sm border border-safety-500/50 bg-navy-900/70 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-safety-500">
              <span className="h-1.5 w-1.5 rounded-full bg-safety-500" />
              Industrial Equipment &amp; Safety Products
            </p>

            <h1 className="mt-7 font-display text-6xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Kirmary
              <span className="mt-2 block text-3xl font-semibold tracking-[0.04em] text-steel-200 sm:text-4xl lg:text-5xl">
                International L.L.C.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-steel-200 sm:text-lg">
              Precision valves, fire hydrants, and safety cabinets — supplied to
              industrial and municipal customers across the United States from
              our New Jersey office.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-sm bg-safety-500 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-navy-950 transition-colors hover:bg-safety-600"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* الصورتين بحجم كبير في أقصى اليمين بجانب النصوص */}
          <div className="flex justify-center gap-4 lg:col-span-5 lg:justify-end">
            <a 
              href={cert1} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Certificate 1"
              className="group relative overflow-hidden rounded-lg border border-white/20 bg-navy-900/60 p-2 shadow-2xl transition-all duration-300 hover:border-safety-500 hover:scale-105"
            >
              <img
                src={cert1}
                alt="Certificate 1"
                className="h-72 w-48 rounded object-cover sm:h-80 sm:w-56"
              />
              <span className="absolute inset-x-0 bottom-0 bg-navy-950/80 py-1.5 text-center text-[0.65rem] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                View Full
              </span>
            </a>

            <a 
              href={cert2} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Certificate 2"
              className="group relative overflow-hidden rounded-lg border border-white/20 bg-navy-900/60 p-2 shadow-2xl transition-all duration-300 hover:border-safety-500 hover:scale-105"
            >
              <img
                src={cert2}
                alt="Certificate 2"
                className="h-72 w-48 rounded object-cover sm:h-80 sm:w-56"
              />
              <span className="absolute inset-x-0 bottom-0 bg-navy-950/80 py-1.5 text-center text-[0.65rem] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
                View Full
              </span>
            </a>
          </div>

        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-steel-300 transition-colors hover:text-white md:flex"
        aria-label="Scroll to products"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}