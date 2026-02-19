import { motion } from "framer-motion";

const clusters = [
  {
    title: "Software Development & Backend",
    items: ["Python", "Java", "C++", "Django", "DRF", "REST API Design", "RBAC", "Modular Architecture", "Exception Handling", "Concurrency"],
  },
  {
    title: "Full-Stack Development",
    items: ["Django + Frontend", "API Integration", "Auth Systems", "CRUD Workflows", "UI-to-Backend Data Flow", "AWS EC2 Deployment"],
  },
  {
    title: "Database Engineering",
    items: ["MySQL", "PostgreSQL", "Schema Design", "Normalization", "Indexing", "Query Optimization", "Performance Tuning"],
  },
  {
    title: "Data Analytics & BI",
    items: ["SQL Extraction", "EDA", "Statistical Validation", "Regression Analysis", "Power BI", "Tableau", "KPI Analysis", "Data Cleaning"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "TF-IDF", "Random Forest", "Precision / Recall", "Feature Engineering", "Hyperparameter Tuning", "Streamlit"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS S3", "AWS EC2", "Git", "Postman", "Agile Workflow"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Core Strengths
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clusters.map((cluster) => (
            <motion.div
              key={cluster.title}
              variants={item}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {cluster.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cluster.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
