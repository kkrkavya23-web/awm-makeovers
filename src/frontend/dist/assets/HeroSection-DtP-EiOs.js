import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { B as Button } from "./button-D6n3Vb-9.js";
import { R as REVISION, u as useFrame, M as MathUtils, C as Color, A as AdditiveBlending, V as Vector3, S as Spherical, a as ShaderMaterial, b as Canvas, c as Star } from "./star-Bl-Q1ikm.js";
import { S as Sparkles } from "./sparkles-CfH5B7JF.js";
import { A as Award, S as Sphere, M as MeshDistortMaterial } from "./award-MNkw7gw8.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
import { P as Phone } from "./phone-C6uMKMF2.js";
const getVersion = () => parseInt(REVISION.replace(/\D+/g, ""));
const version = /* @__PURE__ */ getVersion();
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
class StarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: {
          value: 0
        },
        fade: {
          value: 1
        }
      },
      vertexShader: (
        /* glsl */
        `
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`
      ),
      fragmentShader: (
        /* glsl */
        `
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
      }`
      )
    });
  }
}
const genStar = (r) => {
  return new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));
};
const Stars = /* @__PURE__ */ reactExports.forwardRef(({
  radius = 100,
  depth = 50,
  count = 5e3,
  saturation = 0,
  factor = 4,
  fade = false,
  speed = 1
}, ref) => {
  const material = reactExports.useRef(null);
  const [position, color, size] = reactExports.useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = Array.from({
      length: count
    }, () => (0.5 + 0.5 * Math.random()) * factor);
    const color2 = new Color();
    let r = radius + depth;
    const increment = depth / count;
    for (let i = 0; i < count; i++) {
      r -= increment * Math.random();
      positions.push(...genStar(r).toArray());
      color2.setHSL(i / count, saturation, 0.9);
      colors.push(color2.r, color2.g, color2.b);
    }
    return [new Float32Array(positions), new Float32Array(colors), new Float32Array(sizes)];
  }, [count, depth, factor, radius, saturation]);
  useFrame((state) => material.current && (material.current.uniforms.time.value = state.clock.elapsedTime * speed));
  const [starfieldMaterial] = reactExports.useState(() => new StarfieldMaterial());
  return /* @__PURE__ */ reactExports.createElement("points", {
    ref
  }, /* @__PURE__ */ reactExports.createElement("bufferGeometry", null, /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-position",
    args: [position, 3]
  }), /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-color",
    args: [color, 3]
  }), /* @__PURE__ */ reactExports.createElement("bufferAttribute", {
    attach: "attributes-size",
    args: [size, 1]
  })), /* @__PURE__ */ reactExports.createElement("primitive", {
    ref: material,
    object: starfieldMaterial,
    attach: "material",
    blending: AdditiveBlending,
    "uniforms-fade-value": fade,
    depthWrite: false,
    transparent: true,
    vertexColors: true
  }));
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
function AnimatedSphere({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5, rotationIntensity: 0.5, floatIntensity: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sphere, { ref: meshRef, args: [size, 64, 64], position, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MeshDistortMaterial,
    {
      color,
      attach: "material",
      distort: 0.45,
      speed: 3,
      roughness: 0.1,
      metalness: 0.8
    }
  ) }) });
}
function ParticleField() {
  const pointsRef = reactExports.useRef(null);
  const count = 180;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref: pointsRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "pointsMaterial",
      {
        size: 0.055,
        color: "#E91E63",
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true
      }
    )
  ] });
}
function RingObject() {
  const ringRef = reactExports.useRef(null);
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: ringRef, position: [3.5, 1, -2], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.2, 0.06, 16, 80] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#C9A84C", metalness: 0.95, roughness: 0.05 })
  ] });
}
function Scene3D() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 5], intensity: 1.5, color: "#E91E63" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -5, 5], intensity: 0.8, color: "#C9A84C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "spotLight",
      {
        position: [0, 10, 0],
        angle: 0.3,
        intensity: 1.2,
        color: "#F06292"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Stars,
      {
        radius: 60,
        depth: 50,
        count: 600,
        factor: 3,
        saturation: 0.8,
        fade: true,
        speed: 0.8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleField, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSphere,
      {
        position: [-3.5, 1.5, -3],
        color: "#E91E63",
        size: 0.9,
        speed: 0.8
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSphere,
      {
        position: [4, -1.5, -4],
        color: "#C9A84C",
        size: 0.65,
        speed: 1.1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSphere,
      {
        position: [-1.5, -2.5, -2],
        color: "#F06292",
        size: 0.45,
        speed: 1.4
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AnimatedSphere,
      {
        position: [2.5, 3, -5],
        color: "#9C27B0",
        size: 0.55,
        speed: 0.7
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RingObject, {})
  ] });
}
const stats = [
  { value: "500+", label: "Brides Transformed" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Celebrity Clients" },
  { value: "100%", label: "5-Star Reviews" }
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
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 60%, #16213e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
              background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(233,30,99,0.12) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-1 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 40% 40% at 70% 60%, rgba(201,168,76,0.06) 0%, transparent 60%)"
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
                        background: "rgba(233,30,99,0.1)",
                        borderColor: "rgba(233,30,99,0.3)",
                        color: "#F06292"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
                        "Celebrity Makeup Artist · Lucknow"
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  className: "heading-display text-5xl lg:text-7xl font-bold text-white",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.1 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "AWM" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Makeovers" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "By Aastha" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  className: "text-lg text-white/70 leading-relaxed max-w-md",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.25 },
                  children: [
                    "Lucknow's most celebrated bridal makeup artist — trusted by",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/90", children: "A-list celebrities" }),
                    ", brides, and royalty. Every lehenga, every maang tikka, every moment — perfected with artistry."
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
                    "Bollywood Approved",
                    "Wedding Wire Top Artist",
                    "Vogue Featured"
                  ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full",
                      style: {
                        background: "rgba(201,168,76,0.12)",
                        color: "#C9A84C",
                        border: "1px solid rgba(201,168,76,0.25)"
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
                        href: "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book%20bridal%20makeup!",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            "data-ocid": "hero.book_button",
                            size: "lg",
                            className: "relative h-12 px-8 text-base font-semibold text-white overflow-hidden group",
                            style: {
                              background: "linear-gradient(135deg, #E91E63, #C2185B)",
                              boxShadow: "0 4px 24px rgba(233,30,99,0.45)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 mr-2" }),
                              "Book Your Bridal Look",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                  style: {
                                    background: "linear-gradient(135deg, #F06292, #E91E63)"
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
                          borderColor: "rgba(233,30,99,0.4)",
                          color: "#F06292",
                          background: "rgba(233,30,99,0.06)"
                        },
                        children: "View Portfolio"
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: "tel:+919451819583",
                  "data-ocid": "hero.phone_link",
                  className: "flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors w-fit",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.6 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4", style: { color: "#E91E63" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "+91 94518 19583" })
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
                        background: "radial-gradient(ellipse at center, rgba(233,30,99,0.3) 0%, transparent 70%)",
                        filter: "blur(24px)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden",
                      style: {
                        boxShadow: "0 24px 64px rgba(233,30,99,0.3), 0 0 0 1px rgba(233,30,99,0.2)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: "/assets/photo1.png",
                            alt: "Aastha - Premium Bridal Makeup Artist",
                            className: "w-full h-full object-cover"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0",
                            style: {
                              background: "linear-gradient(to top, rgba(13,13,26,0.5) 0%, transparent 50%)"
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Star,
                          {
                            className: "w-4 h-4 fill-current",
                            style: { color: "#C9A84C" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-white", children: "5.0 Rating" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50", children: "500+ Brides" })
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold", style: { color: "#E91E63" }, children: "Celebrity" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70", children: "Makeup Artist" })
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
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8 + i * 0.1 },
                  whileHover: { scale: 1.04 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold heading-display text-gradient-pink", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/50 mt-1 font-medium", children: stat.label })
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
                style: { borderColor: "rgba(233,30,99,0.4)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-1 h-3 rounded-full animate-pulse",
                    style: { background: "#E91E63" }
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
