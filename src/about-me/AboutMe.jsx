import PageHeader from "../components/PageHeader";

const contact = [
  { label: "Montpellier, Occitanie, France", href: null, icon: "📍" },
  {
    label: "n.riquelmebareiro@gmail.com",
    href: "mailto:n.riquelmebareiro@gmail.com",
    icon: "✉️",
  },
  { label: "github.com/rolljee", href: "https://github.com/rolljee", icon: "💻" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasriquelmebareiro/",
    icon: "🔗",
  },
];

const experiences = [
  {
    role: "Platform Engineer & Product Owner — Kuzzle PaaS",
    org: "Kuzzle",
    period: "Jan 2024 — Present",
    location: "Montpellier, France",
    bullets: [
      "Lead the vision, architecture and development of Kuzzle PaaS, an Internal Developer Platform (IDP) that simplifies deploying and operating IoT platforms across multiple clouds and on-premise.",
      "Combine technical leadership with product ownership: define the roadmap and automate infrastructure provisioning, deployments, Kubernetes lifecycle, observability and security so teams ship production-ready environments in minutes.",
      "Collaborate with leadership and sales on platform strategy, solution architecture, customer workshops and pre-sales.",
    ],
  },
  {
    role: "Lead DevOps Engineer",
    org: "Kuzzle",
    period: "Jan 2022 — Jan 2024",
    location: "Montpellier, France",
    bullets: [
      "Designed, operated and continuously improved secure, reliable and scalable production infrastructure for Kuzzle's products and customer deployments.",
      "Standardized CI/CD pipelines, automated infrastructure provisioning and strengthened observability across the organization.",
      "Led customer migrations from traditional environments to Kubernetes-based architectures on public cloud and on-premise.",
    ],
  },
  {
    role: "Software Engineer — Core Product Developer",
    org: "Kuzzle",
    period: "Jan 2020 — Jan 2022",
    location: "Montpellier, France",
    bullets: [
      "Designed and implemented core backend features of Kuzzle, an open-source backend platform for IoT applications.",
      "Built and maintained the plugin ecosystem, designed REST & Realtime APIs, and helped shape the product's long-term technical direction.",
      "Improved extensibility, developer experience, documentation and tooling across the open-source project.",
    ],
  },
  {
    role: "Software Developer — Node.js",
    org: "Videomenthe",
    period: "Apr 2015 — Jan 2020",
    location: "Montpellier, France",
    bullets: [
      "Full-stack development of the Eolementhe media-workflow application (Node.js, ES6, ReactJS), enabling cloud video processing and delivery to TV channels.",
      "Built REST & SOAP APIs and the iOS/Android application; deployed on AWS, Azure, Orange, OVH and ZAYO with Docker and Kubernetes (AKS & on-prem MicroK8s).",
      "Set up continuous integration (Jenkins) and unit testing (Jest), plus supporting tools (license manager, Slack alerting plugins).",
    ],
  },
];

const education = [
  {
    role: "Engineering degree — Software Development & Cloud Computing",
    org: "EPSI Montpellier",
    period: "2012 — 2017",
  },
  {
    role: "BTS SIO — IT Services for Organizations",
    org: "EPSI Montpellier",
    period: "2012 — 2014",
  },
  {
    role: "Scientific Baccalauréat — Physics",
    org: "Lycée Frédéric Bazille · Agropolis",
    period: "2009 — 2012",
  },
];

const certifications = ["Cisco CCNA — Level 2", "Cisco CCNA — Level 1"];

const skills = [
  "Platform Engineering (IDP)",
  "Kubernetes",
  "Cloud Native",
  "Multi-cloud & On-Prem",
  "DevOps · GitOps · IaC",
  "Terraform",
  "Distributed Systems",
  "Elasticsearch",
  "CI/CD & Automation",
  "Developer Experience",
  "Software Architecture",
  "JavaScript / TypeScript",
  "Node.js",
  "Go",
  "Python",
  "Technical Leadership & Mentoring",
];

const languages = [
  { name: "French", level: "Native / Bilingual" },
  { name: "English", level: "Full professional proficiency" },
  { name: "Spanish", level: "Professional working proficiency" },
];

function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section__title">{title}</h2>
      {children}
    </section>
  );
}

export default function AboutMe() {
  return (
    <div className="fade-in">
      <PageHeader eyebrow="Curriculum Vitæ" title="About me" />

      {/* Header */}
      <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
        <img className="hero-avatar flex-shrink-0" src="/me.jpeg" alt="Ricky" />
        <div>
          <h2 className="hero-name h3 mb-1">Nicolas “Ricky” Riquelme Bareiro</h2>
          <p className="text-secondary mb-3">Platform Engineer @ Kuzzle</p>
          <div className="cv-contact">
            {contact.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <span aria-hidden="true">{c.icon}</span>
                  {c.label}
                </a>
              ) : (
                <span key={c.label}>
                  <span aria-hidden="true">{c.icon}</span>
                  {c.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      <Section title="Profile">
        <p className="article-body mb-0">
          I build platforms that enable engineering teams to deliver faster,
          scale with confidence, and focus on creating value instead of managing
          infrastructure. My career began building cloud applications and APIs
          with JavaScript and Node.js, then expanded to cloud infrastructure,
          distributed systems, Kubernetes and Platform Engineering — bridging
          software development and operations. At Kuzzle I've worn many hats
          (Core Product Developer, DevOps Lead, Product Owner and Platform
          Engineer) and led the design of Kuzzle PaaS, an Internal Developer
          Platform that automates the deployment, operation and lifecycle of IoT
          platforms across multiple clouds and on-premise. I care just as much
          about enabling others: mentoring engineers, sharing knowledge and
          establishing engineering best practices. I'm passionate about building
          platforms that engineers love.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {experiences.map((xp) => (
          <div className="cv-item" key={xp.role + xp.period}>
            <div className="cv-item__head">
              <p className="cv-item__role">
                {xp.role} · <span className="cv-item__org">{xp.org}</span>
              </p>
              <span className="cv-item__period">{xp.period}</span>
            </div>
            {xp.location ? (
              <div className="cv-item__period">{xp.location}</div>
            ) : null}
            <div className="cv-item__desc">
              <ul>
                {xp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        {education.map((ed) => (
          <div className="cv-item" key={ed.role}>
            <div className="cv-item__head">
              <p className="cv-item__role">
                {ed.role} · <span className="cv-item__org">{ed.org}</span>
              </p>
              <span className="cv-item__period">{ed.period}</span>
            </div>
          </div>
        ))}
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <ul className="article-body mb-0">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </Section>

      {/* Languages */}
      <Section title="Languages">
        <div style={{ maxWidth: 420 }}>
          {languages.map((lang) => (
            <div className="cv-lang" key={lang.name}>
              <span className="fw-medium">{lang.name}</span>
              <span className="cv-lang__level">{lang.level}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
