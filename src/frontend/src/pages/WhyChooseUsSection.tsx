import { Badge } from "@/components/ui/badge";
import { MeshDistortMaterial, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Award,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Scissors,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

function GoldenTorus({
  color,
  position,
}: { color: string; position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.55;
      ref.current.rotation.y = state.clock.elapsedTime * 0.38;
    }
  });
  return (
    <Torus ref={ref} args={[0.5, 0.12, 16, 60]} position={position}>
      <MeshDistortMaterial
        color={color}
        metalness={0.92}
        roughness={0.08}
        distort={0.18}
        speed={1.8}
      />
    </Torus>
  );
}

const whyPoints = [
  {
    icon: Award,
    color: "#8B5E3C",
    title: "Bridal Specialist",
    description:
      "Deep expertise in South Indian bridal looks, silk saree coordination, temple jewellery matching, and Karnataka wedding traditions. Every bride gets a truly personalised look.",
    stat: "South Indian Expert",
  },
  {
    icon: Scissors,
    color: "#C4956A",
    title: "Hair Styling Expert",
    description:
      "From classic jasmine-adorned buns to modern braided updos and beach waves — Shreya's hair artistry transforms every bride's crowning glory into a work of art.",
    stat: "Hair Transformation",
  },
  {
    icon: Star,
    color: "#D4A96A",
    title: "300+ Brides Served",
    description:
      "Over 300 brides across Karwar, Mangalore, Goa, and Karnataka have walked their aisle in Shreya's signature artistry. Each look is custom-crafted, never templated.",
    stat: "300+ Brides",
  },
  {
    icon: Heart,
    color: "#8B5E3C",
    title: "South Indian Specialist",
    description:
      "Specialising in Kannada, Tulu, Kodava, and Konkani wedding traditions. Understanding silk sarees, traditional ornaments, and cultural bridal aesthetics inside out.",
    stat: "Cultural Expert",
  },
  {
    icon: Shield,
    color: "#C4956A",
    title: "Premium Products Only",
    description:
      "MAC, NARS, Charlotte Tilbury, and international luxury brands only. Hypoallergenic options for sensitive skin. Your skin's safety is as important as your beauty.",
    stat: "Luxury Products",
  },
  {
    icon: MapPin,
    color: "#D4A96A",
    title: "On-Venue Service",
    description:
      "We come to you at home, hotel suite, or wedding venue across Karwar, Goa border areas, Uttara Kannada, and beyond. Luxury salon experience at your doorstep.",
    stat: "Doorstep Service",
  },
  {
    icon: Clock,
    color: "#8B5E3C",
    title: "Punctual & Professional",
    description:
      "Never a late start on your most important day. Shreya's team operates with precision — hair, makeup, and styling — all on schedule so you're never rushed.",
    stat: "Always On Time",
  },
  {
    icon: Users,
    color: "#C4956A",
    title: "Free Consultation",
    description:
      "Every booking includes a complimentary pre-bridal consultation to understand your vision, skin tone, saree palette, and wedding theme for the perfect look.",
    stat: "Free Consultation",
  },
];

function WhyCard({
  point,
  index,
}: { point: (typeof whyPoints)[0]; index: number }) {
  const Icon = point.icon;
  return (
    <motion.div
      data-ocid={`why.item.${index + 1}`}
      className="group relative rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(196,149,106,0.2)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 16px rgba(139,94,60,0.08)",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        border: "1px solid rgba(212,169,106,0.4)",
        boxShadow:
          "0 12px 40px rgba(212,169,106,0.2), 0 0 0 1px rgba(212,169,106,0.15)",
      }}
    >
      <motion.div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: `rgba(${point.color === "#8B5E3C" ? "139,94,60" : point.color === "#C4956A" ? "196,149,106" : "212,169,106"},0.12)`,
          border: `1px solid rgba(${point.color === "#8B5E3C" ? "139,94,60" : point.color === "#C4956A" ? "196,149,106" : "212,169,106"},0.28)`,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-5 h-5" style={{ color: point.color }} />
      </motion.div>

      <div>
        <h3 className="text-base font-bold mb-1" style={{ color: "#2D1B0E" }}>
          {point.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#6B4226" }}>
          {point.description}
        </p>
      </div>

      <div className="mt-auto">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "rgba(212,169,106,0.12)",
            color: "#8B5E3C",
            border: "1px solid rgba(196,149,106,0.28)",
          }}
        >
          ✶ {point.stat}
        </span>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(212,169,106,0.08) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section
      data-ocid="why.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #EDE0D0 0%, #F5EFE6 100%)",
      }}
    >
      {/* 3D accent */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-15">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[3, 3, 3]} color="#D4A96A" intensity={2} />
          <GoldenTorus color="#D4A96A" position={[-1.5, 0.5, 0]} />
          <GoldenTorus color="#C4956A" position={[1.2, -0.8, 0]} />
        </Canvas>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(212,169,106,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            className="mb-4 px-4 py-1.5 text-sm"
            style={{
              background: "rgba(139,94,60,0.1)",
              border: "1px solid rgba(139,94,60,0.28)",
              color: "#8B5E3C",
            }}
          >
            ✶ Why Shreya
          </Badge>
          <h2
            className="heading-section text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D1B0E" }}
          >
            Why Choose <span className="text-gradient-brown">Shreya?</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "#6B4226" }}
          >
            Because your wedding day is not the time for “good enough” — it's
            the time for extraordinary. Here’s why brides across Karnataka trust
            Shreya Makeup &amp; Hair.
          </p>
        </motion.div>

        {/* Points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {whyPoints.map((point, i) => (
            <WhyCard key={point.title} point={point} index={i} />
          ))}
        </div>

        {/* Premium banner */}
        <motion.div
          className="mt-16 rounded-3xl p-8 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,94,60,0.1), rgba(255,255,255,0.85))",
            border: "1.5px solid rgba(212,169,106,0.4)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 40px rgba(212,169,106,0.2)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,169,106,0.12) 0%, transparent 70%)",
            }}
          />
          <p
            className="text-2xl font-bold heading-section mb-2 relative z-10"
            style={{ color: "#2D1B0E" }}
          >
            ☆ Trusted by{" "}
            <span className="text-gradient-brown">Karnataka Brides</span> &amp;
            Families
          </p>
          <p
            className="relative z-10 max-w-2xl mx-auto"
            style={{ color: "#6B4226" }}
          >
            From intimate pooja ceremonies to grand wedding receptions in
            Karwar, Mangalore, and beyond — Shreya’s artistry has been chosen by
            hundreds of brides. When you book Shreya, you get the same premium
            quality every bride deserves.
          </p>
          <a
            href="https://wa.me/919611366425?text=Hi%20Shreya%2C%20I'd%20like%20to%20book%20a%20consultation!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full text-sm font-semibold text-white relative z-10 transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
              boxShadow: "0 4px 20px rgba(139,94,60,0.3)",
            }}
          >
            <MessageCircle className="w-4 h-4" />
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
