import { Badge } from "@/components/ui/badge";
import type { PortfolioItem } from "@/types";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: "/assets/photo1.png",
    alt: "Bridal Makeup Look 1",
    category: "Bridal",
    title: "Classic Bridal Glow",
    description:
      "Traditional South Indian bridal look with luminous skin finish",
  },
  {
    id: 2,
    src: "/assets/photo2.png",
    alt: "Bridal Makeup Look 2",
    category: "Hair Styling",
    title: "Bridal Hair Transformation",
    description:
      "Elegant bridal updo with floral accessories and traditional styling",
  },
  {
    id: 3,
    src: "/assets/photo3.png",
    alt: "Bridal Look 3",
    category: "Bridal",
    title: "Dewy Bridal Look",
    description:
      "Soft & luminous bridal transformation with natural skin finish",
  },
  {
    id: 4,
    src: "/assets/photo4.png",
    alt: "Bridal Look 4",
    category: "Reception",
    title: "Evening Reception Glam",
    description:
      "Dramatic eye art meets sculptural contouring for reception night",
  },
  {
    id: 5,
    src: "/assets/photo5.png",
    alt: "Bridal Look 5",
    category: "Engagement",
    title: "Engagement Radiance",
    description: "Soft glam engagement look with dewy skin and defined eyes",
  },
  {
    id: 6,
    src: "/assets/photo6.png",
    alt: "Bridal Look 6",
    category: "Bridal",
    title: "Karnataka Bridal Artistry",
    description: "Traditional Karnataka wedding bridal look with gold accents",
  },
  {
    id: 7,
    src: "/assets/photo7.png",
    alt: "Hair Look 7",
    category: "Hair Styling",
    title: "Festive Hair Beauty",
    description: "Vibrant & radiant hair styling for pre-wedding ceremonies",
  },
  {
    id: 8,
    src: "/assets/photo8.png",
    alt: "Bridal Look 8",
    category: "Bridal",
    title: "Silk Saree Bridal Look",
    description:
      "Timeless bridal look coordinated with silk saree and temple jewellery",
  },
];

const categories = ["All", "Bridal", "Hair Styling", "Reception", "Engagement"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null,
    );
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section
      data-ocid="portfolio.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF6F0 0%, #F5EFE6 100%)",
      }}
    >
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,169,106,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            className="mb-4 px-4 py-1.5 text-sm"
            style={{
              background: "rgba(139,94,60,0.1)",
              border: "1px solid rgba(139,94,60,0.28)",
              color: "#8B5E3C",
            }}
          >
            ✨ Real Transformations
          </Badge>
          <h2
            className="heading-section text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D1B0E" }}
          >
            A Canvas of{" "}
            <span className="text-gradient-brown">Timeless Beauty</span>
          </h2>
          <p className="max-w-lg mx-auto text-lg" style={{ color: "#6B4226" }}>
            Every bride is a masterpiece. Browse Shreya's portfolio of real
            transformations from Karwar and Karnataka weddings.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid={`portfolio.filter.${cat.toLowerCase().replace(" ", "_")}`}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #8B5E3C, #C4956A)"
                    : "rgba(139,94,60,0.08)",
                color: activeCategory === cat ? "white" : "#8B5E3C",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid rgba(139,94,60,0.22)",
                boxShadow:
                  activeCategory === cat
                    ? "0 4px 16px rgba(139,94,60,0.25)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Photo grid — show all 8 photos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                data-ocid={`portfolio.item.${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow:
                    "0 4px 20px rgba(139,94,60,0.15), 0 0 0 1px rgba(196,149,106,0.2)",
                }}
                onClick={() => openLightbox(idx)}
                whileHover={{
                  scale: 1.02,
                  boxShadow:
                    "0 12px 40px rgba(139,94,60,0.25), 0 0 0 2px rgba(212,169,106,0.4)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Warm overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(45,27,14,0.85) 0%, rgba(45,27,14,0.3) 50%, transparent 100%)",
                  }}
                >
                  <Badge
                    className="self-start mb-2 text-xs"
                    style={{
                      background: "rgba(139,94,60,0.85)",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {item.category}
                  </Badge>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#FAF6F0" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(250,246,240,0.75)" }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <ZoomIn
                      className="w-3.5 h-3.5"
                      style={{ color: "#D4A96A" }}
                    />
                    <span className="text-xs" style={{ color: "#D4A96A" }}>
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* Warm glow border effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 2px rgba(212,169,106,0.5)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(45,27,14,0.92)",
              backdropFilter: "blur(24px)",
            }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full rounded-2xl"
                style={{
                  boxShadow:
                    "0 24px 64px rgba(212,169,106,0.35), 0 0 0 2px rgba(212,169,106,0.3)",
                }}
              />
              <div className="mt-4 text-center">
                <p className="font-semibold" style={{ color: "#FAF6F0" }}>
                  {filtered[lightboxIndex].title}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "rgba(250,246,240,0.65)" }}
                >
                  {filtered[lightboxIndex].description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                data-ocid="portfolio.lightbox_close"
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                }}
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={prevImage}
                data-ocid="portfolio.lightbox_prev"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center glass"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" style={{ color: "#2D1B0E" }} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                data-ocid="portfolio.lightbox_next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center glass"
                aria-label="Next"
              >
                <ChevronRight
                  className="w-5 h-5"
                  style={{ color: "#2D1B0E" }}
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
