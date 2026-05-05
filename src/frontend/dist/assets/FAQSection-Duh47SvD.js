import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-C6sUuw8C.js";
import { B as Badge } from "./badge-DqKpRZP4.js";
import { M as MessageCircle } from "./message-circle-BHAMIDT3.js";
import { c as createLucideIcon } from "./createLucideIcon-ZOu9CJEQ.js";
import { A as AnimatePresence } from "./index-3X_qfGc2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode);
const faqs = [
  {
    id: 1,
    question: "How far in advance should I book for bridal makeup in Karwar?",
    answer: "We recommend booking 3-6 months in advance for wedding dates, especially during peak season (October to February) and popular auspicious dates. Karnataka wedding season can be very busy. For engagements and smaller events, 4-6 weeks is usually sufficient. Contact us to check availability — we maintain a waitlist for last-minute cancellations. Early bookings also get a free pre-bridal consultation.",
    category: "Booking"
  },
  {
    id: 2,
    question: "Do you travel outside Karwar for destination weddings?",
    answer: "Absolutely! Shreya and her team travel across Uttara Kannada, Goa border areas, Mangalore, Hubli-Dharwad, and across Karnataka for weddings. We have also done destination weddings in Goa, Mumbai, and Bangalore. Travel and accommodation costs are additional and vary by location. Contact us for a custom quote for your destination wedding.",
    category: "Logistics"
  },
  {
    id: 3,
    question: "What makeup and hair products do you use?",
    answer: "We use only premium international and Indian luxury brands including MAC, NARS, Charlotte Tilbury, Urban Decay, Huda Beauty, SUGAR Cosmetics, and Kryolan for professional makeup. For hair styling, we use professional-grade products from Schwarzkopf, Wella, and Olaplex. All products are dermatologist-tested and we carry hypoallergenic alternatives for sensitive skin.",
    category: "Products"
  },
  {
    id: 4,
    question: "Is a pre-bridal trial session available?",
    answer: "Yes! A pre-bridal trial for both makeup and hair is highly recommended and is included in all our full bridal packages. The trial takes 2.5-3.5 hours and lets you experience your exact look before the wedding day. We photograph from every angle to perfectly recreate it. Trials are done 3-4 weeks before your wedding date.",
    category: "Services"
  },
  {
    id: 5,
    question: "How long does bridal makeup and hair styling take?",
    answer: "A complete bridal look including hair styling takes approximately 3-4 hours. Engagement looks take 2-2.5 hours. We always arrive early and build time buffers into our schedule so you are never rushed. For large bridal parties, we bring additional artists to ensure everyone is ready well on time.",
    category: "Services"
  },
  {
    id: 6,
    question: "Do you specialise in South Indian bridal hairstyles?",
    answer: "Yes! This is our speciality. Shreya has deep expertise in traditional South Indian bridal hairstyles — jasmine-adorned braids, classic juda with gold pins, modern updos that complement silk sarees and temple jewellery, Kodava traditional styles, and Mangalorean bridal hair traditions. We also do modern bridal hair for fusion weddings.",
    category: "Services"
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. A 30-50% advance is required to confirm your booking, with the balance due on the day of service. For outstation weddings, full payment is required 2 weeks prior. We provide official receipts for all transactions and can issue GST invoices on request.",
    category: "Booking"
  },
  {
    id: 8,
    question: "Can the makeup withstand Karwar's coastal humidity?",
    answer: "Absolutely! We specialise in humidity-resistant formulas perfect for Karwar's coastal climate. We use advanced setting techniques including HD airbrush primer, translucent baking, and professional setting sprays specifically designed for hot and humid conditions. Our bridal makeup is tested to last 10-14 hours through Karwar's weather.",
    category: "Products"
  },
  {
    id: 9,
    question: "Do you cater to different cultural and religious ceremonies?",
    answer: "Yes! We have extensive experience with Kannada, Tulu, Kodava, Konkani, Muslim, Christian, and Jain wedding ceremonies and their specific makeup and hair requirements. We understand how dress codes, traditional ornaments, and ceremony traditions influence the bridal look. Every bride's cultural context is deeply respected and celebrated.",
    category: "Services"
  }
];
function FAQItem({
  faq,
  isOpen,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `faq.item.${faq.id}`,
      className: "rounded-2xl overflow-hidden",
      style: {
        background: isOpen ? "rgba(212,169,106,0.08)" : "rgba(255,255,255,0.85)",
        border: isOpen ? "1.5px solid rgba(212,169,106,0.45)" : "1px solid rgba(196,149,106,0.2)",
        backdropFilter: "blur(16px)",
        boxShadow: isOpen ? "0 8px 32px rgba(212,169,106,0.18)" : "0 2px 8px rgba(139,94,60,0.06)"
      },
      layout: true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onToggle,
            "data-ocid": `faq.toggle.${faq.id}`,
            className: "w-full flex items-center justify-between p-5 text-left gap-4",
            "aria-expanded": isOpen,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 flex-1 min-w-0", children: [
                faq.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "shrink-0 text-xs px-2 py-0.5 rounded-full mt-0.5 hidden sm:block",
                    style: {
                      background: "rgba(139,94,60,0.1)",
                      color: "#8B5E3C",
                      border: "1px solid rgba(139,94,60,0.22)"
                    },
                    children: faq.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-base font-semibold pr-2",
                    style: { color: "#2D1B0E" },
                    children: faq.question
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: isOpen ? 180 : 0 },
                  transition: { duration: 0.25 },
                  className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center",
                  style: {
                    background: isOpen ? "linear-gradient(135deg, #8B5E3C, #C4956A)" : "rgba(139,94,60,0.1)",
                    color: isOpen ? "white" : "#8B5E3C"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pt-1 border-t",
                style: { borderColor: "rgba(196,149,106,0.2)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm leading-relaxed mt-3",
                    style: { color: "#6B4226" },
                    children: faq.answer
                  }
                )
              }
            ) })
          }
        ) })
      ]
    }
  );
}
function FAQSection() {
  const [openId, setOpenId] = reactExports.useState(1);
  const toggle = (id) => setOpenId((prev) => prev === id ? null : id);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "faq.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #FAF6F0 0%, #F5EFE6 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,169,106,0.1) 0%, transparent 60%)"
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
                    children: "❓ Got Questions?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "heading-section text-4xl lg:text-5xl font-bold mb-4",
                    style: { color: "#2D1B0E" },
                    children: [
                      "Frequently Asked",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brown", children: "Questions" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-lg mx-auto text-lg", style: { color: "#6B4226" }, children: "Everything you need to know before booking Shreya Makeup & Hair. If your question isn't here, reach out directly — we're always happy to help." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "max-w-3xl mx-auto flex flex-col gap-3",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
              children: faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                FAQItem,
                {
                  faq,
                  isOpen: openId === faq.id,
                  onToggle: () => toggle(faq.id)
                },
                faq.id
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mt-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-5", style: { color: "#8B5E3C" }, children: "Still have questions? We’re here to help." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/919611366425?text=Hi%20Shreya%2C%20I%20have%20a%20question!",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "faq.whatsapp_button",
                    className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105",
                    style: {
                      background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
                      boxShadow: "0 4px 20px rgba(139,94,60,0.28), 0 0 32px rgba(212,169,106,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                      "Ask on WhatsApp"
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
  FAQSection as default
};
