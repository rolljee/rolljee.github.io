import PageHeader from "../components/PageHeader";

const contact = [
  { label: "Montpellier, France", href: null, icon: "📍" },
  { label: "nriquelmebareiro@kuzzle.io", href: "mailto:nriquelmebareiro@kuzzle.io", icon: "✉️" },
  { label: "github.com/rolljee", href: "https://github.com/rolljee", icon: "💻" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasriquelmebareiro/",
    icon: "🔗",
  },
];

const experiences = [
  {
    role: "Lead Software Engineer",
    org: "Kuzzle",
    period: "Present",
    location: "Montpellier, France",
    bullets: [
      "Lead backend and infrastructure work on an open-source IoT & data-management platform, with a strong focus on data sovereignty.",
      "Build platforms and tooling that let engineering teams ship faster and scale with confidence.",
      "Work daily with Node.js, Kubernetes, Docker and Terraform across the cloud stack.",
    ],
  },
];

const education = [
  {
    role: "Engineering degree (BAC+5), Computer Science",
    org: "EPSI Montpellier",
    period: "2012 — 2017",
  },
];

const certifications = ["Cisco CCNA — Level 2 (2015)", "Cisco CCNA — Level 1"];

const skills = [
  "Node.js",
  "TypeScript",
  "Kubernetes",
  "Docker",
  "Terraform",
  "CI/CD",
  "PostgreSQL",
  "Cloud infrastructure",
  "IoT platforms",
  "System architecture",
];

const languages = [
  { name: "French", level: "Native" },
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
          <p className="text-secondary mb-3">Lead Software Engineer @ Kuzzle</p>
          <div className="cv-contact">
            {contact.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          I build platforms that enable engineering teams to deliver faster and
          scale with confidence. Specialized in backend development and
          infrastructure, I focus on IoT and cloud solutions with a strong
          emphasis on data sovereignty. I never give up and always try to close
          any subject I am involved in.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {experiences.map((xp) => (
          <div className="cv-item" key={xp.role + xp.org}>
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
          <div className="cv-item" key={ed.org}>
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
