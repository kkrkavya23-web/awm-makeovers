import { j as jsxRuntimeExports, m as motion, r as reactExports } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { b as Canvas, c as Star, u as useFrame } from "./star-Bl-Q1ikm.js";
import { H as Heart } from "./heart-DJqoK7_p.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
import { S as Sparkles } from "./sparkles-CfH5B7JF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
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
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode);
function FloatingOrb({
  position,
  color
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.4, 2] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 0.8,
        roughness: 0.15,
        wireframe: true
      }
    )
  ] });
}
const services = [
  {
    id: 1,
    title: "Bridal Makeup",
    subtitle: "The Royal Package",
    description: "A cinematic, flawless bridal transformation that lasts through every hug, every teardrop of joy, and every dance. From dewy skin to sculpted contour — your lehenga deserves this perfection.",
    price: "₹29,000",
    features: [
      "Pre-bridal skin prep",
      "HD airbrush foundation",
      "Maang tikka & dupatta drape",
      "8–10 hour staying power",
      "Touch-up kit included",
      "Lehenga colour matching"
    ],
    icon: "👑",
    isPopular: true,
    badge: "Most Loved"
  },
  {
    id: 2,
    title: "Celebrity / Event",
    subtitle: "Red Carpet Perfection",
    description: "The same look that graces magazine covers and premieres. Editorial-grade makeup for film shoots, award shows, TV appearances, and high-society events.",
    price: "₹25,000",
    features: [
      "Camera-ready finish",
      "Colour-correcting base",
      "Airbrushing available",
      "Flash-proof formulas",
      "Lighting-tested looks",
      "On-set touch-ups"
    ],
    icon: "⭐",
    badge: "Celebrity Favourite"
  },
  {
    id: 3,
    title: "Engagement Makeup",
    subtitle: "Roka & Sagai Glow",
    description: "Your first bridal appearance deserves a stunning first impression. Soft glam meets timeless elegance — perfect for ring ceremonies, rokha, and roka celebrations.",
    price: "₹18,000",
    features: [
      "Dewy luminous skin",
      "Subtle eye drama",
      "Saree & anarkali-ready",
      "4–6 hour longevity",
      "Nose pin drape styling",
      "Consultation included"
    ],
    icon: "💍"
  },
  {
    id: 4,
    title: "Mehndi / Haldi",
    subtitle: "Vibrant & Festive",
    description: "Bright, playful, and Instagram-perfect looks for your colourful pre-wedding ceremonies. Let your joy shine through every photograph.",
    price: "₹12,000",
    features: [
      "Bold festive colours",
      "Waterproof formulas",
      "Kajal & kohl detailing",
      "Flower accessory styling",
      "Haldi-proof base",
      "3–4 hour wear"
    ],
    icon: "🌸"
  },
  {
    id: 5,
    title: "Reception / Sangeet",
    subtitle: "Glamour After Dark",
    description: "Dramatic, luminous, and magnetic — your reception makeup is your grand reveal. Sculpted, glossy, and built for dance floors and flash photography.",
    price: "₹20,000",
    features: [
      "Smoky/dramatic eyes",
      "Contouring & highlight",
      "Long-wear lip colour",
      "Glitter & rhinestones",
      "Setting spray finish",
      "6–8 hour endurance"
    ],
    icon: "✨"
  },
  {
    id: 6,
    title: "Bridal Party",
    subtitle: "For the Entire Crew",
    description: "Coordinated looks for bridesmaids, mothers of the bride, and family members — consistent elegance across your entire bridal party.",
    price: "₹8,000/person",
    features: [
      "Matching palette themes",
      "Family coordination",
      "Express 45-min looks",
      "Coordinated with bride",
      "Group discounts",
      "Travel to venue"
    ],
    icon: "👯"
  }
];
function ServiceCard({ service, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `services.item.${service.id}`,
      className: "relative group rounded-2xl p-6 flex flex-col gap-4 cursor-default",
      style: {
        background: "rgba(26,26,46,0.7)",
        border: service.isPopular ? "1px solid rgba(233,30,99,0.4)" : "1px solid rgba(233,30,99,0.12)",
        boxShadow: service.isPopular ? "0 8px 40px rgba(233,30,99,0.18)" : "0 4px 20px rgba(0,0,0,0.3)",
        backdropFilter: "blur(20px)"
      },
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: {
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1]
      },
      whileHover: {
        y: -6,
        boxShadow: "0 16px 48px rgba(233,30,99,0.28), 0 0 0 1px rgba(233,30,99,0.25)"
      },
      children: [
        service.isPopular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            className: "px-4 py-1 text-xs font-semibold text-white",
            style: { background: "linear-gradient(135deg, #E91E63, #C2185B)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3 mr-1" }),
              service.badge
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2 block", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white heading-section", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#F06292" }, children: service.subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gradient-pink", children: service.price }),
            service.badge && !service.isPopular && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-xs mt-1",
                style: { borderColor: "rgba(201,168,76,0.4)", color: "#C9A84C" },
                children: service.badge
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60 leading-relaxed", children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-1.5", children: service.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-1.5 text-xs text-white/65",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Check,
                {
                  className: "w-3 h-3 mt-0.5 shrink-0",
                  style: { color: "#E91E63" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feat })
            ]
          },
          feat
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27m%20interested%20in%20booking!",
            target: "_blank",
            rel: "noopener noreferrer",
            "data-ocid": `services.book_button.${service.id}`,
            className: "mt-auto flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold transition-all duration-300",
            style: {
              background: service.isPopular ? "linear-gradient(135deg, #E91E63, #C2185B)" : "rgba(233,30,99,0.1)",
              color: service.isPopular ? "white" : "#F06292",
              border: service.isPopular ? "none" : "1px solid rgba(233,30,99,0.25)",
              boxShadow: service.isPopular ? "0 4px 16px rgba(233,30,99,0.35)" : "none"
            },
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
              "Book This Package"
            ]
          }
        )
      ]
    }
  );
}
function ServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "services.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 8], fov: 55 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], color: "#E91E63", intensity: 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [-5, 2, -3], color: "#E91E63" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [5, -2, -3], color: "#C9A84C" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [0, 4, -5], color: "#F06292" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(233,30,99,0.07) 0%, transparent 60%)"
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    className: "mb-4 px-4 py-1.5 text-sm",
                    style: {
                      background: "rgba(233,30,99,0.1)",
                      border: "1px solid rgba(233,30,99,0.3)",
                      color: "#F06292"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 mr-1.5" }),
                      "Luxury Services"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "Crafted for Your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Biggest Moments" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 max-w-xl mx-auto text-lg leading-relaxed", children: "From intimate roka ceremonies to grand reception nights — each service is a masterpiece tailored exclusively for you." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: services.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: i }, service.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mt-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-sm mb-4 flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4", style: { color: "#E91E63" } }),
                  "Custom packages available — reach out for a personalised quote"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919451819583", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "services.contact_button",
                    className: "text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105",
                    style: {
                      background: "rgba(233,30,99,0.12)",
                      color: "#F06292",
                      border: "1px solid rgba(233,30,99,0.25)"
                    },
                    children: "📞 Call: +91 94518 19583"
                  }
                ) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  ServicesSection as default
};
