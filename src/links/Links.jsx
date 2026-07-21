import EntryCard from "../components/EntryCard";
import PageHeader from "../components/PageHeader";
import links from "./links.json";

export default function Links() {
  return (
    <>
      <PageHeader
        eyebrow="Bookmarks"
        title="Links"
        subtitle="Resources and reads worth sharing."
      />
      <div className="d-flex flex-column gap-3">
        {links.map((link) => (
          <EntryCard key={link.title} href={link.link} {...link} />
        ))}
      </div>
    </>
  );
}
