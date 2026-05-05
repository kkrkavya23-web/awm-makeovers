import { j as jsxRuntimeExports, m as motion, F as FaWhatsapp } from "./index-C6sUuw8C.js";
import { S as Sparkles } from "./sparkles-C3bYJqTj.js";
import { I as Instagram } from "./instagram-Hr9vI7_l.js";
import { P as Phone } from "./phone-CIXmFEYO.js";
import { M as MapPin } from "./map-pin-DrpbUpyB.js";
import { H as Heart } from "./heart-BIM1TNwx.js";
import "./createLucideIcon-ZOu9CJEQ.js";
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];
const year = (/* @__PURE__ */ new Date()).getFullYear();
function FooterSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      "data-ocid": "footer.section",
      className: "relative overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #3D2010 0%, #2D1B0E 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent, rgba(212,169,106,0.7), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at top, rgba(212,169,106,0.15) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-12 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex items-center gap-3 mb-4",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-2xl flex items-center justify-center",
                        style: {
                          background: "linear-gradient(135deg, #C4956A, #D4A96A)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5", style: { color: "#2D1B0E" } })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-lg font-bold heading-section leading-tight",
                          style: { color: "#FAF6F0" },
                          children: "Shreya Makeup & Hair"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs",
                          style: { color: "rgba(212,169,106,0.7)" },
                          children: "Premium Bridal Artist, Karwar"
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm leading-relaxed mb-5",
                  style: { color: "rgba(250,246,240,0.55)" },
                  children: "Karwar's most celebrated bridal makeup & hair styling artist — trusted by brides and families across Karnataka. Your moment deserves nothing less than extraordinary."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://wa.me/919611366425",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "footer.whatsapp_link",
                    className: "w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110",
                    style: {
                      background: "rgba(37,211,102,0.15)",
                      border: "1px solid rgba(37,211,102,0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, { className: "w-4 h-4", style: { color: "#25D366" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://instagram.com/shreya_makeup_hair",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "footer.instagram_link",
                    className: "w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110",
                    style: {
                      background: "rgba(212,169,106,0.15)",
                      border: "1px solid rgba(212,169,106,0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4", style: { color: "#D4A96A" } })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "text-sm font-semibold uppercase tracking-wider mb-5",
                  style: { color: "rgba(212,169,106,0.8)" },
                  children: "Quick Links"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2.5", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: link.href,
                  "data-ocid": `footer.${link.label.toLowerCase().replace(/\s/g, "_")}_link`,
                  className: "text-sm flex items-center gap-2 group transition-colors",
                  style: { color: "rgba(250,246,240,0.5)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                        style: { background: "#D4A96A" }
                      }
                    ),
                    link.label
                  ]
                }
              ) }, link.label)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "text-sm font-semibold uppercase tracking-wider mb-5",
                  style: { color: "rgba(212,169,106,0.8)" },
                  children: "Get In Touch"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+919611366425",
                    className: "flex items-center gap-3 text-sm transition-colors",
                    style: { color: "rgba(250,246,240,0.55)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
                          style: { background: "rgba(212,169,106,0.15)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5", style: { color: "#D4A96A" } })
                        }
                      ),
                      "+91 96113 66425"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3 text-sm",
                    style: { color: "rgba(250,246,240,0.55)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                          style: { background: "rgba(212,169,106,0.15)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            MapPin,
                            {
                              className: "w-3.5 h-3.5",
                              style: { color: "#C4956A" }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Shri Durga, HIG 117, New, Gunagi Wada,",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "Habbuwada, K.H.B. Colony, Karwar,",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(250,246,240,0.38)" }, children: "Karnataka 581306" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book!",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "footer.book_button",
                    className: "flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold",
                    style: {
                      background: "linear-gradient(135deg, #C4956A, #D4A96A)",
                      color: "#2D1B0E",
                      boxShadow: "0 4px 16px rgba(212,169,106,0.3)"
                    },
                    whileHover: { scale: 1.03 },
                    whileTap: { scale: 0.97 },
                    children: "Book a Consultation"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-3",
              style: { borderColor: "rgba(212,169,106,0.15)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs flex items-center gap-1",
                    style: { color: "rgba(250,246,240,0.3)" },
                    children: [
                      "© ",
                      year,
                      " Shreya Makeup & Hair · Karwar, Karnataka"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs flex items-center gap-1",
                    style: { color: "rgba(250,246,240,0.25)" },
                    children: [
                      "Built with",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 mx-0.5", style: { color: "#D4A96A" } }),
                      " ",
                      "using",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:opacity-50 transition-opacity underline",
                          children: "caffeine.ai"
                        }
                      )
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
  FooterSection as default
};
