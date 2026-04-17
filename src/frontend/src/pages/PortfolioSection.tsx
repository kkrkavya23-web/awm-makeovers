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
    title: "Golden Lehenga Bride",
    description: "Traditional bridal look with smoky eyes & deep rose lips",
  },
  {
    id: 2,
    src: "/assets/photo2.png",
    alt: "Bridal Makeup Look 2",
    category: "Bridal",
    title: "Royal Red Bridal",
    description: "Classic maang tikka & heavy gold jewellery coordination",
  },
  {
    id: 3,
    src: "/assets/photo3.png",
    alt: "Bridal Look 3",
    category: "Engagement",
    title: "Dewy Engagement Glow",
    description: "Soft & luminous roka look — natural skin finish",
  },
  {
    id: 4,
    src: "/assets/photo4.png",
    alt: "Bridal Look 4",
    category: "Reception",
    title: "Midnight Glam Reception",
    description: "Dramatic eye art meets sculptural contouring",
  },
  {
    id: 5,
    src: "/assets/photo5.png",
    alt: "Celebrity Look 5",
    category: "Celebrity",
    title: "Celeb Editorial Look",
    description: "High-fashion photoshoot ready — magazine cover finish",
  },
  {
    id: 6,
    src: "/assets/photo6.png",
    alt: "Bridal Look 6",
    category: "Bridal",
    title: "Pastel Lehenga Bride",
    description: "Soft pink & peach bridal palette for pastel lehengas",
  },
  {
    id: 7,
    src: "/assets/photo7.png",
    alt: "Bridal Look 7",
    category: "Mehndi",
    title: "Mehndi Festive Glow",
    description: "Vibrant & radiant look for pre-wedding mehendi ceremony",
  },
  {
    id: 8,
    src: "/assets/photo8.png",
    alt: "Bridal Look 8",
    category: "Sangeet",
    title: "Sangeet Night Glam",
    description: "Bold eyes & shimmer for the dance floor",
  },
  {
    id: 9,
    src: "/assets/photo9.png",
    alt: "Bridal Look 9",
    category: "Bridal",
    title: "Saree Drape & Look",
    description: "Flawless coordination with traditional Kanjeevaram saree",
  },
  {
    id: 10,
    src: "/assets/photo10.png",
    alt: "Bridal Look 10",
    category: "Celebrity",
    title: "Film Premiere Look",
    description: "Glossy, camera-ready for premiere night",
  },
  {
    id: 11,
    src: "/assets/photo11.png",
    alt: "Bridal Look 11",
    category: "Reception",
    title: "White & Gold Reception",
    description: "Ethereal look for a white wedding reception",
  },
  {
    id: 12,
    src: "/assets/photo12.png",
    alt: "Bridal Look 12",
    category: "Bridal",
    title: "Classic Bridal Artistry",
    description: "Timeless bridal look — deep kajal, maang tikka perfection",
  },
];

const categories = [
  "All",
  "Bridal",
  "Celebrity",
  "Reception",
  "Engagement",
  "Mehndi",
  "Sangeet",
];

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
        background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%)",
      }}
    >
      {/* Glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(233,30,99,0.06) 0%, transparent 70%)",
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
              background: "rgba(233,30,99,0.1)",
              border: "1px solid rgba(233,30,99,0.3)",
              color: "#F06292",
            }}
          >
            ✨ Real Transformations
          </Badge>
          <h2 className="heading-section text-4xl lg:text-5xl font-bold text-white mb-4">
            A Canvas of{" "}
            <span className="text-gradient-pink">Timeless Beauty</span>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-lg">
            Every bride is a masterpiece. Browse Aastha's portfolio of real
            transformations — each one a story told through artistry.
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
              data-ocid={`portfolio.filter.${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #E91E63, #C2185B)"
                    : "rgba(233,30,99,0.08)",
                color: activeCategory === cat ? "white" : "#F06292",
                border:
                  activeCategory === cat
                    ? "none"
                    : "1px solid rgba(233,30,99,0.2)",
                boxShadow:
                  activeCategory === cat
                    ? "0 4px 16px rgba(233,30,99,0.3)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                data-ocid={`portfolio.item.${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[3/4]"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
                onClick={() => openLightbox(idx)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,13,26,0.92) 0%, rgba(13,13,26,0.4) 50%, transparent 100%)",
                  }}
                >
                  <Badge
                    className="self-start mb-2 text-xs"
                    style={{
                      background: "rgba(233,30,99,0.8)",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {item.category}
                  </Badge>
                  <p className="text-white text-sm font-semibold">
                    {item.title}
                  </p>
                  <p className="text-white/65 text-xs mt-0.5">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <ZoomIn
                      className="w-3.5 h-3.5"
                      style={{ color: "#F06292" }}
                    />
                    <span className="text-xs" style={{ color: "#F06292" }}>
                      Click to expand
                    </span>
                  </div>
                </div>
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
              background: "rgba(13,13,26,0.95)",
              backdropFilter: "blur(20px)",
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
                style={{ boxShadow: "0 24px 64px rgba(233,30,99,0.3)" }}
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">
                  {filtered[lightboxIndex].title}
                </p>
                <p className="text-white/55 text-sm mt-1">
                  {filtered[lightboxIndex].description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                data-ocid="portfolio.lightbox_close"
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#E91E63" }}
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
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                data-ocid="portfolio.lightbox_next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center glass"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
