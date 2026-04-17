import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { b as Canvas, u as useFrame, c as Star } from "./star-Bl-Q1ikm.js";
import { A as AnimatePresence } from "./index-CR5o1DLD.js";
import { C as ChevronLeft, a as ChevronRight } from "./chevron-right-B0530mvf.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
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
      ref.current.rotation.y = state.clock.elapsedTime * 0.6;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.4, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#E91E63", metalness: 0.9, roughness: 0.05 })
  ] });
}
const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Television Actress",
    rating: 5,
    text: "Aastha is simply magical. She did my makeup for the Star Plus awards — I've never felt so beautiful in my life. The camera loved every angle. She truly understands how light interacts with makeup.",
    location: "Mumbai",
    isCelebrity: true,
    event: "Star Plus Awards 2024"
  },
  {
    id: 2,
    name: "Kavya Reddy",
    role: "Bride, December 2024",
    rating: 5,
    text: "I was so nervous about my bridal makeup, but Aastha instantly made me feel at ease. My lehenga was a deep crimson and she matched every element perfectly — the maang tikka, the eyeshadow, the lips. I cried when I saw myself.",
    location: "Lucknow",
    event: "Grand Wedding at Taj Mahal Hotel"
  },
  {
    id: 3,
    name: "Deepika Malhotra",
    role: "Influencer & Content Creator",
    rating: 5,
    text: "Hired Aastha for a fashion shoot and honestly she's a genius. The Bollywood editorial look she created got 2 lakh likes on Instagram. Brands are now reaching out asking who did my makeup!",
    location: "Delhi",
    isCelebrity: true,
    event: "Vogue India Collaboration"
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Bride, February 2025",
    rating: 5,
    text: "My wedding was in 40°C heat in June and Aastha's makeup stayed absolutely flawless for 14 hours. From baraat to vidaai — not a crease, not a smudge. Worth every rupee. My photos are stunning.",
    location: "Lucknow",
    event: "Garden Wedding, Lucknow"
  },
  {
    id: 5,
    name: "Riya Kapoor",
    role: "Model",
    rating: 5,
    text: "I've worked with makeup artists across India. Aastha is in a different league entirely. Her technique, her product knowledge, her dedication to perfection — she's the best I've encountered. Truly celebrity-grade.",
    location: "Lucknow",
    isCelebrity: true
  },
  {
    id: 6,
    name: "Sunita Verma",
    role: "Mother of the Bride",
    rating: 5,
    text: "Not only did Aastha make my daughter look like a queen, she also did my makeup for the reception. At 52, I felt 30 again! She has a gift for making every woman feel extraordinary.",
    location: "Kanpur",
    event: "Family Wedding Package"
  },
  {
    id: 7,
    name: "Meera Nair",
    role: "Bride, October 2024",
    rating: 5,
    text: "Aastha understood my vision better than I did! I showed her one reference image and she created something even more beautiful. The consultation was so thorough — she asked about my personality, not just my lehenga.",
    location: "Lucknow"
  },
  {
    id: 8,
    name: "Pooja Singh",
    role: "Bollywood Background Dancer",
    rating: 5,
    text: "We needed makeup for a big Bollywood item number shoot. Aastha arrived at 4 AM without complaint and had 8 of us camera-ready by 6 AM. Flawless. Fast. Professional. The director himself complimented her work.",
    location: "Lucknow",
    isCelebrity: true,
    event: "Bollywood Film Production"
  }
];
function ReviewCard({ review }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative rounded-2xl p-7 flex flex-col gap-5 h-full",
      style: {
        background: "rgba(26,26,46,0.7)",
        border: "1px solid rgba(233,30,99,0.12)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)"
      },
      whileHover: {
        y: -4,
        boxShadow: "0 12px 40px rgba(233,30,99,0.18), 0 0 0 1px rgba(233,30,99,0.2)"
      },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8 opacity-30", style: { color: "#E91E63" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: review.rating }, (_, i) => `s${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: "w-4 h-4 fill-current",
            style: { color: "#C9A84C" }
          },
          key
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/75 text-sm leading-relaxed flex-1", children: [
          '"',
          review.text,
          '"'
        ] }),
        review.event && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", style: { color: "rgba(201,168,76,0.7)" }, children: [
          "📍 ",
          review.event
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 pt-3 border-t",
            style: { borderColor: "rgba(233,30,99,0.12)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",
                  style: { background: "linear-gradient(135deg, #E91E63, #C2185B)" },
                  children: review.name[0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: review.name }),
                  review.isCelebrity && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-xs px-2 py-0",
                      style: {
                        background: "rgba(201,168,76,0.2)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.3)"
                      },
                      children: "⭐ Celebrity"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/45", children: [
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
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 w-72 h-72 opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 55 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [2, 2, 2], color: "#E91E63", intensity: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDiamond, { position: [0, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDiamond, { position: [2, -1, -1] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(233,30,99,0.05) 0%, transparent 70%)"
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
                      background: "rgba(233,30,99,0.1)",
                      border: "1px solid rgba(233,30,99,0.3)",
                      color: "#F06292"
                    },
                    children: "⭐ Real Stories"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "What",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Celebrities & Brides" }),
                  " Say"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 max-w-lg mx-auto text-lg", children: "Don't take our word for it — hear from the brides, celebrities, and personalities who trusted Aastha with their most important moments." })
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
                  background: "rgba(233,30,99,0.12)",
                  border: "1px solid rgba(233,30,99,0.25)",
                  color: "#F06292"
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
                  background: page === i ? "#E91E63" : "rgba(233,30,99,0.25)",
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
                  background: "rgba(233,30,99,0.12)",
                  border: "1px solid rgba(233,30,99,0.25)",
                  color: "#F06292"
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
