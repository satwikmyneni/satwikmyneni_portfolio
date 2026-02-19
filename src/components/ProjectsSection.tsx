import { motion } from "framer-motion";

const projects = [
  {
    title: "TaskFlow",
    subtitle: "Enterprise Workforce Management System",
    tags: ["Full-Stack", "Backend", "RBAC"],
    problem: "Organizations need scalable role-based task management with fine-grained access control.",
    stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "REST APIs"],
    impact: [
      "4-role RBAC implementation",
      "15+ REST APIs with modular architecture",
      "Indexed relational schema → 30% faster queries",
      "Multi-tier architecture with AWS S3 integration",
    ],
    github: "#",
  },
  {
  title: "Electrical Contracts Portfolio Website",
  subtitle: "Freelance Client Project",
  tags: ["Frontend", "Freelancing", "UI/UX"],
  problem: "Small-scale contracting business needed a professional digital presence to showcase services and improve client acquisition.",
  stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  impact: [
    "Designed and developed fully responsive static website",
    "Improved business visibility and credibility through modern UI",
    "Optimized layout for mobile and cross-device compatibility",
    "Delivered production-ready solution aligned with client requirements"
  ],
  github: "https://github.com/satwikmyneni/PARUCHURIPROJECTS",
  live:"paruchuriprojets.netlify.app",
},
{
  title: "Clothing Boutique E-Commerce Platform",
  subtitle: "Full-Stack Freelance Project",
  tags: ["Full-Stack", "Backend", "Database"],
  problem: "Client required a scalable system to manage products, orders, and customer interactions with admin control.",
  stack: ["Django", "PostgreSQL", "JavaScript", "REST APIs"],
  impact: [
    "Built full-stack e-commerce platform with authentication system",
    "Developed admin dashboard for product and order management",
    "Handled real-world data scenarios including product updates and inventory changes",
    "Integrated database for dynamic product handling",
    "Implemented CRUD workflows and secure backend APIs",
    "Delivered end-to-end deployable system for real client usage"
  ],
  github: "https://github.com/satwikmyneni/vastra",
  live:"https://vaastra.netlify.app/",
},

  {
    title: "Scalable Data Processing Platform",
    subtitle: "Backend + Data Engineering",
    tags: ["Backend", "Data Pipeline"],
    problem: "Processing large CSV datasets efficiently with secure access and optimized querying.",
    stack: ["Python", "Django", "MySQL", "REST APIs"],
    impact: [
      "CSV ingestion pipeline with validation",
      "Secure authentication layer",
      "Query optimization → 25% efficiency improvement",
      "Modular backend design",
    ],
    github: "#",
    live:"#",
  },
  {
    title: "JobScam Spotter",
    subtitle: "ML-Powered Fraud Detection",
    tags: ["ML", "Data Science", "Deployment"],
    problem: "Detecting fraudulent job postings from large unstructured datasets.",
    stack: ["Python", "Scikit-learn", "TF-IDF", "Random Forest", "Streamlit"],
    impact: [
      "10K+ job postings analyzed",
      "92% recall on fraud detection",
      "Risk visualization dashboard",
      "Deployed via Streamlit",
    ],
    github: "https://github.com/satwikmyneni/spot-the-scam",
    live:"https://jobscamspotter.streamlit.app/",
  },
  {
    title: "NeoHealth AI",
    subtitle: "Disease Prediction System",
    tags: ["ML", "Full-Stack"],
    problem: "Building a predictive health system with retraining capabilities.",
    stack: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    impact: [
      "Multi-disease prediction model",
      "Automated retraining workflow",
      "Interactive Streamlit interface",
      "Robust data preprocessing pipeline",
    ],
    github: "https://github.com/satwikmyneni/AI_medical_diagnosis",
    live: "https://neohealthai.streamlit.app/",
  },
  {
    title: "Weather Analytics App",
    subtitle: "Real-Time Data Integration",
    tags: ["Full-Stack", "API"],
    problem: "Aggregating and visualizing weather data with real-time trend comparisons.",
    stack: ["Django", "REST API", "JavaScript", "Chart.js"],
    impact: [
      "Real-time API ingestion with validation",
      "Trend comparison dashboards",
      "Backend data processing layer",
    ],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Selected Projects & Client Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors duration-300 flex flex-col ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-primary border border-primary/20 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <span className="text-foreground font-medium">Problem: </span>
                {project.problem}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="space-y-1.5 mb-6 flex-1">
                {project.impact.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

               <div className="flex gap-4 mt-auto">
                  {project.github && (
                  <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-primary hover:underline">
                  GitHub →
                  </a>)}

                  {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-primary hover:underline">
                    Live →
                  </a>)}
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
