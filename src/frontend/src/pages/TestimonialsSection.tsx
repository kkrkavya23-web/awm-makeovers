import { Badge } from "@/components/ui/badge";
import type { Review } from "@/types";
import { Canvas, useFrame } from "@react-three/fiber";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import type { Mesh } from "three";

function FloatingDiamond({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.6;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial color="#E91E63" metalness={0.9} roughness={0.05} />
    </mesh>
  );
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Television Actress",
    rating: 5,
    text: "Aastha is simply magical. She did my makeup for the Star Plus awards — I've never felt so beautiful in my life. The camera loved every angle. She truly understands how light interacts with makeup.",
    location: "Mumbai",
    isCelebrity: true,
    event: "Star Plus Awards 2024",
  },
  {
    id: 2,
    name: "Kavya Reddy",
    role: "Bride, December 2024",
    rating: 5,
    text: "I was so nervous about my bridal makeup, but Aastha instantly made me feel at ease. My lehenga was a deep crimson and she matched every element perfectly — the maang tikka, the eyeshadow, the lips. I cried when I saw myself.",
    location: "Lucknow",
    event: "Grand Wedding at Taj Mahal Hotel",
  },
  {
    id: 3,
    name: "Deepika Malhotra",
    role: "Influencer & Content Creator",
    rating: 5,
    text: "Hired Aastha for a fashion shoot and honestly she's a genius. The Bollywood editorial look she created got 2 lakh likes on Instagram. Brands are now reaching out asking who did my makeup!",
    location: "Delhi",
    isCelebrity: true,
    event: "Vogue India Collaboration",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Bride, February 2025",
    rating: 5,
    text: "My wedding was in 40°C heat in June and Aastha's makeup stayed absolutely flawless for 14 hours. From baraat to vidaai — not a crease, not a smudge. Worth every rupee. My photos are stunning.",
    location: "Lucknow",
    event: "Garden Wedding, Lucknow",
  },
  {
    id: 5,
    name: "Riya Kapoor",
    role: "Model",
    rating: 5,
    text: "I've worked with makeup artists across India. Aastha is in a different league entirely. Her technique, her product knowledge, her dedication to perfection — she's the best I've encountered. Truly celebrity-grade.",
    location: "Lucknow",
    isCelebrity: true,
  },
  {
    id: 6,
    name: "Sunita Verma",
    role: "Mother of the Bride",
    rating: 5,
    text: "Not only did Aastha make my daughter look like a queen, she also did my makeup for the reception. At 52, I felt 30 again! She has a gift for making every woman feel extraordinary.",
    location: "Kanpur",
    event: "Family Wedding Package",
  },
  {
    id: 7,
    name: "Meera Nair",
    role: "Bride, October 2024",
    rating: 5,
    text: "Aastha understood my vision better than I did! I showed her one reference image and she created something even more beautiful. The consultation was so thorough — she asked about my personality, not just my lehenga.",
    location: "Lucknow",
  },
  {
    id: 8,
    name: "Pooja Singh",
    role: "Bollywood Background Dancer",
    rating: 5,
    text: "We needed makeup for a big Bollywood item number shoot. Aastha arrived at 4 AM without complaint and had 8 of us camera-ready by 6 AM. Flawless. Fast. Professional. The director himself complimented her work.",
    location: "Lucknow",
    isCelebrity: true,
    event: "Bollywood Film Production",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      className="relative rounded-2xl p-7 flex flex-col gap-5 h-full"
      style={{
        background: "rgba(26,26,46,0.7)",
        border: "1px solid rgba(233,30,99,0.12)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 12px 40px rgba(233,30,99,0.18), 0 0 0 1px rgba(233,30,99,0.2)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Quote icon */}
      <Quote className="w-8 h-8 opacity-30" style={{ color: "#E91E63" }} />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: review.rating }, (_, i) => `s${i}`).map((key) => (
          <Star
            key={key}
            className="w-4 h-4 fill-current"
            style={{ color: "#C9A84C" }}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/75 text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>

      {/* Event */}
      {review.event && (
        <p className="text-xs" style={{ color: "rgba(201,168,76,0.7)" }}>
          📍 {review.event}
        </p>
      )}

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-3 border-t"
        style={{ borderColor: "rgba(233,30,99,0.12)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: "linear-gradient(135deg, #E91E63, #C2185B)" }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-white">{review.name}</p>
            {review.isCelebrity && (
              <Badge
                className="text-xs px-2 py-0"
                style={{
                  background: "rgba(201,168,76,0.2)",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                ⭐ Celebrity
              </Badge>
            )}
          </div>
          <p className="text-xs text-white/45">
            {review.role} · {review.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      data-ocid="testimonials.section"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* 3D accents */}
      <div className="absolute left-0 top-0 w-72 h-72 opacity-25">
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 2]} color="#E91E63" intensity={2} />
          <FloatingDiamond position={[0, 0, 0]} />
          <FloatingDiamond position={[2, -1, -1]} />
        </Canvas>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(233,30,99,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
            ⭐ Real Stories
          </Badge>
          <h2 className="heading-section text-4xl lg:text-5xl font-bold text-white mb-4">
            What{" "}
            <span className="text-gradient-pink">Celebrities & Brides</span> Say
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-lg">
            Don't take our word for it — hear from the brides, celebrities, and
            personalities who trusted Aastha with their most important moments.
          </p>
        </motion.div>

        {/* Review cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {visible.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            data-ocid="testimonials.pagination_prev"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{
              background: "rgba(233,30,99,0.12)",
              border: "1px solid rgba(233,30,99,0.25)",
              color: "#F06292",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i).map((i) => (
              <button
                type="button"
                key={`page-dot-${i}`}
                onClick={() => setPage(i)}
                data-ocid={`testimonials.page.${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  background: page === i ? "#E91E63" : "rgba(233,30,99,0.25)",
                  transform: page === i ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            data-ocid="testimonials.pagination_next"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{
              background: "rgba(233,30,99,0.12)",
              border: "1px solid rgba(233,30,99,0.25)",
              color: "#F06292",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
