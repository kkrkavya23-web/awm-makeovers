import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { A as AnimatePresence } from "./index-CR5o1DLD.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-B0530mvf.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
const portfolioItems = [
  {
    id: 1,
    src: "/assets/photo1.png",
    alt: "Bridal Makeup Look 1",
    category: "Bridal",
    title: "Golden Lehenga Bride",
    description: "Traditional bridal look with smoky eyes & deep rose lips"
  },
  {
    id: 2,
    src: "/assets/photo2.png",
    alt: "Bridal Makeup Look 2",
    category: "Bridal",
    title: "Royal Red Bridal",
    description: "Classic maang tikka & heavy gold jewellery coordination"
  },
  {
    id: 3,
    src: "/assets/photo3.png",
    alt: "Bridal Look 3",
    category: "Engagement",
    title: "Dewy Engagement Glow",
    description: "Soft & luminous roka look — natural skin finish"
  },
  {
    id: 4,
    src: "/assets/photo4.png",
    alt: "Bridal Look 4",
    category: "Reception",
    title: "Midnight Glam Reception",
    description: "Dramatic eye art meets sculptural contouring"
  },
  {
    id: 5,
    src: "/assets/photo5.png",
    alt: "Celebrity Look 5",
    category: "Celebrity",
    title: "Celeb Editorial Look",
    description: "High-fashion photoshoot ready — magazine cover finish"
  },
  {
    id: 6,
    src: "/assets/photo6.png",
    alt: "Bridal Look 6",
    category: "Bridal",
    title: "Pastel Lehenga Bride",
    description: "Soft pink & peach bridal palette for pastel lehengas"
  },
  {
    id: 7,
    src: "/assets/photo7.png",
    alt: "Bridal Look 7",
    category: "Mehndi",
    title: "Mehndi Festive Glow",
    description: "Vibrant & radiant look for pre-wedding mehendi ceremony"
  },
  {
    id: 8,
    src: "/assets/photo8.png",
    alt: "Bridal Look 8",
    category: "Sangeet",
    title: "Sangeet Night Glam",
    description: "Bold eyes & shimmer for the dance floor"
  },
  {
    id: 9,
    src: "/assets/photo9.png",
    alt: "Bridal Look 9",
    category: "Bridal",
    title: "Saree Drape & Look",
    description: "Flawless coordination with traditional Kanjeevaram saree"
  },
  {
    id: 10,
    src: "/assets/photo10.png",
    alt: "Bridal Look 10",
    category: "Celebrity",
    title: "Film Premiere Look",
    description: "Glossy, camera-ready for premiere night"
  },
  {
    id: 11,
    src: "/assets/photo11.png",
    alt: "Bridal Look 11",
    category: "Reception",
    title: "White & Gold Reception",
    description: "Ethereal look for a white wedding reception"
  },
  {
    id: 12,
    src: "/assets/photo12.png",
    alt: "Bridal Look 12",
    category: "Bridal",
    title: "Classic Bridal Artistry",
    description: "Timeless bridal look — deep kajal, maang tikka perfection"
  }
];
const categories = [
  "All",
  "Bridal",
  "Celebrity",
  "Reception",
  "Engagement",
  "Mehndi",
  "Sangeet"
];
function PortfolioSection() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const filtered = activeCategory === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeCategory);
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(
    (i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null
  );
  const nextImage = () => setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "portfolio.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(233,30,99,0.06) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "mb-4 px-4 py-1.5 text-sm",
                    style: {
                      background: "rgba(233,30,99,0.1)",
                      border: "1px solid rgba(233,30,99,0.3)",
                      color: "#F06292"
                    },
                    children: "✨ Real Transformations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "A Canvas of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Timeless Beauty" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 max-w-lg mx-auto text-lg", children: "Every bride is a masterpiece. Browse Aastha's portfolio of real transformations — each one a story told through artistry." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex flex-wrap justify-center gap-2 mb-10",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.15 },
              children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `portfolio.filter.${cat.toLowerCase()}`,
                  onClick: () => setActiveCategory(cat),
                  className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  style: {
                    background: activeCategory === cat ? "linear-gradient(135deg, #E91E63, #C2185B)" : "rgba(233,30,99,0.08)",
                    color: activeCategory === cat ? "white" : "#F06292",
                    border: activeCategory === cat ? "none" : "1px solid rgba(233,30,99,0.2)",
                    boxShadow: activeCategory === cat ? "0 4px 16px rgba(233,30,99,0.3)" : "none"
                  },
                  children: cat
                },
                cat
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
              layout: true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `portfolio.item.${item.id}`,
                  layout: true,
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.9 },
                  transition: { duration: 0.35 },
                  className: "relative group cursor-pointer rounded-2xl overflow-hidden aspect-[3/4]",
                  style: { boxShadow: "0 4px 20px rgba(0,0,0,0.4)" },
                  onClick: () => openLightbox(idx),
                  whileHover: { scale: 1.02 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: item.src,
                        alt: item.alt,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4",
                        style: {
                          background: "linear-gradient(to top, rgba(13,13,26,0.92) 0%, rgba(13,13,26,0.4) 50%, transparent 100%)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: "self-start mb-2 text-xs",
                              style: {
                                background: "rgba(233,30,99,0.8)",
                                color: "white",
                                border: "none"
                              },
                              children: item.category
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: item.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/65 text-xs mt-0.5", children: item.description }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ZoomIn,
                              {
                                className: "w-3.5 h-3.5",
                                style: { color: "#F06292" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#F06292" }, children: "Click to expand" })
                          ] })
                        ]
                      }
                    )
                  ]
                },
                item.id
              )) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            style: {
              background: "rgba(13,13,26,0.95)",
              backdropFilter: "blur(20px)"
            },
            onClick: closeLightbox,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { scale: 0.85, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.85, opacity: 0 },
                className: "relative max-w-2xl w-full",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: filtered[lightboxIndex].src,
                      alt: filtered[lightboxIndex].alt,
                      className: "w-full rounded-2xl",
                      style: { boxShadow: "0 24px 64px rgba(233,30,99,0.3)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: filtered[lightboxIndex].title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 text-sm mt-1", children: filtered[lightboxIndex].description })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: closeLightbox,
                      "data-ocid": "portfolio.lightbox_close",
                      className: "absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center",
                      style: { background: "#E91E63" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: prevImage,
                      "data-ocid": "portfolio.lightbox_prev",
                      className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center glass",
                      "aria-label": "Previous",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: nextImage,
                      "data-ocid": "portfolio.lightbox_next",
                      className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center glass",
                      "aria-label": "Next",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-white" })
                    }
                  )
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
export {
  PortfolioSection as default
};
