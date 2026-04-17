import { j as jsxRuntimeExports, m as motion, r as reactExports } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { b as Canvas, c as Star, u as useFrame } from "./star-Bl-Q1ikm.js";
import { A as Award, T as Torus, M as MeshDistortMaterial } from "./award-MNkw7gw8.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
import { H as Heart } from "./heart-DJqoK7_p.js";
import { C as Clock } from "./clock-6VNT7DZO.js";
import { M as MapPin } from "./map-pin-i9Vx4DeH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode$1);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function Rotating3DIcon({
  color,
  position
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.6;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Torus, { ref, args: [0.5, 0.12, 16, 60], position, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color,
      metalness: 0.9,
      roughness: 0.1,
      distort: 0.2,
      speed: 2
    }
  ) });
}
const whyPoints = [
  {
    icon: Award,
    color: "#E91E63",
    title: "Celebrity-Trusted Artistry",
    description: "Aastha has worked with Bollywood actresses, TV stars, and Lucknow's elite families. Her work has graced magazine covers, award shows, and viral social media moments.",
    stat: "50+ Celebrity Clients"
  },
  {
    icon: Star,
    color: "#C9A84C",
    title: "500+ Bridal Transformations",
    description: "Over 500 brides have walked down the aisle in Aastha's signature artistry. Each look is custom-crafted — never templated, always breathtaking.",
    stat: "500+ Brides"
  },
  {
    icon: Zap,
    color: "#F06292",
    title: "Airbrush HD Technology",
    description: "Professional-grade HD airbrush equipment for a foundation so flawless it photographs like skin. Built to last 10+ hours through Lucknow's summer heat and monsoon humidity.",
    stat: "HD Airbrush Tech"
  },
  {
    icon: Heart,
    color: "#E91E63",
    title: "Indian Bridal Specialist",
    description: "Deep expertise in lehenga colour matching, maang tikka placement, mehndi glow, and saree draping. Aastha understands Indian bridal beauty from the inside out.",
    stat: "Bridal Specialist"
  },
  {
    icon: Clock,
    color: "#C9A84C",
    title: "Punctual & Professional",
    description: "Never a late start on your most important day. Aastha's team operates with military precision — hair, makeup, and draping — all on schedule.",
    stat: "Always On Time"
  },
  {
    icon: MapPin,
    color: "#F06292",
    title: "Home & Venue Service",
    description: "We come to you. Whether it's your home, hotel suite, or wedding venue across Lucknow and beyond — we bring the luxury salon experience to your doorstep.",
    stat: "Doorstep Service"
  },
  {
    icon: Shield,
    color: "#E91E63",
    title: "Premium Certified Products",
    description: "MAC, NARS, Charlotte Tilbury, and international luxury brands only. Hypoallergenic options for sensitive skin. Your skin's safety is as important as your beauty.",
    stat: "Luxury Products Only"
  },
  {
    icon: Users,
    color: "#C9A84C",
    title: "Consultations Included",
    description: "Every booking includes a pre-bridal consultation to understand your vision, skin tone, lehenga palette, and wedding theme — ensuring the final look is perfectly you.",
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
        background: "rgba(26,26,46,0.6)",
        border: "1px solid rgba(233,30,99,0.1)",
        backdropFilter: "blur(20px)"
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
        border: "1px solid rgba(233,30,99,0.3)",
        boxShadow: "0 12px 40px rgba(233,30,99,0.15)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "w-12 h-12 rounded-2xl flex items-center justify-center",
            style: {
              background: `${point.color}18`,
              border: `1px solid ${point.color}30`
            },
            whileHover: { scale: 1.1, rotate: 5 },
            transition: { type: "spring", stiffness: 300 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5", style: { color: point.color } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-white", children: point.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/55 leading-relaxed", children: point.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-xs font-semibold px-3 py-1 rounded-full",
            style: {
              background: `${point.color}15`,
              color: point.color,
              border: `1px solid ${point.color}25`
            },
            children: [
              "✦ ",
              point.stat
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            style: {
              background: `radial-gradient(ellipse at top left, ${point.color}08 0%, transparent 60%)`
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
        background: "linear-gradient(180deg, #16213e 0%, #0d0d1a 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 w-96 h-96 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 60 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, 3, 3], color: "#E91E63", intensity: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rotating3DIcon, { color: "#E91E63", position: [-1.5, 0.5, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rotating3DIcon, { color: "#C9A84C", position: [1.2, -0.8, 0] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(233,30,99,0.06) 0%, transparent 60%)"
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
                      background: "rgba(233,30,99,0.1)",
                      border: "1px solid rgba(233,30,99,0.3)",
                      color: "#F06292"
                    },
                    children: "✦ Why AWM"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "Why Choose ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Aastha?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 max-w-xl mx-auto text-lg leading-relaxed", children: `Because your wedding day is not the time for "good enough" — it's the time for extraordinary. Here's why thousands of brides trust AWM Makeovers.` })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto", children: whyPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(WhyCard, { point, index: i }, point.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "mt-16 rounded-3xl p-8 text-center relative overflow-hidden",
              style: {
                background: "linear-gradient(135deg, rgba(233,30,99,0.12), rgba(26,26,46,0.8))",
                border: "1px solid rgba(233,30,99,0.2)",
                backdropFilter: "blur(20px)"
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
                      background: "radial-gradient(ellipse at center, rgba(233,30,99,0.08) 0%, transparent 70%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-bold text-white heading-section mb-2 relative z-10", children: [
                  "⭐ Trusted by",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Bollywood Celebrities" }),
                  " & Lucknow's Elite"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 relative z-10 max-w-2xl mx-auto", children: "From red carpet premieres to intimate bridal chambers — Aastha's artistry has been chosen by the stars. When you book AWM, you get the same quality your favourite celebrities rely on." })
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
