import { Badge } from "@/components/ui/badge";
import { MeshDistortMaterial, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Award,
  Clock,
  Heart,
  MapPin,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";

function Rotating3DIcon({
  color,
  position,
}: { color: string; position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.6;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  return (
    <Torus ref={ref} args={[0.5, 0.12, 16, 60]} position={position}>
      <MeshDistortMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        distort={0.2}
        speed={2}
      />
    </Torus>
  );
}

const whyPoints = [
  {
    icon: Award,
    color: "#E91E63",
    title: "Celebrity-Trusted Artistry",
    description:
      "Aastha has worked with Bollywood actresses, TV stars, and Lucknow's elite families. Her work has graced magazine covers, award shows, and viral social media moments.",
    stat: "50+ Celebrity Clients",
  },
  {
    icon: Star,
    color: "#C9A84C",
    title: "500+ Bridal Transformations",
    description:
      "Over 500 brides have walked down the aisle in Aastha's signature artistry. Each look is custom-crafted — never templated, always breathtaking.",
    stat: "500+ Brides",
  },
  {
    icon: Zap,
    color: "#F06292",
    title: "Airbrush HD Technology",
    description:
      "Professional-grade HD airbrush equipment for a foundation so flawless it photographs like skin. Built to last 10+ hours through Lucknow's summer heat and monsoon humidity.",
    stat: "HD Airbrush Tech",
  },
  {
    icon: Heart,
    color: "#E91E63",
    title: "Indian Bridal Specialist",
    description:
      "Deep expertise in lehenga colour matching, maang tikka placement, mehndi glow, and saree draping. Aastha understands Indian bridal beauty from the inside out.",
    stat: "Bridal Specialist",
  },
  {
    icon: Clock,
    color: "#C9A84C",
    title: "Punctual & Professional",
    description:
      "Never a late start on your most important day. Aastha's team operates with military precision — hair, makeup, and draping — all on schedule.",
    stat: "Always On Time",
  },
  {
    icon: MapPin,
    color: "#F06292",
    title: "Home & Venue Service",
    description:
      "We come to you. Whether it's your home, hotel suite, or wedding venue across Lucknow and beyond — we bring the luxury salon experience to your doorstep.",
    stat: "Doorstep Service",
  },
  {
    icon: Shield,
    color: "#E91E63",
    title: "Premium Certified Products",
    description:
      "MAC, NARS, Charlotte Tilbury, and international luxury brands only. Hypoallergenic options for sensitive skin. Your skin's safety is as important as your beauty.",
    stat: "Luxury Products Only",
  },
  {
    icon: Users,
    color: "#C9A84C",
    title: "Consultations Included",
    description:
      "Every booking includes a pre-bridal consultation to understand your vision, skin tone, lehenga palette, and wedding theme — ensuring the final look is perfectly you.",
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
        background: "rgba(26,26,46,0.6)",
        border: "1px solid rgba(233,30,99,0.1)",
        backdropFilter: "blur(20px)",
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
        border: "1px solid rgba(233,30,99,0.3)",
        boxShadow: "0 12px 40px rgba(233,30,99,0.15)",
      }}
    >
      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: `${point.color}18`,
          border: `1px solid ${point.color}30`,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-5 h-5" style={{ color: point.color }} />
      </motion.div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold text-white">{point.title}</h3>
        </div>
        <p className="text-sm text-white/55 leading-relaxed">
          {point.description}
        </p>
      </div>

      {/* Stat badge */}
      <div className="mt-auto">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: `${point.color}15`,
            color: point.color,
            border: `1px solid ${point.color}25`,
          }}
        >
          ✦ {point.stat}
        </span>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${point.color}08 0%, transparent 60%)`,
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
        background: "linear-gradient(180deg, #16213e 0%, #0d0d1a 100%)",
      }}
    >
      {/* 3D accent */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 3]} color="#E91E63" intensity={2} />
          <Rotating3DIcon color="#E91E63" position={[-1.5, 0.5, 0]} />
          <Rotating3DIcon color="#C9A84C" position={[1.2, -0.8, 0]} />
        </Canvas>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(233,30,99,0.06) 0%, transparent 60%)",
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
              background: "rgba(233,30,99,0.1)",
              border: "1px solid rgba(233,30,99,0.3)",
              color: "#F06292",
            }}
          >
            ✦ Why AWM
          </Badge>
          <h2 className="heading-section text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient-pink">Aastha?</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto text-lg leading-relaxed">
            Because your wedding day is not the time for "good enough" — it's
            the time for extraordinary. Here's why thousands of brides trust AWM
            Makeovers.
          </p>
        </motion.div>

        {/* Points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {whyPoints.map((point, i) => (
            <WhyCard key={point.title} point={point} index={i} />
          ))}
        </div>

        {/* Celebrity endorsement banner */}
        <motion.div
          className="mt-16 rounded-3xl p-8 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(233,30,99,0.12), rgba(26,26,46,0.8))",
            border: "1px solid rgba(233,30,99,0.2)",
            backdropFilter: "blur(20px)",
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
                "radial-gradient(ellipse at center, rgba(233,30,99,0.08) 0%, transparent 70%)",
            }}
          />
          <p className="text-2xl font-bold text-white heading-section mb-2 relative z-10">
            ⭐ Trusted by{" "}
            <span className="text-gradient-pink">Bollywood Celebrities</span> &
            Lucknow's Elite
          </p>
          <p className="text-white/60 relative z-10 max-w-2xl mx-auto">
            From red carpet premieres to intimate bridal chambers — Aastha's
            artistry has been chosen by the stars. When you book AWM, you get
            the same quality your favourite celebrities rely on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
