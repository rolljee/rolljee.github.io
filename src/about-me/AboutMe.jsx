import PageHeader from "../components/PageHeader";

const skills = [
  "Node.js",
  "Kubernetes",
  "Terraform",
  "Docker",
  "PostgreSQL",
  "CI/CD",
  "Infrastructure",
];

export default function AboutMe() {
  return (
    <>
      <PageHeader eyebrow="Nice to meet you" title="About me" />

      <div className="d-flex flex-column flex-sm-row align-items-center gap-4 mb-4">
        <img className="hero-avatar flex-shrink-0" src="/me.jpeg" alt="Ricky" />
        <div>
          <h2 className="hero-name h3 mb-1">Nicolas “Ricky” Riquelme</h2>
          <p className="text-secondary mb-2">
            Lead Software Engineer @ Kuzzle.io
          </p>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="article-body">
        <p>
          I am Nicolas Riquelme, also known as Ricky, and a father to a lovely
          little girl. I currently work at <strong>Kuzzle.io</strong> as their
          Lead Software Engineer.
        </p>
        <p>
          I am specialized in backend development and infrastructure, and have
          been working with Node.js and Kubernetes (and a lot of other tools)
          for the last few years. Along the way I have built a range of tools to
          help me and my team be more efficient.
        </p>
        <p className="mb-0">
          My best quality is that I never give up — I will always try to close
          any subject I am involved in.
        </p>
      </div>
    </>
  );
}
