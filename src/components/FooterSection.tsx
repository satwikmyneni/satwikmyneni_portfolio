const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-sm font-semibold text-foreground tracking-wider mb-4">
              SM<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
              Final-year CS student focused on building reliable, scalable software.
              Open to SDE, full-stack, and data engineering roles.
            </p>
            <div className="flex gap-4">
              <a href="mailto:satwik@example.com" className="text-sm text-primary hover:underline font-mono">
                Email
              </a>
              <a href="#" className="text-sm text-primary hover:underline font-mono">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-primary hover:underline font-mono">
                GitHub
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-1">Hyderabad, India</p>
            <p className="text-sm text-muted-foreground mb-1">B.Tech Computer Science (2022–2026)</p>
            <p className="text-sm text-muted-foreground">CGPA: 8.10/10 • Minor: DS & ML – IIT Guwahati</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Satwik Myneni. Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
