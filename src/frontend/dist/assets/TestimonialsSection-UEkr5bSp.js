import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { C as Canvas, u as useFrame, S as Star } from "./star-DVylEgbG.js";
import { A as AnimatePresence } from "./index-3X_qfGc2.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-BT20xBRy.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function FloatingDiamond({ position }) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.55;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.65) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.4, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#D4A96A", metalness: 0.92, roughness: 0.04 })
  ] });
}
const reviews = [
  {
    id: 1,
    name: "Priya Shetty",
    role: "Bride, November 2025",
    rating: 5,
    text: "Shreya made my wedding day absolutely magical! My silk saree bridal look was exactly what I dreamed of — the maang tikka placement, the temple jewellery coordination, everything was perfect. My photos are breathtaking.",
    location: "Karwar",
    event: "Traditional Karnataka Wedding"
  },
  {
    id: 2,
    name: "Kavitha Nayak",
    role: "Bride, January 2026",
    rating: 5,
    text: "I was so nervous about bridal makeup but Shreya instantly put me at ease. She understood my vision and created a look even more beautiful than my reference photos. My engagement glow was stunning!",
    location: "Karwar",
    event: "Engagement & Wedding Package",
    isCelebrity: false
  },
  {
    id: 3,
    name: "Ananya Hegde",
    role: "Bride, February 2026",
    rating: 5,
    text: "Shreya's hair styling is in a class of its own. The jasmine floral bun she created for my Kodava wedding was absolutely exquisite — traditional yet modern. She truly understands South Indian bridal aesthetics.",
    location: "Coorg",
    isCelebrity: true,
    event: "Kodava Traditional Wedding"
  },
  {
    id: 4,
    name: "Rohini Kulkarni",
    role: "Bride, December 2025",
    rating: 5,
    text: "My makeup stayed flawless for 12 hours in the Karwar heat — from the morning rituals to the reception at night. Not a crease, not a smudge. Worth every rupee! The touch-up kit was a wonderful bonus.",
    location: "Karwar",
    event: "Full Day Bridal Package"
  },
  {
    id: 5,
    name: "Deepa Rao",
    role: "Mother of the Bride",
    rating: 5,
    text: "Not only did Shreya make my daughter look like a goddess, she also did my makeup for the reception. At 55, I felt 35 again! She has such a gift for making every woman feel extraordinary and confident.",
    location: "Mangalore",
    event: "Family Wedding Package"
  },
  {
    id: 6,
    name: "Sunita Gowda",
    role: "Bride, March 2026",
    rating: 5,
    text: "Shreya was so professional and punctual. She arrived early, had everything ready, and the bridal look she created complemented my Kanjivaram saree perfectly. My wedding photos look like they're from a magazine!",
    location: "Hubli",
    event: "Kanjivaram Silk Bridal Look"
  },
  {
    id: 7,
    name: "Meera Kamath",
    role: "Bride, October 2025",
    rating: 5,
    text: "I showed Shreya one reference image and she created something even more beautiful. The consultation was so thorough — she asked about my personality, my saree colour, my jewellery. Every detail mattered to her.",
    location: "Karwar"
  },
  {
    id: 8,
    name: "Pooja Hebbar",
    role: "Bride, April 2026",
    rating: 5,
    text: "The hair transformation Shreya did for my reception was jaw-dropping. The braided updo with fresh flowers and gold pins was so elegant. She understands Karnataka bridal traditions beautifully.",
    location: "Sirsi",
    isCelebrity: true,
    event: "Reception Hair & Makeup"
  }
];
function ReviewCard({ review }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative rounded-2xl p-7 flex flex-col gap-5 h-full",
      style: {
        background: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(196,149,106,0.22)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(139,94,60,0.1)"
      },
      whileHover: {
        y: -4,
        boxShadow: "0 12px 40px rgba(212,169,106,0.22), 0 0 0 1.5px rgba(212,169,106,0.3)"
      },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 opacity-25", style: { color: "#C4956A" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: review.rating }, (_, i) => `s${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: "w-4 h-4 fill-current",
            style: { color: "#D4A96A" }
          },
          key
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "text-sm leading-relaxed flex-1",
            style: { color: "#6B4226" },
            children: [
              "“",
              review.text,
              "”"
            ]
          }
        ),
        review.event && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "rgba(196,149,106,0.85)" }, children: [
          "📍 ",
          review.event
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 pt-3 border-t",
            style: { borderColor: "rgba(196,149,106,0.2)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",
                  style: { background: "linear-gradient(135deg, #8B5E3C, #C4956A)" },
                  children: review.name[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", style: { color: "#2D1B0E" }, children: review.name }),
                  review.isCelebrity && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-xs px-2 py-0",
                      style: {
                        background: "rgba(212,169,106,0.18)",
                        color: "#8B5E3C",
                        border: "1px solid rgba(196,149,106,0.35)"
                      },
                      children: "★ Featured"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "#8B5E3C" }, children: [
                  review.role,
                  " · ",
                  review.location
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function TestimonialsSection() {
  const [page, setPage] = reactExports.useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "testimonials.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #F5EFE6 0%, #EDE0D0 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 w-72 h-72 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 55 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [2, 2, 2], color: "#D4A96A", intensity: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDiamond, { position: [0, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDiamond, { position: [2, -1, -1] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212,169,106,0.1) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
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
                    children: "★ Real Stories"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "heading-section text-4xl lg:text-5xl font-bold mb-4",
                    style: { color: "#2D1B0E" },
                    children: [
                      "What Our ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Brides Say" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-lg mx-auto text-lg", style: { color: "#6B4226" }, children: "Real stories from brides across Karnataka who trusted Shreya with their most precious moments." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto",
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -30 },
              transition: { duration: 0.4 },
              children: visible.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { review }, review.id))
            },
            page
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage((p) => Math.max(0, p - 1)),
                disabled: page === 0,
                "data-ocid": "testimonials.pagination_prev",
                className: "w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30",
                style: {
                  background: "rgba(139,94,60,0.1)",
                  border: "1px solid rgba(139,94,60,0.25)",
                  color: "#8B5E3C"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: Array.from({ length: totalPages }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage(i),
                "data-ocid": `testimonials.page.${i + 1}`,
                className: "w-2.5 h-2.5 rounded-full transition-all",
                style: {
                  background: page === i ? "#8B5E3C" : "rgba(139,94,60,0.25)",
                  transform: page === i ? "scale(1.3)" : "scale(1)"
                }
              },
              `page-dot-${i}`
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
                disabled: page === totalPages - 1,
                "data-ocid": "testimonials.pagination_next",
                className: "w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30",
                style: {
                  background: "rgba(139,94,60,0.1)",
                  border: "1px solid rgba(139,94,60,0.25)",
                  color: "#8B5E3C"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  TestimonialsSection as default
};
