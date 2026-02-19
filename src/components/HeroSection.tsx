import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const metrics = [
  { value: 270, suffix: "+", label: "DSA Problems" },
  { value: 15, suffix: "+", label: "REST APIs Built" },
  { value: 50, suffix: "K+", label: "Records Optimized" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-mono text-3xl md:text-4xl font-bold text-foreground">
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Software Engineer Building{" "}
            <span className="text-gradient">Scalable Applications</span>{" "}
            & Data-Driven Systems
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Final-year Computer Science student specializing in full-stack development,
            backend architecture, SQL optimization, and analytics-driven decision systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-lg"
        >
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <Counter target={m.value} suffix={m.suffix} />
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
