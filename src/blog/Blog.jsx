import { useMemo, useState } from "react";
import Form from "react-bootstrap/Form";

import blogs from "./blogs.json";
import EntryCard from "../components/EntryCard";
import PageHeader from "../components/PageHeader";

const allTags = [...new Set(blogs.flatMap((blog) => blog.tags ?? []))].sort();

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return blogs.filter((blog) => {
      const matchesQuery =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.description?.toLowerCase().includes(query) ||
        blog.tags?.some((tag) => tag.toLowerCase().includes(query));
      const matchesTag = !activeTag || blog.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        subtitle="Notes on backend engineering, infrastructure and the tools I build."
      />

      <Form.Control
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search articles…"
        className="mb-3"
      />

      {allTags.length ? (
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button
            type="button"
            className={`tag tag--filter ${activeTag === null ? "is-active" : ""}`}
            onClick={() => setActiveTag(null)}
          >
            all
          </button>
          {allTags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={`tag tag--filter ${activeTag === tag ? "is-active" : ""}`}
              onClick={() =>
                setActiveTag((current) => (current === tag ? null : tag))
              }
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}

      <div className="d-flex flex-column gap-3">
        {filtered.length ? (
          filtered.map((blog) => (
            <EntryCard key={blog.link} to={blog.link} {...blog} />
          ))
        ) : (
          <p className="text-secondary">No article matches your search.</p>
        )}
      </div>
    </>
  );
}
