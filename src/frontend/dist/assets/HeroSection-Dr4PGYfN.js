import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { B as Button } from "./button-B-15Jzot.js";
import { u as useFrame, M as MathUtils, C as Canvas, S as Star } from "./star-DVylEgbG.js";
import { S as Sparkles } from "./sparkles-C3bYJqTj.js";
import { A as Award, S as Sphere, M as MeshDistortMaterial } from "./award-uRtjXfi-.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
import { P as Phone } from "./phone-CIXmFEYO.js";
import { M as MapPin } from "./map-pin-DrpbUpyB.js";
const Float = /* @__PURE__ */ reactExports.forwardRef(({
  children,
  enabled = true,
  speed = 1,
  rotationIntensity = 1,
  floatIntensity = 1,
  floatingRange = [-0.1, 0.1],
  autoInvalidate = false,
  ...props
}, forwardRef) => {
  const ref = reactExports.useRef(null);
  reactExports.useImperativeHandle(forwardRef, () => ref.current, []);
  const offset = reactExports.useRef(Math.random() * 1e4);
  useFrame((state) => {
    var _floatingRange$, _floatingRange$2;
    if (!enabled || speed === 0) return;
    if (autoInvalidate) state.invalidate();
    const t = offset.current + state.clock.elapsedTime;
    ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
    ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
    let yPosition = Math.sin(t / 4 * speed) / 10;
    yPosition = MathUtils.mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
    ref.current.position.y = yPosition * floatIntensity;
    ref.current.updateMatrix();
  });
  return /* @__PURE__ */ reactExports.createElement("group", props, /* @__PURE__ */ reactExports.createElement("group", {
    ref,
    matrixAutoUpdate: false
  }, children));
});
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
function GoldenOrb({
  position,
  color,
  size,
  speed
}) {
  const meshRef = reactExports.useRef(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.4, rotationIntensity: 0.4, floatIntensity: 1.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { ref: meshRef, args: [size, 64, 64], position, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color,
      attach: "material",
      distort: 0.35,
      speed: 2.5,
      roughness: 0.12,
      metalness: 0.85
    }
  ) }) });
}
function WarmParticles() {
  const pointsRef = reactExports.useRef(null);
  const count = 160;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.018) * 0.04;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: pointsRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pointsMaterial",
      {
        size: 0.045,
        color: "#C4956A",
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true
      }
    )
  ] });
}
function GoldenRing() {
  const ringRef = reactExports.useRef(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: ringRef, position: [3.8, 1.2, -2.5], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.3, 0.055, 16, 80] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#D4A96A", metalness: 0.95, roughness: 0.04 })
  ] });
}
function DiamondShape() {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position: [-4, -1.5, -3], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.55, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#8B5E3C", metalness: 0.9, roughness: 0.08 })
  ] });
}
function Scene3D() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.7, color: "#FFF8F0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 2, color: "#D4A96A" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, 4], intensity: 1, color: "#C4956A" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "spotLight",
      {
        position: [0, 8, 2],
        angle: 0.35,
        intensity: 1.5,
        color: "#EDD9A3"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WarmParticles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GoldenOrb,
      {
        position: [-3.5, 1.5, -3],
        color: "#D4A96A",
        size: 0.85,
        speed: 0.7
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GoldenOrb,
      {
        position: [4, -1.5, -4],
        color: "#C4956A",
        size: 0.6,
        speed: 1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GoldenOrb,
      {
        position: [-1.5, -2.5, -2],
        color: "#EDD9A3",
        size: 0.42,
        speed: 1.3
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GoldenOrb,
      {
        position: [2.5, 3, -5],
        color: "#8B5E3C",
        size: 0.5,
        speed: 0.65
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GoldenRing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiamondShape, {})
  ] });
}
const stats = [
  { value: "300+", label: "Brides Transformed" },
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "5-Star Reviews" },
  { value: "On-Site", label: "Service Available" }
];
function HeroSection() {
  const heroRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: heroRef,
      "data-ocid": "hero.section",
      className: "relative min-h-screen flex items-center overflow-hidden",
      style: {
        background: "linear-gradient(135deg, #FAF6F0 0%, #F5EFE6 55%, #EDE0D0 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 opacity-80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Canvas,
          {
            camera: { position: [0, 0, 8], fov: 55 },
            gl: { antialias: true, alpha: true },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, {})
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-1 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 65% 55% at 30% 50%, rgba(212,169,106,0.18) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-1 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 45% 45% at 72% 58%, rgba(196,149,106,0.12) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 container mx-auto px-6 py-24 lg:py-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: "inline-flex items-center gap-2 mb-2 px-4 py-1.5 text-sm font-medium border",
                      style: {
                        background: "rgba(139,94,60,0.1)",
                        borderColor: "rgba(139,94,60,0.3)",
                        color: "#8B5E3C"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                        "Premium Bridal Makeup Artist · Karwar, Karnataka"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  className: "heading-display text-5xl lg:text-6xl font-bold",
                  style: { color: "#2D1B0E" },
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Shreya" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#2D1B0E" }, children: "Makeup" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "& Hair" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  className: "text-lg leading-relaxed max-w-md",
                  style: { color: "#6B4226" },
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.25 },
                  children: [
                    "Karwar's most celebrated bridal makeup & hair styling artist — specialising in",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#8B5E3C" }, children: "South Indian bridal looks" }),
                    ", saree draping, and luxurious hair transformations for your most precious moments."
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "flex flex-wrap gap-3",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.35 },
                  children: [
                    "South Indian Specialist",
                    "Bridal Hair Expert",
                    "On-Venue Service"
                  ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full",
                      style: {
                        background: "rgba(212,169,106,0.15)",
                        color: "#8B5E3C",
                        border: "1px solid rgba(196,149,106,0.35)",
                        boxShadow: "0 0 12px rgba(212,169,106,0.2)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3 h-3" }),
                        badge
                      ]
                    },
                    badge
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex flex-wrap gap-4 mt-2",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.45 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I%27d%20like%20to%20book%20bridal%20makeup!",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            "data-ocid": "hero.book_button",
                            size: "lg",
                            className: "relative h-12 px-8 text-base font-semibold text-white overflow-hidden group",
                            style: {
                              background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                              boxShadow: "0 4px 24px rgba(139,94,60,0.35), 0 0 40px rgba(212,169,106,0.2)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 mr-2" }),
                              "Book Your Bridal Look",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                  style: {
                                    background: "linear-gradient(135deg, #C4956A, #8B5E3C)"
                                  }
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "hero.portfolio_button",
                        variant: "outline",
                        size: "lg",
                        className: "h-12 px-8 text-base font-semibold",
                        style: {
                          borderColor: "rgba(139,94,60,0.45)",
                          color: "#8B5E3C",
                          background: "rgba(212,169,106,0.08)"
                        },
                        children: "View Portfolio"
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex flex-col gap-2",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.6 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "tel:+919611366425",
                        "data-ocid": "hero.phone_link",
                        className: "flex items-center gap-2 w-fit transition-colors",
                        style: { color: "#6B4226" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4", style: { color: "#8B5E3C" } }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "+91 96113 66425" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2",
                        style: { color: "#6B4226" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4", style: { color: "#C4956A" } }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Karwar, Karnataka 581306" })
                        ]
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "relative",
                initial: { opacity: 0, scale: 0.9, x: 40 },
                animate: { opacity: 1, scale: 1, x: 0 },
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-3xl",
                      style: {
                        background: "radial-gradient(ellipse at center, rgba(212,169,106,0.4) 0%, transparent 70%)",
                        filter: "blur(28px)",
                        transform: "scale(1.1)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden",
                      style: {
                        boxShadow: "0 24px 64px rgba(139,94,60,0.25), 0 0 0 3px rgba(212,169,106,0.4), 0 0 48px rgba(212,169,106,0.2)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "/assets/photo1.png",
                            alt: "Shreya - Premium Bridal Makeup & Hair Artist, Karwar",
                            className: "w-full h-full object-cover"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0",
                            style: {
                              background: "linear-gradient(to top, rgba(45,27,14,0.4) 0%, transparent 50%)"
                            }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "absolute -left-16 top-8 glass px-4 py-3 rounded-2xl",
                      animate: { y: [0, -8, 0] },
                      transition: {
                        duration: 3.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      },
                      style: { boxShadow: "0 8px 32px rgba(212,169,106,0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Star,
                          {
                            className: "w-4 h-4 fill-current",
                            style: { color: "#D4A96A" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-semibold",
                              style: { color: "#2D1B0E" },
                              children: "5.0 Rating"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#8B5E3C" }, children: "300+ Brides" })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "absolute -right-12 bottom-16 glass px-4 py-3 rounded-2xl",
                      animate: { y: [0, 8, 0] },
                      transition: {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1
                      },
                      style: { boxShadow: "0 8px 32px rgba(212,169,106,0.3)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", style: { color: "#8B5E3C" }, children: "Bridal" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#6B4226" }, children: "Hair Expert" })
                      ] })
                    }
                  )
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto",
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.7 },
              children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "glass rounded-2xl px-6 py-5 text-center",
                  style: { boxShadow: "0 4px 20px rgba(212,169,106,0.15)" },
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8 + i * 0.1 },
                  whileHover: {
                    scale: 1.04,
                    boxShadow: "0 8px 32px rgba(212,169,106,0.28)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold heading-display text-gradient-brown", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs mt-1 font-medium",
                        style: { color: "#8B5E3C" },
                        children: stat.label
                      }
                    )
                  ]
                },
                stat.label
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10",
            animate: { y: [0, 8, 0] },
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2",
                style: { borderColor: "rgba(139,94,60,0.45)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-1 h-3 rounded-full animate-pulse",
                    style: { background: "#C4956A" }
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
