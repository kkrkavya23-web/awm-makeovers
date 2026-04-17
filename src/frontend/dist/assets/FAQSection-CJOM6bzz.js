import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-qSaXK_m0.js";
import { B as Badge } from "./badge-BAyG6EgK.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
import { A as AnimatePresence } from "./index-CR5o1DLD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const faqs = [
  {
    id: 1,
    question: "How far in advance should I book for bridal makeup?",
    answer: "We recommend booking 3-6 months in advance for wedding dates, especially during peak season (October to February) and popular auspicious dates. Weekend dates in wedding season fill up the fastest. For engagements and smaller events, 4-6 weeks is usually sufficient. Contact us to check availability — we maintain a waitlist for last-minute cancellations.",
    category: "Booking"
  },
  {
    id: 2,
    question: "Do you travel outside Lucknow for destination weddings?",
    answer: "Absolutely! Aastha and her team travel across India and internationally for destination weddings. We have done weddings in Jaipur, Delhi, Mumbai, Goa, and even Dubai. Travel and accommodation costs are additional and vary by location. Contact us for a custom quote for your destination.",
    category: "Logistics"
  },
  {
    id: 3,
    question: "What makeup brands do you use?",
    answer: "We use only premium international and Indian luxury brands including MAC, NARS, Charlotte Tilbury, Urban Decay, Huda Beauty, SUGAR Cosmetics, and Kryolan for professional looks. All products are dermatologist-tested and we carry hypoallergenic alternatives for sensitive skin. We never compromise on product quality.",
    category: "Products"
  },
  {
    id: 4,
    question: "Is a pre-bridal trial session available?",
    answer: "Yes! A pre-bridal trial is highly recommended and is included in all our full bridal packages. The trial takes 2-3 hours and lets you experience the exact look before your big day. We document your look with photos from every angle so we can perfectly recreate it on your wedding day. Trials are done 2-4 weeks before the wedding.",
    category: "Services"
  },
  {
    id: 5,
    question: "How long does bridal makeup take?",
    answer: "A complete bridal look including hair styling takes approximately 2.5-3.5 hours. Engagement looks take 1.5-2 hours. We always arrive early and build time buffers into our schedule so you are never rushed. For large bridal parties, we bring additional artists to ensure everyone is ready on time.",
    category: "Services"
  },
  {
    id: 6,
    question: "Do you do hairstyling as well?",
    answer: "Yes! We offer complete bridal grooming — makeup, hairstyling, and even saree/lehenga draping coordination. Our hairstyling services include everything from traditional buns, juda, and braids to modern waves, curls, and updos. Everything is coordinated to create a cohesive bridal look.",
    category: "Services"
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. A 30-50% advance is required to confirm your booking, with the balance due on the day of service. For destination weddings, full payment is required 2 weeks prior to the date. We provide official receipts for all transactions.",
    category: "Booking"
  },
  {
    id: 8,
    question: "Can the makeup withstand heat and humidity in Lucknow summers?",
    answer: "Absolutely! We use advanced setting techniques including HD airbrush primer, translucent baking powder, and professional setting sprays specifically formulated for hot and humid conditions. Our bridal makeup is tested to last 10-14 hours even in peak summer. We also provide a personalised touch-up kit with all the products used on your look.",
    category: "Products"
  },
  {
    id: 9,
    question: "Do you cater to non-Hindu wedding ceremonies?",
    answer: "Yes! We have extensive experience with Muslim, Christian, Sikh, Buddhist, and Jain wedding ceremonies and their specific requirements. We understand how dress codes, jewellery styles, and ceremony traditions influence the makeup look. Every bride's cultural context is respected and celebrated.",
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
        background: isOpen ? "rgba(233,30,99,0.06)" : "rgba(26,26,46,0.6)",
        border: isOpen ? "1px solid rgba(233,30,99,0.25)" : "1px solid rgba(233,30,99,0.1)",
        backdropFilter: "blur(16px)"
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
                      background: "rgba(233,30,99,0.12)",
                      color: "#F06292",
                      border: "1px solid rgba(233,30,99,0.2)"
                    },
                    children: faq.category
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-white pr-2", children: faq.question })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { rotate: isOpen ? 180 : 0 },
                  transition: { duration: 0.25 },
                  className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center",
                  style: {
                    background: isOpen ? "#E91E63" : "rgba(233,30,99,0.12)",
                    color: isOpen ? "white" : "#F06292"
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
                style: { borderColor: "rgba(233,30,99,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/65 leading-relaxed mt-3", children: faq.answer })
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
        background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(233,30,99,0.06) 0%, transparent 60%)"
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
                    children: "❓ Got Questions?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "Frequently Asked",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Questions" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 max-w-lg mx-auto text-lg", children: "Everything you need to know before booking. If your question isn't answered here, reach out directly — we're always happy to help." })
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 mb-5", children: "Still have questions? We're here to help." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%20have%20a%20question!",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "faq.whatsapp_button",
                    className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105",
                    style: {
                      background: "linear-gradient(135deg, #E91E63, #C2185B)",
                      boxShadow: "0 4px 20px rgba(233,30,99,0.35)"
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
