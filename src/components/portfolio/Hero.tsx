import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { ArrowDown, Sparkles } from "lucide-react";

const words = ["Developer.", "Designer.", "Creator."];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 40 : 90,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-32"
    >
      {/* mesh gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-neon/40 blur-[120px] animate-blob" />
        <div className="absolute right-[-8%] top-[20%] h-[500px] w-[500px] rounded-full bg-neon-2/30 blur-[130px] animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-[-15%] left-1/3 h-[520px] w-[520px] rounded-full bg-neon-3/25 blur-[140px] animate-blob [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* floating shapes */}
      <motion.div
        className="pointer-events-none absolute left-8 top-40 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-neon to-neon-2 opacity-70 blur-[2px]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-16 top-56 hidden md:block"
        animate={{ y: [0, 24, 0], rotate: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-32 w-32 rounded-full border-2 border-neon-3/70 [box-shadow:0_0_60px_var(--neon-3)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-20 right-1/3 hidden lg:block"
        animate={{ y: [0, -30, 0], rotate: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-16 w-16 rotate-45 bg-gradient-to-br from-neon-2 to-neon-3 opacity-80" />
      </motion.div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-neon" />
          Nice to meet you!
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-extrabold leading-[0.95]">
          {["Crafting", "Digital", "Experiences"].map((w, idx) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 * idx, ease: [0.2, 0.7, 0.2, 1] }}
              className="mr-4 inline-block"
            >
              {idx === 1 ? <span className="text-gradient">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 flex items-center gap-2 font-display text-lg text-muted-foreground sm:text-2xl"
        >
          I'm a
          <span className="min-w-[8ch] text-left text-foreground">
            {typed}
            <span className="ml-0.5 inline-block h-6 w-[3px] translate-y-1 bg-neon animate-blink sm:h-7" />
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I design and build intelligent, futuristic digital experiences that combine clean
          engineering, fluid motion, and modern UI. From AI-powered applications to immersive
          dashboards, I create products that are fast, intuitive, and enjoyable to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View my work
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in touch
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-neon" />
        </motion.a>
      </div>
    </section>
  );
}
