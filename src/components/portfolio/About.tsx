import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const skills = [
  { name: "Web Development", level: 85 },
  { name: "Python", level: 92 },
  { name: "UI / UX Design", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Three.js", level: 78 },
  { name: "App Development", level: 94 },
];

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Animation",
  "SQL",
  "Python",
  "Flutter",
  "Canva",
  "Three.js",
  "Node",
  "Vite",
  "Supabase",
  "Rive",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neon">01 — About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              A <span className="text-gradient">multidisciplinary</span> maker of things on screens.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I'm a full-stack developer specializing in Flutter, Python, and modern web
              technologies. I build AI-powered applications, immersive dashboards, and responsive
              interfaces where clean engineering meets thoughtful design. My focus is creating
              products that are fast, intuitive, visually engaging, and built to solve real-world
              problems.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { k: "5+", v: "Projects" },
                { k: "10+", v: "Languages Learned" },
                { k: "1yr+", v: "Experience" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-lg font-semibold">Skills</h3>
              <div className="mt-6 space-y-5">
                {skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-neon via-neon-2 to-neon-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="glass rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-neon"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
