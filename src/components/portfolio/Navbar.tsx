import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2 pl-6 sm:gap-6 sm:pl-6">
        <a href="#home" className="font-display text-sm font-bold tracking-tight sm:text-base">
          <span className="text-gradient">SHIV SUN</span>DAR SAHOO
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-gradient-to-r from-neon to-neon-2 px-4 py-2 text-xs font-semibold text-primary-foreground sm:text-sm"
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
}
