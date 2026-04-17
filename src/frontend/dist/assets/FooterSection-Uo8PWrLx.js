import { j as jsxRuntimeExports, m as motion, F as FaWhatsapp } from "./index-qSaXK_m0.js";
import { S as Sparkles } from "./sparkles-CfH5B7JF.js";
import { I as Instagram } from "./instagram-Diwjn8V5.js";
import { P as Phone } from "./phone-C6uMKMF2.js";
import { M as MapPin } from "./map-pin-i9Vx4DeH.js";
import { H as Heart } from "./heart-DJqoK7_p.js";
import "./createLucideIcon-BK_9rBQU.js";
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
        background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent, rgba(233,30,99,0.5), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at top, rgba(233,30,99,0.1) 0%, transparent 70%)"
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
                          background: "linear-gradient(135deg, #E91E63, #C2185B)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-white heading-section leading-tight", children: "AWM Makeovers" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40", children: "By Aastha" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50 leading-relaxed mb-5", children: "Lucknow's most celebrated bridal makeup artist — trusted by celebrities, brides, and families across India. Your moment deserves nothing less than extraordinary." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://wa.me/919451819583",
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
                    href: "https://instagram.com/awm_makeovers_by_aastha",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "footer.instagram_link",
                    className: "w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110",
                    style: {
                      background: "rgba(233,30,99,0.12)",
                      border: "1px solid rgba(233,30,99,0.25)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4", style: { color: "#E91E63" } })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-white/80 uppercase tracking-wider mb-5", children: "Quick Links" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2.5", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: link.href,
                  "data-ocid": `footer.${link.label.toLowerCase().replace(/\s/g, "_")}_link`,
                  className: "text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                        style: { background: "#E91E63" }
                      }
                    ),
                    link.label
                  ]
                }
              ) }, link.label)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-white/80 uppercase tracking-wider mb-5", children: "Get In Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+919451819583",
                    className: "flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-xl flex items-center justify-center shrink-0",
                          style: { background: "rgba(233,30,99,0.12)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5", style: { color: "#E91E63" } })
                        }
                      ),
                      "+91 94518 19583"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-white/55", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                      style: { background: "rgba(201,168,76,0.12)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MapPin,
                        {
                          className: "w-3.5 h-3.5",
                          style: { color: "#C9A84C" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Lucknow, Uttar Pradesh",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/35 text-xs", children: "Available across India" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.a,
                  {
                    href: "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book!",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "footer.book_button",
                    className: "flex items-center justify-center gap-2 mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white",
                    style: {
                      background: "linear-gradient(135deg, #E91E63, #C2185B)",
                      boxShadow: "0 4px 16px rgba(233,30,99,0.3)"
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
              style: { borderColor: "rgba(233,30,99,0.1)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/30 flex items-center gap-1", children: [
                  "© ",
                  year,
                  " AWM: Makeovers By Aastha · Lucknow"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/25 flex items-center gap-1", children: [
                  "Built with",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3 h-3 mx-0.5", style: { color: "#E91E63" } }),
                  " ",
                  "using",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-white/50 transition-colors underline",
                      children: "caffeine.ai"
                    }
                  )
                ] })
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
