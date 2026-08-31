import { useState } from "react";

// سحب جميع الصور تلقائياً من مجلد src/kirmary-international
const imagesGlob = import.meta.glob<{ default: string }>(
  "../../kirmary-international/*.{png,PNG,jpg,JPG,jpeg,JPEG}",
  { eager: true }
);

const GALLERY_IMAGES = Object.entries(imagesGlob).map(([path, module]) => {
  const fileName = path.split("/").pop() || "";
  const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
  return {
    id: nameWithoutExt,
    src: module.default,
    alt: nameWithoutExt,
  };
});

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-navy-950 py-24 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-safety-500" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.src)}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-navy-900 cursor-pointer shadow-lg aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-safety-500 bg-navy-950/80 px-3 py-1.5 rounded">
                  View Full
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <div className="relative max-w-4xl w-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-sm font-bold uppercase tracking-widest hover:text-safety-500 bg-white/10 px-4 py-2 rounded"
              >
                ✕ Close
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}