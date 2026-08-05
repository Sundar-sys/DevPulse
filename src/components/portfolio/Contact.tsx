import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Github, Instagram, Linkedin, Loader2, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";

function Field({
  label,
  type = "text",
  as = "input",
  name,
}: {
  label: string;
  type?: string;
  as?: "input" | "textarea";
  name: string;
}) {
  const [v, setV] = useState("");
  const [focus, setFocus] = useState(false);
  const active = focus || v.length > 0;
  const Comp: any = as;
  return (
    <div className="relative">
      <Comp
        name={name}
        type={type}
        rows={as === "textarea" ? 5 : undefined}
        value={v}
        onChange={(e: any) => setV(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="peer w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 pb-3 pt-6 text-foreground outline-none transition-colors focus:border-neon"
      />
      <label
        className={`pointer-events-none absolute left-4 origin-left transition-all ${
          active ? "top-2 scale-[0.78] text-neon" : "top-5 text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("done"), 1200);
    setTimeout(() => setState("idle"), 3800);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon/25 blur-[140px]" />
      <Reveal>
        <p className="mb-4 text-center text-xs uppercase tracking-[0.4em] text-neon">
          03 — Contact
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-center font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
          Let's build something <span className="text-gradient">electric</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mx-auto mt-6 max-w-lg text-center text-muted-foreground">
          Have a project in mind, a wild idea, or just want to say hi? The inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <form onSubmit={submit} className="glass mx-auto mt-14 grid gap-4 rounded-3xl p-6 sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" />
            <Field label="Email address" name="email" type="email" />
          </div>
          <Field label="Tell me about your project" name="message" as="textarea" />

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground hover:text-neon"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            <motion.button
              type="submit"
              disabled={state !== "idle"}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex min-w-[180px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-neon via-neon-2 to-neon-3 px-8 py-4 text-sm font-semibold text-primary-foreground glow-ring disabled:opacity-90"
            >
              <AnimatePresence mode="wait" initial={false}>
                {state === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                  >
                    Send message
                  </motion.span>
                )}
                {state === "loading" && (
                  <motion.span
                    key="loading"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </motion.span>
                )}
                {state === "done" && (
                  <motion.span
                    key="done"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Sent!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>
      </Reveal>

      <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} Shiv Sundar Sahoo. Crafted with care.</span>
        <span className="uppercase tracking-[0.3em]">Made in the dark</span>
      </footer>
    </section>
  );
}
