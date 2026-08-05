import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function MagneticButton({ children, className, variant = "primary", ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors",
        variant === "primary" &&
          "text-primary-foreground bg-gradient-to-r from-neon via-neon-2 to-neon-3 glow-ring",
        variant === "ghost" &&
          "glass text-foreground hover:text-neon",
        className,
      )}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
}