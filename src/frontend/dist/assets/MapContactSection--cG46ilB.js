import { j as jsxRuntimeExports, r as reactExports, m as motion, F as FaWhatsapp, c as ue } from "./index-qSaXK_m0.js";
import { c as cn, a as createSlot, B as Badge } from "./badge-BAyG6EgK.js";
import { B as Button } from "./button-D6n3Vb-9.js";
import { P as Phone } from "./phone-C6uMKMF2.js";
import { M as MapPin } from "./map-pin-i9Vx4DeH.js";
import { C as Clock } from "./clock-6VNT7DZO.js";
import { I as Instagram } from "./instagram-Diwjn8V5.js";
import { c as createLucideIcon } from "./createLucideIcon-BK_9rBQU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const contactInfo = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 94518 19583",
    href: "tel:+919451819583",
    color: "#E91E63"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
    href: "https://maps.google.com/?q=Lucknow",
    color: "#C9A84C"
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sat: 9AM – 8PM",
    href: void 0,
    color: "#F06292"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@awm_makeovers_by_aastha",
    href: "https://instagram.com/awm_makeovers_by_aastha",
    color: "#E91E63"
  }
];
function MapContactSection() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    phone: "",
    date: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Aastha! I'd like to enquire about a booking.

Name: ${formData.name}
Phone: ${formData.phone}
Wedding Date: ${formData.date}
Message: ${formData.message}`
    );
    window.open(`https://wa.me/919451819583?text=${msg}`, "_blank");
    setSubmitted(true);
    ue.success("Redirecting you to WhatsApp!", {
      description: "Your enquiry details have been pre-filled."
    });
    setTimeout(() => setSubmitted(false), 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "contact.section",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #16213e 0%, #0d0d1a 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(233,30,99,0.07) 0%, transparent 60%)"
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
                    children: "📍 Find Us"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-section text-4xl lg:text-5xl font-bold text-white mb-4", children: [
                  "Book Your ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-pink", children: "Dream Look" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/55 max-w-lg mx-auto text-lg", children: "Based in Lucknow, serving brides across India. Reach out and let's create your perfect bridal transformation." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "grid grid-cols-2 gap-4",
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6 },
                  children: contactInfo.map((item) => {
                    const Icon = item.icon;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "rounded-2xl p-5 flex flex-col gap-2",
                        style: {
                          background: "rgba(26,26,46,0.7)",
                          border: "1px solid rgba(233,30,99,0.12)",
                          backdropFilter: "blur(16px)"
                        },
                        whileHover: { y: -3, borderColor: "rgba(233,30,99,0.3)" },
                        transition: { duration: 0.3 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-9 h-9 rounded-xl flex items-center justify-center",
                              style: {
                                background: `${item.color}18`,
                                border: `1px solid ${item.color}30`
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4", style: { color: item.color } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/40 font-medium", children: item.label }),
                            item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "a",
                              {
                                href: item.href,
                                target: item.href.startsWith("http") ? "_blank" : void 0,
                                rel: "noopener noreferrer",
                                className: "text-sm text-white font-medium hover:text-pink-light transition-colors",
                                children: item.value
                              }
                            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: item.value })
                          ] })
                        ]
                      },
                      item.label
                    );
                  })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "rounded-2xl overflow-hidden flex-1 min-h-64",
                  style: {
                    border: "1px solid rgba(233,30,99,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                  },
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: 0.2 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "iframe",
                    {
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114984.25929395577!2d80.85135!3d26.84649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
                      width: "100%",
                      height: "280",
                      style: { border: 0, filter: "invert(0.9) hue-rotate(180deg)" },
                      allowFullScreen: true,
                      loading: "lazy",
                      referrerPolicy: "no-referrer-when-downgrade",
                      title: "AWM Makeovers - Lucknow Location"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: "https://wa.me/919451819583?text=Hi%20Aastha%2C%20I%27d%20like%20to%20book%20a%20consultation!",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "contact.whatsapp_button",
                  className: "flex items-center justify-center gap-3 p-4 rounded-2xl text-white font-semibold text-base",
                  style: {
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)"
                  },
                  whileHover: {
                    scale: 1.02,
                    boxShadow: "0 8px 32px rgba(37,211,102,0.4)"
                  },
                  whileTap: { scale: 0.98 },
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.3 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FaWhatsapp, { className: "w-6 h-6" }),
                    "Message on WhatsApp"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "rounded-2xl p-8",
                style: {
                  background: "rgba(26,26,46,0.7)",
                  border: "1px solid rgba(233,30,99,0.15)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)"
                },
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.15 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white heading-section mb-2", children: "Send an Enquiry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50 mb-6", children: "Fill in your details and we'll send it straight to Aastha's WhatsApp." }),
                  submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-12 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-16 h-16",
                        style: { color: "#E91E63" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-lg", children: "Redirected to WhatsApp!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm text-center", children: "Your details have been pre-filled. Just hit send!" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "name",
                            className: "text-xs text-white/60 mb-1.5 block",
                            children: "Your Name *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "name",
                            "data-ocid": "contact.name_input",
                            required: true,
                            placeholder: "Priya Sharma",
                            value: formData.name,
                            onChange: (e) => setFormData((p) => ({ ...p, name: e.target.value })),
                            className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-pink-DEFAULT",
                            style: { borderColor: "rgba(233,30,99,0.2)" }
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "phone",
                            className: "text-xs text-white/60 mb-1.5 block",
                            children: "Mobile Number *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "phone",
                            "data-ocid": "contact.phone_input",
                            required: true,
                            placeholder: "+91 98765 43210",
                            value: formData.phone,
                            onChange: (e) => setFormData((p) => ({ ...p, phone: e.target.value })),
                            className: "bg-white/5 border-white/10 text-white placeholder:text-white/30",
                            style: { borderColor: "rgba(233,30,99,0.2)" }
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "date",
                          className: "text-xs text-white/60 mb-1.5 block",
                          children: "Wedding / Event Date"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "date",
                          type: "date",
                          "data-ocid": "contact.date_input",
                          value: formData.date,
                          onChange: (e) => setFormData((p) => ({ ...p, date: e.target.value })),
                          className: "bg-white/5 border-white/10 text-white",
                          style: {
                            borderColor: "rgba(233,30,99,0.2)",
                            colorScheme: "dark"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "message",
                          className: "text-xs text-white/60 mb-1.5 block",
                          children: "Tell Us About Your Event"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          id: "message",
                          "data-ocid": "contact.message_input",
                          placeholder: "Bridal look for wedding on 15th Nov, lehenga is deep red, venue is Taj Mahal Hotel Lucknow...",
                          value: formData.message,
                          onChange: (e) => setFormData((p) => ({ ...p, message: e.target.value })),
                          rows: 4,
                          className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none",
                          style: { borderColor: "rgba(233,30,99,0.2)" }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "submit",
                        "data-ocid": "contact.submit_button",
                        size: "lg",
                        className: "w-full h-12 text-base font-semibold text-white mt-2",
                        style: {
                          background: "linear-gradient(135deg, #E91E63, #C2185B)",
                          boxShadow: "0 4px 20px rgba(233,30,99,0.35)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 mr-2" }),
                          "Send Enquiry via WhatsApp"
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  MapContactSection as default
};
