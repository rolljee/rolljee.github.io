import EntryCard from "../components/EntryCard";
import PageHeader from "../components/PageHeader";
import projects from "./projects.json";

export default function Project() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="My projects"
        subtitle="Side projects and open-source tools I have built along the way."
      />
      <div className="d-flex flex-column gap-3">
        {projects.map((project) => (
          <EntryCard key={project.title} href={project.link} {...project} />
        ))}
      </div>
    </>
  );
}
