import { Link, useParams } from "react-router-dom";

import content from "./content";
import blogs from "./blogs.json";

export default function BlogItem() {
  const { id } = useParams();
  const Article = content[id];
  const meta = blogs.find((blog) => blog.link === `/blog/${id}`);

  return (
    <article className="fade-in">
      <Link to="/" className="text-decoration-none d-inline-block mb-4">
        ← Back to blog
      </Link>

      {meta?.tags?.length ? (
        <div className="d-flex flex-wrap gap-2 mb-3">
          {meta.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="article-body">
        {Article ? <Article /> : <h1>Article not found</h1>}
      </div>
    </article>
  );
}
