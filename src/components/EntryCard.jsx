import { useState } from "react";
import { Link } from "react-router-dom";

function CardMedia({ image, title }) {
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <img
        className="entry-card__media"
        src={image}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  // Fallback: a tile with the first letter, keeps the layout consistent.
  return (
    <span className="entry-card__media entry-card__media--fallback" aria-hidden="true">
      {title?.charAt(0).toUpperCase() || "•"}
    </span>
  );
}

function CardInner({ image, title, description, tags, showArrow }) {
  return (
    <>
      <CardMedia image={image} title={title} />
      <div className="entry-card__body">
        <h3 className="entry-card__title">
          {title}
          {showArrow ? <span className="arrow">→</span> : null}
        </h3>
        {description ? <p className="entry-card__desc">{description}</p> : null}
        {tags?.length ? (
          <div className="d-flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

/**
 * A single clickable card.
 *  - Pass `to` for internal (hash-router) navigation, e.g. a blog article.
 *  - Pass `href` for an external / whole-page URL.
 */
export default function EntryCard({ to, href, ...item }) {
  if (to) {
    return (
      <Link className="entry-card fade-in" to={to}>
        <CardInner {...item} showArrow />
      </Link>
    );
  }

  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      className="entry-card fade-in"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <CardInner {...item} showArrow />
    </a>
  );
}
