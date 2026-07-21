import EntryCard from "../components/EntryCard";
import PageHeader from "../components/PageHeader";
import tools from "./tools.json";

export default function Tools() {
  return (
    <>
      <PageHeader
        eyebrow="Daily drivers"
        title="Tools"
        subtitle="The software I rely on to stay productive."
      />
      <div className="d-flex flex-column gap-3">
        {tools.map((tool) => (
          <EntryCard key={tool.title} href={tool.link} {...tool} />
        ))}
      </div>
    </>
  );
}
