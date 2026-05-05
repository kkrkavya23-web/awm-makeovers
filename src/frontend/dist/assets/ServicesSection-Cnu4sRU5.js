import { j as jsxRuntimeExports, m as motion, r as reactExports } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { C as Canvas, S as Star, u as useFrame } from "./star-DVylEgbG.js";
import { H as Heart } from "./heart-BIM1TNwx.js";
import { S as Scissors } from "./scissors-CTm_xfPn.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
import { S as Sparkles } from "./sparkles-C3bYJqTj.js";
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
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.45;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.4, 2] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 0.85,
        roughness: 0.1,
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
    description: "A flawless bridal transformation tailored for South Indian weddings — silk sarees, temple jewellery, and that timeless bridal glow. Your most precious look, perfected.",
    price: "₹18,000",
    features: [
      "Pre-bridal skin prep",
      "HD airbrush foundation",
      "8-10 hour staying power",
      "Silk saree coordination",
      "Touch-up kit included",
      "Temple jewellery look"
    ],
    icon: "👑",
    isPopular: true,
    badge: "Most Loved"
  },
  {
    id: 2,
    title: "Bridal Hair Styling",
    subtitle: "Hair Transformation",
    description: "From classic South Indian braided buns with jasmine to modern curls and updos — every hairstyle is crafted to complement your bridal look and jewellery.",
    price: "₹10,000",
    features: [
      "Jasmine & floral styling",
      "Traditional juda/bun",
      "Modern curls & waves",
      "Maang parting setup",
      "Long-lasting hold",
      "Accessories placement"
    ],
    icon: "🌸",
    badge: "Hair Specialist"
  },
  {
    id: 3,
    title: "Engagement Makeup",
    subtitle: "Roka & Sagai Glow",
    description: "Soft glam meets luminous elegance for your ring ceremony. Perfect first bridal appearance with dewy skin and subtle drama for photos and family moments.",
    price: "₹12,000",
    features: [
      "Dewy luminous skin",
      "Subtle eye drama",
      "Saree-ready look",
      "4-6 hour longevity",
      "Hair pin-up styling",
      "Consultation included"
    ],
    icon: "💍"
  },
  {
    id: 4,
    title: "Mehndi / Haldi Look",
    subtitle: "Vibrant & Festive",
    description: "Bright, joyful, and Instagram-perfect looks for your colourful pre-wedding ceremonies in Karwar. Waterproof formulas for Haldi and Mehndi rituals.",
    price: "₹7,000",
    features: [
      "Bold festive colours",
      "Waterproof formulas",
      "Kajal & kohl detailing",
      "Flower accessory styling",
      "Haldi-proof base",
      "3-4 hour wear"
    ],
    icon: "🌼"
  },
  {
    id: 5,
    title: "Reception / Sangeet",
    subtitle: "Evening Glamour",
    description: "Dramatic, luminous, and magnetic for your reception night. Sculptured, glossy, and built for dance floors and flash photography at your Karwar venue.",
    price: "₹15,000",
    features: [
      "Smoky/dramatic eyes",
      "Contouring & highlight",
      "Long-wear lip colour",
      "Hair styling included",
      "Setting spray finish",
      "6-8 hour endurance"
    ],
    icon: "✨"
  },
  {
    id: 6,
    title: "Party & Event Makeup",
    subtitle: "For Every Occasion",
    description: "Birthdays, anniversaries, poojas, and social events — coordinated beautiful looks for every celebration with professional products and expert techniques.",
    price: "₹5,000",
    features: [
      "Natural & glam options",
      "Family coordination",
      "Express 45-min looks",
      "Travel to venue",
      "Premium products only",
      "Group discounts"
    ],
    icon: "🥳"
  }
];
function ServiceCard({ service, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `services.item.${service.id}`,
      className: "relative group rounded-2xl p-6 flex flex-col gap-4 cursor-default",
      style: {
        background: "rgba(255,255,255,0.88)",
        border: service.isPopular ? "1.5px solid rgba(212,169,106,0.55)" : "1px solid rgba(196,149,106,0.22)",
        boxShadow: service.isPopular ? "0 8px 40px rgba(212,169,106,0.22), 0 0 0 4px rgba(212,169,106,0.08)" : "0 4px 20px rgba(139,94,60,0.1)",
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
        boxShadow: "0 16px 48px rgba(212,169,106,0.32), 0 0 0 2px rgba(212,169,106,0.3)"
      },
      children: [
        service.isPopular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            className: "px-4 py-1 text-xs font-semibold text-white",
            style: { background: "linear-gradient(135deg, #8B5E3C, #C4956A)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3 mr-1" }),
              service.badge
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mb-2 block", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-lg font-bold heading-section",
                style: { color: "#2D1B0E" },
                children: service.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#C4956A" }, children: service.subtitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-gradient-brown", children: service.price }),
            service.badge && !service.isPopular && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-xs mt-1",
                style: {
                  borderColor: "rgba(196,149,106,0.45)",
                  color: "#8B5E3C"
                },
                children: service.badge
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed", style: { color: "#6B4226" }, children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-1.5", children: service.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-1.5 text-xs",
            style: { color: "#8B5E3C" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Check,
                {
                  className: "w-3 h-3 mt-0.5 shrink-0",
                  style: { color: "#C4956A" }
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
            href: "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'm%20interested%20in%20booking!",
            target: "_blank",
            rel: "noopener noreferrer",
            "data-ocid": `services.book_button.${service.id}`,
            className: "mt-auto flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold transition-all duration-300",
            style: {
              background: service.isPopular ? "linear-gradient(135deg, #8B5E3C, #C4956A)" : "rgba(139,94,60,0.08)",
              color: service.isPopular ? "white" : "#8B5E3C",
              border: service.isPopular ? "none" : "1px solid rgba(139,94,60,0.25)",
              boxShadow: service.isPopular ? "0 4px 16px rgba(139,94,60,0.28)" : "none"
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
        background: "linear-gradient(180deg, #F5EFE6 0%, #FAF6F0 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: { position: [0, 0, 8], fov: 55 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], color: "#D4A96A", intensity: 1.2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [-5, 2, -3], color: "#C4956A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [5, -2, -3], color: "#D4A96A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrb, { position: [0, 4, -5], color: "#8B5E3C" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212,169,106,0.12) 0%, transparent 60%)"
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
                      background: "rgba(139,94,60,0.1)",
                      border: "1px solid rgba(139,94,60,0.28)",
                      color: "#8B5E3C"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 mr-1.5" }),
                      "Luxury Services"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "heading-section text-4xl lg:text-5xl font-bold mb-4",
                    style: { color: "#2D1B0E" },
                    children: [
                      "Crafted for Your",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Biggest Moments" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "max-w-xl mx-auto text-lg leading-relaxed",
                    style: { color: "#6B4226" },
                    children: "From intimate roka ceremonies to grand reception nights in Karwar — each service is a masterpiece tailored exclusively for you."
                  }
                )
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
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-sm mb-4 flex items-center justify-center gap-2",
                    style: { color: "#8B5E3C" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4", style: { color: "#C4956A" } }),
                      "Custom packages available — reach out for a personalised quote"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919611366425", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "services.contact_button",
                    className: "text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105",
                    style: {
                      background: "rgba(139,94,60,0.1)",
                      color: "#8B5E3C",
                      border: "1px solid rgba(139,94,60,0.28)",
                      boxShadow: "0 4px 16px rgba(212,169,106,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "w-3.5 h-3.5 inline mr-2" }),
                      "Call: +91 96113 66425"
                    ]
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
