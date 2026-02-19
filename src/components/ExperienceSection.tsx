import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Vesponix IT Solutions",
    highlights: [
      "Optimized SQL queries on 50K+ record datasets → 20% faster execution",
      "Improved backend throughput by 15%",
      "Built modular data processing pipelines",
      "Delivered components in agile sprint cycles",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Evalitic IT Solutions",
    highlights: [
      "Built backend modules using Python and OOP principles",
      "Reduced manual effort by 30% via workflow automation",
      "Strengthened data reliability using structured validation",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Skill Dzire",
    highlights: [
      "Built classification models achieving 85%+ accuracy",
      "Improved performance by 15% using feature engineering",
      "Conducted EDA and statistical validation",
      "Delivered visualization dashboards",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Work
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border border-border rounded-lg p-6 md:p-8 bg-background hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary font-mono">{exp.company}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
