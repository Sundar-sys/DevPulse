import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/skeletonimg.jpeg";
import p2 from "@/assets/netra32.jpeg";
import p3 from "@/assets/shividashboard.png";
import p4 from "@/assets/project-4.jpg";

type Project = {
  title: string;
  category: string;
  tags: string[];
  image: string;
  span: string;
};

const projects: Project[] = [
  {
    title: "Eagle Delta",
    category: "Indoor Sensing · 2026",
    tags: ["Next.js", "Motion", "Rust", "ESP32"],
    image: p1,
    span: "md:col-span-8",
  },
  {
    title: "Netra 32",
    category: "Wearable Device · 2026",
    tags: ["Three.js", "Python"],
    image: p2,
    span: "md:col-span-4",
  },
  {
    title: "Shivi",
    category: "AI Buddy · 2026",
    tags: ["JavaScript", "Hugging Face", "Flutter"],
    image: p3,
    span: "md:col-span-5",
  },
  {
    title: "Quiznest",
    category: "Quiz Website · 2026",
    tags: ["Python", "Games", "Quiz"],
    image: p4,
    span: "md:col-span-7",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card"
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 sm:p-8">
          <div className="min-w-0">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neon">{p.category}</p>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            className="glass grid h-14 w-14 shrink-0 place-items-center rounded-full text-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-16 sm:w-16"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight className="h-6 w-6" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neon">02 — Selected work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Recent <span className="text-gradient">projects</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-muted-foreground">
            A small selection of things I've shipped with founders, teams and brands I love.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05} className={`col-span-12 ${p.span}`}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
