import { motion } from "framer-motion";

const achievements = [
  { metric: "270+", label: "DSA Problems Solved", icon: "⟨/⟩" },
  { metric: "1st", label: "Hackathon Champion — 50+ teams", icon: "🏆" },
  { metric: "✓", label: "Advanced SQL Certified", icon: "📜" },
  { metric: "Gold", label: "HackerRank Python Badge", icon: "🥇" },
  { metric: "Top 5", label: "Inter-College Hackathon Finalist", icon: "🎯" },
  { metric: "CR", label: "Class Representative — Leadership", icon: "👥" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Recognition
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-border rounded-lg p-6 bg-background hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg">{a.icon}</span>
                <span className="font-mono text-2xl font-bold text-primary">{a.metric}</span>
              </div>
              <p className="text-sm text-muted-foreground">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
