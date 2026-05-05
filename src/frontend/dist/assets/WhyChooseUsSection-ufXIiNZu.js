import { j as jsxRuntimeExports, m as motion, r as reactExports } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { C as Canvas, S as Star, u as useFrame } from "./star-DVylEgbG.js";
import { A as Award, T as Torus, M as MeshDistortMaterial } from "./award-uRtjXfi-.js";
import { S as Scissors } from "./scissors-CTm_xfPn.js";
import { H as Heart } from "./heart-BIM1TNwx.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
import { M as MapPin } from "./map-pin-DrpbUpyB.js";
import { C as Clock } from "./clock-DyDq3UIh.js";
import { M as MessageCircle } from "./message-circle-BHAMIDT3.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function GoldenTorus({
  color,
  position
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.55;
      ref.current.rotation.y = state.clock.elapsedTime * 0.38;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Torus, { ref, args: [0.5, 0.12, 16, 60], position, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color,
      metalness: 0.92,
      roughness: 0.08,
      distort: 0.18,
      speed: 1.8
    }
  ) });
}
const whyPoints = [
  {
    icon: Award,
    color: "#8B5E3C",
    title: "Bridal Specialist",
    description: "Deep expertise in South Indian bridal looks, silk saree coordination, temple jewellery matching, and Karnataka wedding traditions. Every bride gets a truly personalised look.",
    stat: "South Indian Expert"
  },
  {
    icon: Scissors,
    color: "#C4956A",
    title: "Hair Styling Expert",
    description: "From classic jasmine-adorned buns to modern braided updos and beach waves — Shreya's hair artistry transforms every bride's crowning glory into a work of art.",
    stat: "Hair Transformation"
  },
  {
    icon: Star,
    color: "#D4A96A",
    title: "300+ Brides Served",
    description: "Over 300 brides across Karwar, Mangalore, Goa, and Karnataka have walked their aisle in Shreya's signature artistry. Each look is custom-crafted, never templated.",
    stat: "300+ Brides"
  },
  {
    icon: Heart,
    color: "#8B5E3C",
    title: "South Indian Specialist",
    description: "Specialising in Kannada, Tulu, Kodava, and Konkani wedding traditions. Understanding silk sarees, traditional ornaments, and cultural bridal aesthetics inside out.",
    stat: "Cultural Expert"
  },
  {
    icon: Shield,
    color: "#C4956A",
    title: "Premium Products Only",
    description: "MAC, NARS, Charlotte Tilbury, and international luxury brands only. Hypoallergenic options for sensitive skin. Your skin's safety is as important as your beauty.",
    stat: "Luxury Products"
  },
  {
    icon: MapPin,
    color: "#D4A96A",
    title: "On-Venue Service",
    description: "We come to you at home, hotel suite, or wedding venue across Karwar, Goa border areas, Uttara Kannada, and beyond. Luxury salon experience at your doorstep.",
    stat: "Doorstep Service"
  },
  {
    icon: Clock,
    color: "#8B5E3C",
    title: "Punctual & Professional",
    description: "Never a late start on your most important day. Shreya's team operates with precision — hair, makeup, and styling — all on schedule so you're never rushed.",
    stat: "Always On Time"
  },
  {
    icon: Users,
    color: "#C4956A",
    title: "Free Consultation",
    description: "Every booking includes a complimentary pre-bridal consultation to understand your vision, skin tone, saree palette, and wedding theme for the perfect look.",
    stat: "Free Consultation"
  }
];
function WhyCard({
  point,
  index
}) {
  const Icon = point.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `why.item.${index + 1}`,
      className: "group relative rounded-2xl p-6 flex flex-col gap-4",
      style: {
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(196,149,106,0.2)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 16px rgba(139,94,60,0.08)"
      },
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: {
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1]
      },
      whileHover: {
        y: -6,
        border: "1px solid rgba(212,169,106,0.4)",
        boxShadow: "0 12px 40px rgba(212,169,106,0.2), 0 0 0 1px rgba(212,169,106,0.15)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "w-12 h-12 rounded-2xl flex items-center justify-center",
            style: {
              background: `rgba(${point.color === "#8B5E3C" ? "139,94,60" : point.color === "#C4956A" ? "196,149,106" : "212,169,106"},0.12)`,
              border: `1px solid rgba(${point.color === "#8B5E3C" ? "139,94,60" : point.color === "#C4956A" ? "196,149,106" : "212,169,106"},0.28)`
            },
            whileHover: { scale: 1.1, rotate: 5 },
            transition: { type: "spring", stiffness: 300 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5", style: { color: point.color } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold mb-1", style: { color: "#2D1B0E" }, children: point.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#6B4226" }, children: point.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-xs font-semibold px-3 py-1 rounded-full",
            style: {
              background: "rgba(212,169,106,0.12)",
              color: "#8B5E3C",
              border: "1px solid rgba(196,149,106,0.28)"
            },
            children: [
              "✶ ",
              point.stat
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at top left, rgba(212,169,106,0.08) 0%, transparent 60%)"
            }
          }
        )
      ]
    }
  );
}
function WhyChooseUsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "why.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #EDE0D0 0%, #F5EFE6 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 w-96 h-96 opacity-15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 60 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, 3, 3], color: "#D4A96A", intensity: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GoldenTorus, { color: "#D4A96A", position: [-1.5, 0.5, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GoldenTorus, { color: "#C4956A", position: [1.2, -0.8, 0] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(212,169,106,0.12) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-16",
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
                    children: "✶ Why Shreya"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "heading-section text-4xl lg:text-5xl font-bold mb-4",
                    style: { color: "#2D1B0E" },
                    children: [
                      "Why Choose ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Shreya?" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "max-w-xl mx-auto text-lg leading-relaxed",
                    style: { color: "#6B4226" },
                    children: "Because your wedding day is not the time for “good enough” — it's the time for extraordinary. Here’s why brides across Karnataka trust Shreya Makeup & Hair."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto", children: whyPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { point, index: i }, point.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "mt-16 rounded-3xl p-8 text-center relative overflow-hidden",
              style: {
                background: "linear-gradient(135deg, rgba(139,94,60,0.1), rgba(255,255,255,0.85))",
                border: "1.5px solid rgba(212,169,106,0.4)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 40px rgba(212,169,106,0.2)"
              },
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                      background: "radial-gradient(ellipse at center, rgba(212,169,106,0.12) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-2xl font-bold heading-section mb-2 relative z-10",
                    style: { color: "#2D1B0E" },
                    children: [
                      "☆ Trusted by",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Karnataka Brides" }),
                      " & Families"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "relative z-10 max-w-2xl mx-auto",
                    style: { color: "#6B4226" },
                    children: "From intimate pooja ceremonies to grand wedding receptions in Karwar, Mangalore, and beyond — Shreya’s artistry has been chosen by hundreds of brides. When you book Shreya, you get the same premium quality every bride deserves."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book%20a%20consultation!",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full text-sm font-semibold text-white relative z-10 transition-all hover:scale-105",
                    style: {
                      background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                      boxShadow: "0 4px 20px rgba(139,94,60,0.3)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                      "Book a Free Consultation"
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  WhyChooseUsSection as default
};
