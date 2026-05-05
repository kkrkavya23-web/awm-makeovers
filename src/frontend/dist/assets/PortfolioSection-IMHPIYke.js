import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { A as AnimatePresence } from "./index-3X_qfGc2.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-BT20xBRy.js";
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
    title: "Classic Bridal Glow",
    description: "Traditional South Indian bridal look with luminous skin finish"
  },
  {
    id: 2,
    src: "/assets/photo2.png",
    alt: "Bridal Makeup Look 2",
    category: "Hair Styling",
    title: "Bridal Hair Transformation",
    description: "Elegant bridal updo with floral accessories and traditional styling"
  },
  {
    id: 3,
    src: "/assets/photo3.png",
    alt: "Bridal Look 3",
    category: "Bridal",
    title: "Dewy Bridal Look",
    description: "Soft & luminous bridal transformation with natural skin finish"
  },
  {
    id: 4,
    src: "/assets/photo4.png",
    alt: "Bridal Look 4",
    category: "Reception",
    title: "Evening Reception Glam",
    description: "Dramatic eye art meets sculptural contouring for reception night"
  },
  {
    id: 5,
    src: "/assets/photo5.png",
    alt: "Bridal Look 5",
    category: "Engagement",
    title: "Engagement Radiance",
    description: "Soft glam engagement look with dewy skin and defined eyes"
  },
  {
    id: 6,
    src: "/assets/photo6.png",
    alt: "Bridal Look 6",
    category: "Bridal",
    title: "Karnataka Bridal Artistry",
    description: "Traditional Karnataka wedding bridal look with gold accents"
  },
  {
    id: 7,
    src: "/assets/photo7.png",
    alt: "Hair Look 7",
    category: "Hair Styling",
    title: "Festive Hair Beauty",
    description: "Vibrant & radiant hair styling for pre-wedding ceremonies"
  },
  {
    id: 8,
    src: "/assets/photo8.png",
    alt: "Bridal Look 8",
    category: "Bridal",
    title: "Silk Saree Bridal Look",
    description: "Timeless bridal look coordinated with silk saree and temple jewellery"
  }
];
const categories = ["All", "Bridal", "Hair Styling", "Reception", "Engagement"];
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
        background: "linear-gradient(180deg, #FAF6F0 0%, #F5EFE6 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,169,106,0.1) 0%, transparent 70%)"
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
                      background: "rgba(139,94,60,0.1)",
                      border: "1px solid rgba(139,94,60,0.28)",
                      color: "#8B5E3C"
                    },
                    children: "✨ Real Transformations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "heading-section text-4xl lg:text-5xl font-bold mb-4",
                    style: { color: "#2D1B0E" },
                    children: [
                      "A Canvas of",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Timeless Beauty" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-lg mx-auto text-lg", style: { color: "#6B4226" }, children: "Every bride is a masterpiece. Browse Shreya's portfolio of real transformations from Karwar and Karnataka weddings." })
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
                  "data-ocid": `portfolio.filter.${cat.toLowerCase().replace(" ", "_")}`,
                  onClick: () => setActiveCategory(cat),
                  className: "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  style: {
                    background: activeCategory === cat ? "linear-gradient(135deg, #8B5E3C, #C4956A)" : "rgba(139,94,60,0.08)",
                    color: activeCategory === cat ? "white" : "#8B5E3C",
                    border: activeCategory === cat ? "none" : "1px solid rgba(139,94,60,0.22)",
                    boxShadow: activeCategory === cat ? "0 4px 16px rgba(139,94,60,0.25)" : "none"
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
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              layout: true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `portfolio.item.${item.id}`,
                  layout: true,
                  initial: { opacity: 0, scale: 0.92 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.92 },
                  transition: { duration: 0.35 },
                  className: "relative group cursor-pointer rounded-2xl overflow-hidden aspect-[3/4]",
                  style: {
                    boxShadow: "0 4px 20px rgba(139,94,60,0.15), 0 0 0 1px rgba(196,149,106,0.2)"
                  },
                  onClick: () => openLightbox(idx),
                  whileHover: {
                    scale: 1.02,
                    boxShadow: "0 12px 40px rgba(139,94,60,0.25), 0 0 0 2px rgba(212,169,106,0.4)"
                  },
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
                          background: "linear-gradient(to top, rgba(45,27,14,0.85) 0%, rgba(45,27,14,0.3) 50%, transparent 100%)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: "self-start mb-2 text-xs",
                              style: {
                                background: "rgba(139,94,60,0.85)",
                                color: "white",
                                border: "none"
                              },
                              children: item.category
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-sm font-semibold",
                              style: { color: "#FAF6F0" },
                              children: item.title
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs mt-0.5",
                              style: { color: "rgba(250,246,240,0.75)" },
                              children: item.description
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ZoomIn,
                              {
                                className: "w-3.5 h-3.5",
                                style: { color: "#D4A96A" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#D4A96A" }, children: "Click to expand" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                        style: {
                          boxShadow: "inset 0 0 0 2px rgba(212,169,106,0.5)"
                        }
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
              background: "rgba(45,27,14,0.92)",
              backdropFilter: "blur(24px)"
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
                      style: {
                        boxShadow: "0 24px 64px rgba(212,169,106,0.35), 0 0 0 2px rgba(212,169,106,0.3)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", style: { color: "#FAF6F0" }, children: filtered[lightboxIndex].title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm mt-1",
                        style: { color: "rgba(250,246,240,0.65)" },
                        children: filtered[lightboxIndex].description
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: closeLightbox,
                      "data-ocid": "portfolio.lightbox_close",
                      className: "absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center",
                      style: {
                        background: "linear-gradient(135deg, #8B5E3C, #C4956A)"
                      },
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5", style: { color: "#2D1B0E" } })
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChevronRight,
                        {
                          className: "w-5 h-5",
                          style: { color: "#2D1B0E" }
                        }
                      )
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
