import imgChairman from "../../assets/eng-wael-bahig.png";

export function Chairman() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* الصورة في إطار أبيض أنيق */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-4 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5 sm:max-w-md">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={imgChairman}
                  alt="Engineer Wael Bahig - Chairman & Founder"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* النصوص والبيانات */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-600">
              Chairman &amp; Founder
            </p>

            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-[#0d1b2a] sm:text-5xl lg:text-6xl">
              Engineer Wael Bahig
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              Engineer Wael Bahig is the Chairman and Founder of KIRMARY With extensive experience in supplying firefighting systems, he has led the company since its establishment in 2008, focusing on product quality, reliable supply, and putting customers' needs first..
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}